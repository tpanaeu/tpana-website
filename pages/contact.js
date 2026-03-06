import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Contact = () => {
  return (
    <>
      <div className="page-shell">
        <Head>
          <title>Contact TPANA | Start A Strategic Conversation</title>
          <meta
            name="description"
            content="Contact TPANA to discuss platform modernisation, product strategy, or embedded engineering and delivery leadership."
          />
          <meta property="og:title" content="Contact TPANA" />
        </Head>

        <NavbarContainer />

        <main className="page-main">
          <section className="shell-section">
            <div className="hero-shell">
              <div className="hero-copy">
                <span className="eyebrow">Contact</span>
                <h1 className="section-Heading">
                  Bring the challenge. We will help you define the next sensible move.
                </h1>
                <p className="content hero-lead">
                  Whether you need an outside view on a stuck programme, leadership for an upcoming
                  launch, or a clearer plan for platform modernisation, start with a short
                  conversation. The first step is focused, direct, and useful.
                </p>
                <a
                  className="contact-email"
                  href="mailto:contact@tpana.eu?subject=Strategic%20conversation%20with%20TPANA"
                >
                  contact@tpana.eu
                </a>
              </div>

              <aside className="hero-aside">
                <div className="quote-card">
                  <span className="contact-side-label">What happens next</span>
                  <ul className="list-clean contact-side-list">
                    <li>A focused discovery conversation around goals, risks, and timing</li>
                    <li>A first view on engagement shape, sequencing, and priorities</li>
                    <li>A response within two business days for qualified enquiries</li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>

          <section className="shell-section">
            <div className="split-grid">
              <div className="contact-card">
                <span className="eyebrow">Come Prepared With</span>
                <ul className="check-list">
                  <li>The outcomes you need to unlock in the next 90 days</li>
                  <li>The systems, teams, or vendors shaping delivery reality</li>
                  <li>The constraints that matter most: timeline, compliance, or budget</li>
                </ul>
              </div>

              <div className="contact-card">
                <span className="eyebrow">What We Bring</span>
                <ul className="check-list">
                  <li>Relevant case studies and comparable operating patterns</li>
                  <li>Questions that surface hidden delivery and decision-making risk</li>
                  <li>A concrete recommendation for the most useful next step</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="shell-section">
            <div className="light-surface contact-bands">
              <div className="stat-grid">
                <article className="stat-card">
                  <span className="stat-value">2-4</span>
                  <p className="card-Text">Typical weeks before a new engagement can begin</p>
                </article>
                <article className="stat-card">
                  <span className="stat-value">1</span>
                  <p className="card-Text">Senior partner leading the first conversation and scope</p>
                </article>
                <article className="stat-card">
                  <span className="stat-value">0</span>
                  <p className="card-Text">Obligation to proceed if the fit is not right</p>
                </article>
              </div>
            </div>
          </section>
        </main>

        <FooterContainer />
      </div>

      <style jsx>{`
        .contact-email {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 52px;
          padding: 0.95rem 1.25rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(16, 28, 43, 0.14);
          font-family: var(--dl-font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--dl-color-neutral-900);
        }
        .contact-side-label {
          font-family: var(--dl-font-mono);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--dl-color-primary-500);
        }
        .contact-side-list li {
          color: var(--dl-color-neutral-700);
        }
        .contact-bands {
          padding: clamp(1.75rem, 4vw, 3rem);
        }
      `}</style>
    </>
  )
}

export default Contact
