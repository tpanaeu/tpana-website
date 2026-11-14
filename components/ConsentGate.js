import { useEffect, useState } from 'react'

const CONSENT_COOKIE_NAME = 'tpana_marketing_consent'
const CONSENT_GRANTED_VALUE = 'granted'
const CONSENT_DENIED_VALUE = 'denied'
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180

export default function ConsentGate({ children, enabled, onChange }) {
  const [showBanner, setShowBanner] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    if (!enabled) return undefined

    const saved = document.cookie.split(';').map((entry) => entry.trim())
      .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`))?.split('=')[1]

    if (saved === CONSENT_GRANTED_VALUE || saved === CONSENT_DENIED_VALUE) {
      const granted = saved === CONSENT_GRANTED_VALUE
      setHasConsent(granted)
      onChange(granted)
    } else {
      setShowBanner(true)
    }

    const showSettings = () => {
      setShowBanner(true)
      window.requestAnimationFrame(() => document.getElementById('analytics-decline')?.focus())
    }
    window.addEventListener('tpana:analytics-settings', showSettings)
    return () => window.removeEventListener('tpana:analytics-settings', showSettings)
  }, [enabled, onChange])

  function choose(granted) {
    const value = granted ? CONSENT_GRANTED_VALUE : CONSENT_DENIED_VALUE
    const secure = window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${CONSENT_COOKIE_NAME}=${value}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`
    if (!granted && hasConsent) {
      try {
        window.clarity?.('consent', false)
      } finally {
        window.location.reload()
      }
      return
    }
    setHasConsent(granted)
    onChange(granted)
    setShowBanner(false)
    document.getElementById('analytics-preference')?.focus()
  }

  return (
    <>
      {children}
      {showBanner && (
        <section className="consent-banner" aria-label="Analytics preferences">
          <strong>Optional analytics</strong>
          <p>Allow Microsoft Clarity to help us understand how visitors use the site. You can change your choice on the privacy page.</p>
          <div className="consent-actions">
            <button type="button" id="analytics-decline" className="button button-outline" onClick={() => choose(false)}>Decline</button>
            <button type="button" className="button" onClick={() => choose(true)}>Allow analytics</button>
          </div>
        </section>
      )}
    </>
  )
}
