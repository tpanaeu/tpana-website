import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - TPANA IT Solutions</title>
          <meta property="og:title" content="Contact - TPANA IT Solutions" />
        </Head>
        <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
        <main className="contact-main">
          <section className="contact-hero">
            <div className="contact-copy">
              <span className="contact-eyebrow">Contact</span>
              <h1 className="contact-heading section-Heading">Let's create something meaningful together</h1>
              <p className="contact-text content">
                Share your challenge and we will respond within two business days with next steps.
                Whether you need a technical audit, a delivery partner, or a second opinion on your
                roadmap-we're here to help.
              </p>
              <a className="contact-email" href="mailto:contact@tpana.eu?subject=Let's%20work%20together">
                contact@tpana.eu
              </a>
            </div>
            <div className="contact-card">
              <h2>What to expect</h2>
              <ul>
                <li>Discovery call to understand your goals and constraints.</li>
                <li>Tangible recommendations tailored to your context.</li>
                <li>Transparent proposals and clear engagement models.</li>
              </ul>
            </div>
          </section>
        </main>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .contact-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 120px;
          }
          .contact-hero {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-tenunits) var(--dl-space-space-tripleunit) var(--dl-space-space-twelveunits);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: var(--dl-space-space-fiveunits);
            align-items: stretch;
          }
          .contact-copy {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .contact-eyebrow {
            font-family: var(--dl-font-heading);
            font-size: 13px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--dl-color-primary-600);
          }
          .contact-heading {
            color: var(--dl-color-neutral-900);
          }
          .contact-text {
            color: var(--dl-color-neutral-700);
            max-width: 580px;
          }
          .contact-email {
            display: inline-flex;
            align-items: center;
            gap: var(--dl-space-space-unit);
            font-family: var(--dl-font-heading);
            font-size: 20px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-decoration: none;
            color: var(--dl-color-primary-700);
            transition: color 160ms ease;
          }
          .contact-email::after {
            content: '';
            display: inline-block;
            width: 42px;
            height: 1px;
            background: currentColor;
          }
          .contact-email:hover,
          .contact-email:focus {
            color: var(--dl-color-primary-500);
          }
          .contact-card {
            background: linear-gradient(150deg, rgba(18, 41, 66, 0.9), rgba(37, 114, 173, 0.85));
            color: rgba(255, 255, 255, 0.82);
            border-radius: 24px;
            padding: var(--dl-space-space-fiveunits);
            box-shadow: var(--dl-shadow-card);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-threeunits);
          }
          .contact-card h2 {
            font-family: var(--dl-font-heading);
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
          }
          .contact-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-doubleunit);
            font-size: 17px;
          }
          @media (max-width: 991px) {
            .contact-main {
              margin-top: 96px;
            }
            .contact-heading {
              font-size: 40px;
            }
          }
          @media (max-width: 767px) {
            .contact-hero {
              padding: var(--dl-space-space-eightunits) var(--dl-space-space-doubleunit) var(--dl-space-space-tenunits);
            }
            .contact-card {
              padding: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .contact-main {
              margin-top: 88px;
            }
            .contact-hero {
              padding: var(--dl-space-space-sixunits) var(--dl-space-space-doubleunit) var(--dl-space-space-eightunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
