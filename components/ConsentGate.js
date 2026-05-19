import { useEffect, useState } from "react";

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

const ConsentBanner = ({ onAccept, onDecline }) => (
  <div className="consent-banner" role="region" aria-label="Cookie consent">
    <div className="consent-copy">
      <strong>Optional analytics</strong>
      <span>
        TPANA works without tracking. Microsoft Clarity is loaded only if you allow
        analytics cookies.
      </span>
    </div>
    <div className="consent-actions">
      <button type="button" className="consent-secondary" onClick={onDecline}>
        Decline
      </button>
      <button type="button" className="consent-primary" onClick={onAccept}>
        Allow analytics
      </button>
    </div>
    <style jsx>{`
      .consent-banner {
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 140;
        width: min(calc(100% - 32px), 520px);
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 14px;
        border: 1px solid var(--dl-border-subtle);
        border-radius: 18px;
        background: rgba(14, 17, 23, 0.96);
        color: var(--dl-color-neutral-100);
        box-shadow: 0 24px 60px -40px rgba(0, 0, 0, 0.75);
      }
      .consent-copy {
        min-width: 0;
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 4px;
      }
      .consent-copy strong {
        font-family: var(--dl-font-heading);
        font-size: 0.95rem;
        line-height: 1.2;
      }
      .consent-copy span {
        color: var(--dl-color-neutral-200);
        font-size: 0.88rem;
        line-height: 1.45;
      }
      .consent-actions {
        display: flex;
        flex-shrink: 0;
        gap: 8px;
      }
      .consent-primary,
      .consent-secondary {
        min-height: 40px;
        padding: 0.65rem 0.9rem;
        border-radius: 999px;
        font-family: var(--dl-font-heading);
        font-size: 0.82rem;
        font-weight: 700;
        cursor: pointer;
      }
      .consent-primary {
        color: #071015;
        background: var(--dl-color-primary-500);
      }
      .consent-secondary {
        color: var(--dl-color-neutral-100);
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.04);
      }
      .consent-primary:focus-visible,
      .consent-secondary:focus-visible {
        outline: 3px solid rgba(0, 210, 220, 0.28);
        outline-offset: 3px;
      }
      @media (max-width: 640px) {
        .consent-banner {
          left: 16px;
          right: 16px;
          flex-direction: column;
          align-items: stretch;
        }
        .consent-actions {
          justify-content: flex-end;
        }
      }
    `}</style>
  </div>
);

const ConsentGate = ({ children, onMarketingConsent, onMarketingRevoke }) => {
  const [consentState, setConsentState] = useState(null);

  useEffect(() => {
    setConsentState(parseConsentCookie());
  }, []);

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

    if (
      consentState === CONSENT_DENIED_VALUE &&
      typeof onMarketingRevoke === "function"
    ) {
      onMarketingRevoke();
    }
  }, [consentState, onMarketingConsent, onMarketingRevoke]);

  return (
    <>
      {children}
      {!consentState ? (
        <ConsentBanner
          onAccept={() => setConsentState(CONSENT_GRANTED_VALUE)}
          onDecline={() => setConsentState(CONSENT_DENIED_VALUE)}
        />
      ) : null}
    </>
  );
};

export default ConsentGate;
export { CONSENT_GRANTED_VALUE, CONSENT_COOKIE_NAME, CONSENT_DENIED_VALUE };
