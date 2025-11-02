import { useEffect, useRef, useState } from "react";

const CONSENT_COOKIE_NAME = "tpana_marketing_consent";
const CONSENT_GRANTED_VALUE = "granted";
const CONSENT_DENIED_VALUE = "denied";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180 days

const parseConsentCookie = () => {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieMatch = document.cookie
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!cookieMatch) {
    return null;
  }

  const [, value] = cookieMatch.split("=");
  return value || null;
};

const setConsentCookie = (value) => {
  if (typeof document === "undefined") {
    return;
  }

  if (!value) {
    document.cookie = `${CONSENT_COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`;
    return;
  }

  const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secureFlag}`;
};

const consentOverlayStyles = {
  container:
    "fixed inset-0 z-50 flex items-end justify-center bg-slate-900/70 px-4 sm:px-6 pb-4 sm:pb-6",
  panel:
    "w-full rounded-t-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900",
  heading: "text-2xl sm:text-3xl font-semibold font-heading text-slate-900 mb-4",
  body: "text-base sm:text-lg text-slate-700 leading-relaxed font-body",
  actions: "mt-6 flex justify-end",
  primaryButton:
    "w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
};

const revokeTriggerStyles = {
  container:
    "fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full bg-blue-600 text-white px-4 py-3 shadow-lg cursor-pointer transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300",
  text: "text-sm font-semibold font-heading",
  iconWrapper:
    "flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600",
  icon: "h-4 w-4",
};

const revokeBannerStyles = {
  container:
    "fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 sm:px-6 pb-4 sm:pb-6",
  panel:
    "w-full rounded-t-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 max-w-5xl",
  heading: "text-2xl sm:text-3xl font-semibold font-heading text-slate-900 mb-4",
  body: "text-base sm:text-lg text-slate-700 leading-relaxed font-body",
  actions: "mt-6 flex justify-end",
  action:
    "w-full sm:w-auto px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-semibold transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400",
};

const ConsentOverlay = ({ onAccept }) => (
  <div className={consentOverlayStyles.container} role="dialog" aria-modal="true">
    <div className={consentOverlayStyles.panel}>
      <h2 className={consentOverlayStyles.heading}>Cookie Consent Required</h2>
      <div className={consentOverlayStyles.body}>
        <p>
          We use marketing cookies to provide analytics insights (Microsoft Clarity) that
          help us improve our services. To visit this website you need to grant consent
          for marketing cookies. We do not share or store your personal data on our servers;
          your consent choice is only saved in a cookie on your device.
        </p>
        <p className="mt-4">
          By clicking &ldquo;Allow marketing cookies&rdquo; you agree to the use of these
          cookies. If you do not wish to accept marketing cookies, please close this page.
        </p>
      </div>
      <div className={consentOverlayStyles.actions}>
        <button
          type="button"
          className={consentOverlayStyles.primaryButton}
          onClick={onAccept}
        >
          Allow marketing cookies
        </button>
      </div>
    </div>
  </div>
);

const ConsentRevokePrompt = ({ onRevoke, onClose }) => (
  <div className={revokeBannerStyles.container} role="dialog" aria-modal="true">
    <div className={revokeBannerStyles.panel}>
      <h3 className={revokeBannerStyles.heading}>Marketing cookies enabled</h3>
      <p className={revokeBannerStyles.body}>
        You have granted consent for marketing cookies. You can revoke this permission
        at any time. Revoking will disable marketing cookies and request consent again.
      </p>
      <div className={revokeBannerStyles.actions}>
        <button
          type="button"
          className={revokeBannerStyles.action}
          onClick={() => {
            onRevoke();
            onClose();
          }}
        >
          Revoke consent
        </button>
      </div>
    </div>
  </div>
);

const ConsentGate = ({ children, onMarketingConsent, onMarketingRevoke }) => {
  const [consentState, setConsentState] = useState(() => parseConsentCookie());
  const [isRevokeDialogOpen, setIsRevokeDialogOpen] = useState(false);
  const bodyOverflowRef = useRef(null);

  useEffect(() => {
    if (!consentState) {
      return;
    }

    setConsentCookie(consentState);

    if (
      consentState === CONSENT_GRANTED_VALUE &&
      typeof onMarketingConsent === "function"
    ) {
      onMarketingConsent();
    }

    if (consentState === CONSENT_DENIED_VALUE && typeof onMarketingRevoke === "function") {
      onMarketingRevoke();
    }
  }, [consentState, onMarketingConsent, onMarketingRevoke]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const storedConsent = parseConsentCookie();
    if (storedConsent && storedConsent !== consentState) {
      setConsentState(storedConsent);
    }

    if (bodyOverflowRef.current === null) {
      bodyOverflowRef.current = document.body.style.overflow;
    }

    if (consentState !== CONSENT_GRANTED_VALUE) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = bodyOverflowRef.current || "";
    }

    return () => {
      document.body.style.overflow = bodyOverflowRef.current || "";
    };
  }, [consentState]);
  const isGranted = consentState === CONSENT_GRANTED_VALUE;

  return (
    <>
      <div aria-hidden={!isGranted}>{children}</div>
      {!isGranted ? (
        <ConsentOverlay onAccept={() => setConsentState(CONSENT_GRANTED_VALUE)} />
      ) : null}
      {isGranted ? (
        <>
          <button
            type="button"
            aria-label="Marketing cookies enabled. Click to manage."
            className={revokeTriggerStyles.container}
            onClick={() => setIsRevokeDialogOpen(true)}
          >
            <span className={revokeTriggerStyles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={revokeTriggerStyles.icon}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4 4 0 00-4 4v1H5a2 2 0 00-2 2v3a6 6 0 0012 0V8a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm-5 9V8a1 1 0 011-1h8a1 1 0 011 1v2H5zm5 6a5 5 0 01-5-5h10a5 5 0 01-5 5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className={revokeTriggerStyles.text}>Marketing cookies enabled</span>
          </button>
          {isRevokeDialogOpen ? (
            <ConsentRevokePrompt
              onRevoke={() => {
                setConsentState(CONSENT_DENIED_VALUE);
                setConsentCookie(CONSENT_DENIED_VALUE);
              }}
              onClose={() => setIsRevokeDialogOpen(false)}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ConsentGate;
export { CONSENT_GRANTED_VALUE, CONSENT_COOKIE_NAME, CONSENT_DENIED_VALUE };
