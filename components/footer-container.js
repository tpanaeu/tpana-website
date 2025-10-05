import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const FooterContainer = (props) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer
        className={`footer-container-footer-container ${props.rootClassName} `}
      >
        <div className="footer-container-footer">
          <div className="footer-container-brand">
            <img
              src="/assets/tp-logotype-vertical.png"
              alt="TP Software Consultants logo"
              className="footer-container-brand-mark"
            />
            <p className="footer-container-tagline content">
              Tailor-made software solutions with measurable business impact.
            </p>
          </div>
          <div className="footer-container-links">
            <h2 className="footer-container-heading">Explore</h2>
            <Link href="/about">
              <a className="footer-container-link">About</a>
            </Link>
            <Link href="/experience">
              <a className="footer-container-link">Experience</a>
            </Link>
            <Link href="/contact">
              <a className="footer-container-link">Contact</a>
            </Link>
          </div>
          <div className="footer-container-contact">
            <h2 className="footer-container-heading">Contact</h2>
            <a className="footer-container-link" href="mailto:contact@tpana.eu">
              contact@tpana.eu
            </a>
            <div className="footer-container-social-links">
              <a
                className="footer-container-social"
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
                className="footer-container-social"
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
        <div className="footer-container-bottom">
          <span className="footer-container-bottom-text">
            © {currentYear} TP Software Consultants. All rights reserved.
          </span>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-container-footer-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: linear-gradient(180deg, rgba(18, 41, 66, 0.95), rgba(15, 35, 56, 0.98));
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-tenunits);
          }
          .footer-container-footer {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: var(--dl-space-space-fiveunits);
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-fiveunits) var(--dl-space-space-tripleunit);
          }
          .footer-container-brand {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            max-width: 280px;
          }
          .footer-container-brand-mark {
            width: 120px;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.25));
          }
          .footer-container-tagline {
            color: rgba(255, 255, 255, 0.7);
          }
          .footer-container-links,
          .footer-container-contact {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-unit);
          }
          .footer-container-heading {
            font-family: var(--dl-font-heading);
            font-size: 15px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-container-link {
            color: rgba(255, 255, 255, 0.75);
            font-size: 16px;
            transition: color 120ms ease;
          }
          .footer-container-link:hover,
          .footer-container-link:focus {
            color: var(--dl-color-gray-white);
          }
          .footer-container-social-links {
            display: flex;
            gap: var(--dl-space-space-doubleunit);
            margin-top: var(--dl-space-space-doubleunit);
          }
          .footer-container-social {
            display: inline-flex;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            border-radius: var(--dl-radius-radius-round);
            background: rgba(255, 255, 255, 0.08);
            transition: transform 160ms ease, background 160ms ease;
          }
          .footer-container-social:hover,
          .footer-container-social:focus {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.14);
          }
          .footer-container-social svg {
            width: 18px;
            height: 18px;
            fill: var(--dl-color-gray-white);
          }
          .footer-container-bottom {
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: var(--dl-space-space-doubleunit) var(--dl-space-space-tripleunit);
            display: flex;
            justify-content: center;
          }
          .footer-container-bottom-text {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
          }
          @media (max-width: 767px) {
            .footer-container-footer {
              gap: var(--dl-space-space-fourunits);
              padding: var(--dl-space-space-fourunits) var(--dl-space-space-doubleunit);
            }
            .footer-container-brand {
              align-items: flex-start;
            }
          }
        `}
      </style>
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
