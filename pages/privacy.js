import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Privacy = () => {
  return (
    <>
      <div className="page-shell">
        <Head>
          <title>Privacy Policy | TPANA</title>
          <meta
            name="description"
            content="Privacy information for TPANA, a personal and professional website for strategy, product, and engineering leadership."
          />
          <meta property="og:title" content="Privacy Policy | TPANA" />
          <meta
            property="og:description"
            content="Privacy information for TPANA, a personal and professional website. Analytics are optional and loaded only after consent."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.tpana.eu/privacy" />
          <meta property="og:image" content="https://www.tpana.eu/assets/tp-logotype-horizontal.png" />
          <link rel="canonical" href="https://www.tpana.eu/privacy" />
        </Head>

        <NavbarContainer />

        <main className="page-main">
          <section className="shell-section">
            <div className="hero-shell privacy-hero">
              <div className="hero-copy">
                <span className="eyebrow">Privacy Policy</span>
                <h1 className="section-Heading">Simple privacy for a professional website.</h1>
                <p className="content hero-lead">
                  TPANA is a personal and professional website for sharing services,
                  experience, and contact information. It is designed to work without
                  account creation, downloads, or tracking.
                </p>
              </div>

              <aside className="hero-aside">
                <div className="quote-card">
                  <span className="privacy-side-label">Site owner contact</span>
                  <a className="privacy-email" href="mailto:contact@tpana.eu">
                    contact@tpana.eu
                  </a>
                </div>
              </aside>
            </div>
          </section>

          <section className="shell-section">
            <div className="light-surface privacy-content">
              <article>
                <h2 className="card-Heading">What this site is</h2>
                <p className="card-Text">
                  This is the website of TPANA, a personal and professional practice
                  focused on strategy, product, and engineering leadership. No login,
                  account, portal, or payment area is provided.
                </p>
              </article>

              <article>
                <h2 className="card-Heading">Downloads and files</h2>
                <p className="card-Text">
                  The site does not provide software downloads, executables, browser
                  extensions, or document downloads. Visitors can browse static website
                  pages and use email links to make contact.
                </p>
              </article>

              <article>
                <h2 className="card-Heading">Analytics and cookies</h2>
                <p className="card-Text">
                  The site may offer optional analytics using Microsoft Clarity. Analytics
                  scripts are not loaded unless you explicitly allow analytics cookies in
                  the cookie banner. If you decline or ignore the banner, the website still
                  works fully.
                </p>
              </article>

              <article>
                <h2 className="card-Heading">Contact</h2>
                <p className="card-Text">
                  To contact the site owner, email{' '}
                  <a className="privacy-link" href="mailto:contact@tpana.eu">
                    contact@tpana.eu
                  </a>
                  . Contact messages are handled through your email provider and are used
                  only to respond to your enquiry.
                </p>
              </article>

              <div className="action-row">
                <Link href="/contact">
                  <a className="button">Contact TPANA</a>
                </Link>
                <Link href="/">
                  <a className="button-secondary">Return home</a>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <FooterContainer />
      </div>

      <style jsx>{`
        .privacy-hero {
          align-items: center;
        }
        .privacy-side-label {
          font-family: var(--dl-font-mono);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--dl-color-primary-500);
        }
        .privacy-email,
        .privacy-link {
          color: var(--dl-color-primary-300);
          font-weight: 700;
        }
        .privacy-content {
          padding: clamp(1.75rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .privacy-content article {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </>
  )
}

export default Privacy
