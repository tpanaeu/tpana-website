import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const FooterContainer = (props) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className={`footer-container ${props.rootClassName}`}>
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-frame">
                <img
                  src="/assets/tp-logotype-horizontal-tight.png"
                  alt="TPANA horizontal logotype"
                  className="footer-logo"
                />
              </div>
              <p className="content footer-copy">
                Strategy, product, and engineering leadership for organisations modernising
                high-trust services.
              </p>
            </div>

            <div className="footer-column">
              <span className="footer-label">Explore</span>
              <Link href="/about">
                <a className="footer-link">About</a>
              </Link>
              <Link href="/experience">
                <a className="footer-link">Experience</a>
              </Link>
              <Link href="/contact">
                <a className="footer-link">Contact</a>
              </Link>
            </div>

            <div className="footer-column">
              <span className="footer-label">Offer</span>
              <span className="footer-meta">Product strategy</span>
              <span className="footer-meta">Platform modernisation</span>
              <span className="footer-meta">Embedded leadership</span>
            </div>

            <div className="footer-column">
              <span className="footer-label">Start A Conversation</span>
              <a className="footer-link footer-email" href="mailto:contact@tpana.eu">
                contact@tpana.eu
              </a>
              <span className="footer-meta">Athens based, working across Europe and beyond</span>
              <div className="footer-socials">
                <a
                  className="footer-social"
                  href="https://www.linkedin.com/in/thodorispanagopoulos/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M4.984 3.5c0 1.38-1.11 2.5-2.484 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.484 1.12 2.484 2.5zM.297 23.429V7.714h4.407v15.715H.297zm7.063-15.715h4.224v2.147h.058c.59-1.118 2.034-2.296 4.187-2.296 4.477 0 5.303 2.947 5.303 6.782v7.782h-4.59v-6.899c0-1.646-.03-3.763-2.294-3.763-2.295 0-2.647 1.79-2.647 3.64v7.022H7.36V7.714z"></path>
                  </svg>
                </a>
                <a
                  className="footer-social"
                  href="https://github.com/tpanagopoulos"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.094 3.292 9.41 7.866 10.941.575.105.785-.25.785-.556 0-.274-.01-1.183-.015-2.146-3.2.696-3.875-1.537-3.875-1.537-.523-1.328-1.28-1.682-1.28-1.682-1.046-.713.079-.699.079-.699 1.158.082 1.768 1.19 1.768 1.19 1.03 1.766 2.704 1.256 3.364.96.105-.746.403-1.256.733-1.546-2.553-.29-5.238-1.277-5.238-5.683 0-1.255.45-2.282 1.187-3.086-.12-.29-.515-1.46.112-3.047 0 0 .965-.309 3.164 1.18a11.01 11.01 0 012.883-.388c.978.005 1.964.132 2.883.388 2.197-1.49 3.16-1.18 3.16-1.18.63 1.587.235 2.757.116 3.047.74.804 1.186 1.831 1.186 3.086 0 4.418-2.69 5.388-5.256 5.673.414.356.792 1.065.792 2.146 0 1.548-.014 2.795-.014 3.175 0 .309.207.666.79.553C20.712 21.405 24 17.09 24 12 24 5.648 18.352.5 12 .5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-bottom-text">
              © {currentYear} TPANA. Boutique technology leadership for decisive launches.
            </span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: var(--dl-space-space-tenunits);
          padding: 0 24px 24px;
        }
        .footer-shell {
          width: min(100%, var(--dl-size-size-maxcontent));
          border-radius: 32px;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(0, 210, 220, 0.15), transparent 38%),
            linear-gradient(160deg, rgba(14, 17, 23, 0.98), rgba(19, 25, 36, 0.98));
          color: var(--dl-color-neutral-100);
          box-shadow: 0 36px 80px -48px rgba(0, 0, 0, 0.76);
          border: 1px solid var(--dl-border-subtle);
        }
        .footer-top {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) repeat(3, minmax(160px, 1fr));
          gap: 32px;
          padding: 40px;
        }
        .footer-brand,
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-logo-frame {
          width: fit-content;
          max-width: 250px;
          padding: 8px 8px;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(236, 245, 251, 0.88), rgba(224, 236, 246, 0.82));
          border: 1px solid rgba(0, 210, 220, 0.24);
          box-shadow:
            0 10px 22px -20px rgba(3, 12, 20, 0.95),
            inset 0 1px 0 rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(2px);
        }
        .footer-logo {
          width: min(210px, 100%);
          height: auto;
          display: block;
        }
        .footer-copy {
          max-width: 360px;
          color: var(--dl-color-neutral-200);
        }
        .footer-label {
          font-family: var(--dl-font-mono);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dl-color-accent-500);
          margin-bottom: 6px;
        }
        .footer-link,
        .footer-meta {
          font-size: 1rem;
          line-height: 1.6;
        }
        .footer-link {
          color: var(--dl-color-neutral-100);
          transition: color 140ms ease;
        }
        .footer-link:hover,
        .footer-link:focus-visible {
          color: var(--dl-color-primary-300);
        }
        .footer-meta {
          color: var(--dl-color-neutral-300);
        }
        .footer-email {
          font-family: var(--dl-font-mono);
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }
        .footer-social {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(12, 18, 27, 0.72);
          border: 1px solid var(--dl-border-subtle);
          transition: transform 140ms ease, background 140ms ease;
        }
        .footer-social:hover,
        .footer-social:focus-visible {
          transform: translateY(-2px);
          background: rgba(15, 22, 33, 0.95);
        }
        .footer-social svg {
          width: 18px;
          height: 18px;
          fill: var(--dl-color-neutral-100);
        }
        .footer-bottom {
          padding: 18px 40px 24px;
          border-top: 1px solid var(--dl-border-subtle);
        }
        .footer-bottom-text {
          font-size: 0.9rem;
          color: var(--dl-color-neutral-300);
        }
        @media (max-width: 991px) {
          .footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 32px;
          }
        }
        @media (max-width: 767px) {
          .footer-container {
            padding-inline: 16px;
            padding-bottom: 16px;
          }
          .footer-shell {
            border-radius: 26px;
          }
          .footer-top {
            grid-template-columns: 1fr;
            padding: 28px 22px;
          }
          .footer-bottom {
            padding: 18px 22px 22px;
          }
          .footer-logo-frame {
            padding: 3px 5px;
            border-radius: 8px;
          }
        }
      `}</style>
    </>
  )
}

FooterContainer.defaultProps = {
  rootClassName: '',
}

FooterContainer.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterContainer
