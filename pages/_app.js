import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import ConsentGate, {
  CONSENT_COOKIE_NAME,
  CONSENT_GRANTED_VALUE,
} from "../components/ConsentGate";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [hasMarketingConsent, setHasMarketingConsent] = useState(false);
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
    if (typeof document === "undefined") {
      return;
    }
    const cookieMatch = document.cookie
      .split(";")
      .map((entry) => entry.trim())
      .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`));

    if (!cookieMatch) {
      setHasMarketingConsent(false);
    } else {
      const [, value] = cookieMatch.split("=");
      setHasMarketingConsent(value === CONSENT_GRANTED_VALUE);
    }
  }, []);

  useEffect(() => {
    if (
      !clarityProjectId ||
      typeof window === "undefined" ||
      !hasMarketingConsent
    ) {
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
  }, [clarityProjectId, hasMarketingConsent, router.asPath]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (hasMarketingConsent) {
      return undefined;
    }

    const clarityScript = document.getElementById("microsoft-clarity");
    if (clarityScript && clarityScript.parentNode) {
      clarityScript.parentNode.removeChild(clarityScript);
    }

    if (typeof window.clarity === "function") {
      try {
        window.clarity("consent", false);
      } catch (error) {
        // Ignore errors if clarity does not support consent revocation
      }
      delete window.clarity;
    }

    trackedPagesRef.current.clear();

    return undefined;
  }, [hasMarketingConsent]);

  return (
    <>
      {claritySnippet && hasMarketingConsent ? (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: claritySnippet,
          }}
        />
      ) : null}
      <ConsentGate
        onMarketingConsent={() => setHasMarketingConsent(true)}
        onMarketingRevoke={() => setHasMarketingConsent(false)}
      >
        <Component {...pageProps} />
      </ConsentGate>
    </>
  );
}
