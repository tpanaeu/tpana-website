import "./style.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const claritySnippet = clarityProjectId
    ? `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", ${JSON.stringify(clarityProjectId)});
      `
        .replace(/\s+/g, " ")
        .trim()
    : null;
  const trackedPagesRef = useRef(new Set());

  useEffect(() => {
    if (!clarityProjectId || typeof window === "undefined") {
      return undefined;
    }

    const currentPath = router.asPath;
    trackedPagesRef.current.delete(currentPath);

    const handleScroll = () => {
      if (trackedPagesRef.current.has(currentPath)) {
        return;
      }

      const { documentElement } = document;
      const fullHeight = Math.max(
        documentElement.scrollHeight,
        documentElement.offsetHeight
      );
      const scrollableHeight = fullHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        trackedPagesRef.current.add(currentPath);
        if (typeof window.clarity === "function") {
          window.clarity("event", "pageScrolled75", { path: currentPath });
        }
        return;
      }

      const scrolledFraction = window.scrollY / scrollableHeight;

      if (scrolledFraction >= 0.75) {
        trackedPagesRef.current.add(currentPath);
        if (typeof window !== "undefined" && typeof window.clarity === "function") {
          window.clarity("event", "pageScrolled75", { path: currentPath });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clarityProjectId, router.asPath]);

  return (
    <>
      {claritySnippet ? (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: claritySnippet,
          }}
        />
      ) : null}
      <Component {...pageProps} />
    </>
  );
}
