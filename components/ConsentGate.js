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
  backdrop:
    "fixed inset-0 z-50 flex items-end justify-center bg-slate-900/75 px-4 sm:px-6 pb-4 sm:pb-6",
  panel:
    "w-full max-w-5xl rounded-t-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900",
  heading: "text-2xl sm:text-3xl font-semibold font-heading text-slate-900 mb-4",
  body: "text-base sm:text-lg text-slate-700 leading-relaxed font-body",
  actions: "mt-6 flex justify-end",
  primaryButton:
    "w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
};

const manageTriggerStyles = {
  button:
    "fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300",
  icon: "h-6 w-6",
};

const manageOverlayStyles = {
  backdrop:
    "fixed inset-0 z-50 flex items-end justify-center bg-slate-900/75 px-4 sm:px-6 pb-4 sm:pb-6",
  panel:
    "w-full max-w-5xl rounded-t-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900",
  heading: "text-2xl sm:text-3xl font-semibold font-heading text-slate-900 mb-4",
  body: "text-base sm:text-lg text-slate-700 leading-relaxed font-body",
  actions:
    "mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4",
  keepButton:
    "w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
  revokeButton:
    "w-full sm:w-auto px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-semibold transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400",
};

const ConsentOverlay = ({ onAccept }) => {
  const acceptButtonRef = useRef(null);

  useEffect(() => {
    acceptButtonRef.current?.focus();
  }, []);

  return (
    <div className={consentOverlayStyles.backdrop} role="presentation">
      <div
        className={consentOverlayStyles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="marketing-consent-title"
        aria-describedby="marketing-consent-description"
      >
        <h2 id="marketing-consent-title" className={consentOverlayStyles.heading}>
          Marketing cookies required
        </h2>
        <div id="marketing-consent-description" className={consentOverlayStyles.body}>
          <p>
            We rely on marketing cookies (Microsoft Clarity) to understand how visitors use
            our site and to improve our services. Visiting this website requires consent for
            marketing cookies. Your choice is stored only in a cookie on your device—we do
            not store personal data on our servers.
          </p>
          <p className="mt-4">
            Click &ldquo;Allow marketing cookies&rdquo; to continue. If you prefer not to
            consent, please close this page.
          </p>
        </div>
        <div className={consentOverlayStyles.actions}>
          <button
            ref={acceptButtonRef}
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
};

const ConsentRevokeTrigger = ({ onOpen }) => (
  <button
    type="button"
    className={manageTriggerStyles.button}
    aria-label="Manage marketing cookie consent"
    onClick={onOpen}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={manageTriggerStyles.icon}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 1a4 4 0 00-4 4v1H5a2 2 0 00-2 2v3a6 6 0 0012 0V8a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm-5 9V8a1 1 0 011-1h8a1 1 0 011 1v2H5zm5 6a5 5 0 01-5-5h10a5 5 0 01-5 5z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Marketing cookies enabled</span>
  </button>
);

const ConsentRevokePrompt = ({ onRevoke, onClose }) => {
  const revokeButtonRef = useRef(null);
  const keepButtonRef = useRef(null);

  useEffect(() => {
    revokeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab") {
        const focusTargets = [keepButtonRef.current, revokeButtonRef.current].filter(
          Boolean
        );

        if (focusTargets.length === 0) {
          return;
        }

        const first = focusTargets[0];
        const last = focusTargets[focusTargets.length - 1];
        const isShift = event.shiftKey;
        const active = document.activeElement;

        if (!isShift && active === last) {
          event.preventDefault();
          first?.focus();
        } else if (isShift && active === first) {
          event.preventDefault();
          last?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={manageOverlayStyles.backdrop}
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={manageOverlayStyles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="marketing-consent-manage-title"
        aria-describedby="marketing-consent-manage-description"
      >
        <h3
          id="marketing-consent-manage-title"
          className={manageOverlayStyles.heading}
        >
          Marketing cookies enabled
        </h3>
        <div
          id="marketing-consent-manage-description"
          className={manageOverlayStyles.body}
        >
          <p>
            You have granted consent for marketing cookies. Revoking consent will disable
            marketing cookies immediately and the full consent banner will appear again on
            the next view.
          </p>
        </div>
        <div className={manageOverlayStyles.actions}>
          <button
            ref={keepButtonRef}
            type="button"
            className={manageOverlayStyles.keepButton}
            onClick={onClose}
          >
            Keep enabled
          </button>
          <button
            ref={revokeButtonRef}
            type="button"
            className={manageOverlayStyles.revokeButton}
            onClick={onRevoke}
          >
            Revoke consent
          </button>
        </div>
      </div>
    </div>
  );
};

const ConsentGate = ({ children, onMarketingConsent, onMarketingRevoke }) => {
  const [consentState, setConsentState] = useState(() => parseConsentCookie());
  const [isRevokeDialogOpen, setIsRevokeDialogOpen] = useState(false);
  const contentWrapperRef = useRef(null);
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

  useEffect(() => {
    const contentElement = contentWrapperRef.current;
    if (!contentElement) {
      return;
    }

    const makeInteractive = (interactive) => {
      if (interactive) {
        contentElement.removeAttribute("aria-hidden");
        contentElement.style.pointerEvents = "";
        contentElement.style.userSelect = "";
        if ("inert" in contentElement) {
          contentElement.inert = false;
        }
      } else {
        contentElement.setAttribute("aria-hidden", "true");
        contentElement.style.pointerEvents = "none";
        contentElement.style.userSelect = "none";
        if ("inert" in contentElement) {
          contentElement.inert = true;
        }
      }
    };

    makeInteractive(consentState === CONSENT_GRANTED_VALUE);

    return () => {
      makeInteractive(true);
    };
  }, [consentState]);

  useEffect(() => {
    if (consentState !== CONSENT_GRANTED_VALUE) {
      setIsRevokeDialogOpen(false);
    }
  }, [consentState]);

  const isGranted = consentState === CONSENT_GRANTED_VALUE;

  return (
    <>
      <div ref={contentWrapperRef}>{children}</div>
      {!isGranted ? (
        <ConsentOverlay onAccept={() => setConsentState(CONSENT_GRANTED_VALUE)} />
      ) : null}
      {isGranted ? (
        <>
          <ConsentRevokeTrigger onOpen={() => setIsRevokeDialogOpen(true)} />
          {isRevokeDialogOpen ? (
            <ConsentRevokePrompt
              onClose={() => setIsRevokeDialogOpen(false)}
              onRevoke={() => {
                setConsentState(CONSENT_DENIED_VALUE);
                setConsentCookie(CONSENT_DENIED_VALUE);
                setIsRevokeDialogOpen(false);
              }}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ConsentGate;
export { CONSENT_GRANTED_VALUE, CONSENT_COOKIE_NAME, CONSENT_DENIED_VALUE };
