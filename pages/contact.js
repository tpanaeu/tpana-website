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
              <h1 className="contact-heading section-Heading">Let's co-create your next decisive launch</h1>
              <p className="contact-text content">
                Share your challenge and we&rsquo;ll respond within two business days with next
                steps. Whether you need a rapid audit, a delivery partner, or a longer-term embedded
                leadership team, we tailor our approach to match your mission.
              </p>
              <a className="contact-email" href="mailto:contact@tpana.eu?subject=Let's%20work%20together">
                contact@tpana.eu
              </a>
            </div>
            <div className="contact-card">
              <h2>What to expect</h2>
              <ul>
                <li>Discovery session focused on your goals, constraints, and timelines.</li>
                <li>Initial recommendations and potential engagement models.</li>
                <li>No obligation—just clarity on the path forward.</li>
              </ul>
              <div className="contact-availability">
                <span>We typically start new engagements within 2-4 weeks.</span>
              </div>
            </div>
          </section>

          <section className="contact-details">
            <div className="contact-detail-card">
              <h2 className="card-Heading">Bring to the conversation</h2>
              <ul>
                <li>Outcomes you need to unlock in the next 90 days.</li>
                <li>Key systems, teams, or partners involved.</li>
                <li>Any constraints (budget, compliance, timeline).</li>
              </ul>
            </div>
            <div className="contact-detail-card">
              <h2 className="card-Heading">What we’ll prepare</h2>
              <ul>
                <li>Relevant case studies and playbooks.</li>
                <li>Questions to clarify your context and risks.</li>
                <li>A structured next-step plan after our first call.</li>
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
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
          .contact-availability {
            border-top: 1px solid rgba(255, 255, 255, 0.18);
            padding-top: var(--dl-space-space-doubleunit);
            font-size: 14px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(241, 178, 74, 0.92);
          }
          .contact-details {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit) var(--dl-space-space-tenunits);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: var(--dl-space-space-fiveunits);
          }
          .contact-detail-card {
            background: var(--dl-color-gray-white);
            border-radius: 24px;
            padding: var(--dl-space-space-fourunits);
            box-shadow: var(--dl-shadow-soft);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            border: 1px solid rgba(18, 41, 66, 0.08);
          }
          .contact-detail-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-unit);
            font-size: 16px;
            color: var(--dl-color-neutral-700);
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
            .contact-details {
              padding: 0 var(--dl-space-space-doubleunit) var(--dl-space-space-eightunits);
            }
          }
          @media (max-width: 479px) {
            .contact-main {
              margin-top: 88px;
            }
            .contact-hero {
              padding: var(--dl-space-space-sixunits) var(--dl-space-space-doubleunit) var(--dl-space-space-eightunits);
            }
            .contact-detail-card {
              padding: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
