import "./style.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
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
