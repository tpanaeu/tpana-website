import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Experience = () => {
  return (
    <>
      <div className="page-shell">
        <Head>
          <title>Experience | TPANA Engagement Outcomes</title>
          <meta
            name="description"
            content="See how TPANA helps organisations modernise platforms, redesign services, and improve delivery outcomes in high-trust sectors."
          />
          <meta property="og:title" content="TPANA Experience" />
        </Head>

        <NavbarContainer />

        <main className="page-main">
          <section className="shell-section">
            <div className="hero-shell">
              <div className="hero-copy">
                <span className="eyebrow">Experience</span>
                <h1 className="section-Heading">
                  Delivery experience built in environments where mistakes are expensive.
                </h1>
                <p className="content hero-lead">
                  We work where services are regulated, stakeholders are numerous, and internal
                  complexity can quietly derail good intentions. The role is to create clarity,
                  momentum, and outcomes that hold up under scrutiny.
                </p>
              </div>
              <aside className="hero-aside">
                <div className="quote-card">
                  <span className="experience-label">Core sectors</span>
                  <ul className="list-clean experience-sector-list">
                    <li>Financial institutions and RegTech</li>
                    <li>Insurance and broker platforms</li>
                    <li>Telecommunications operations</li>
                    <li>eGovernment and citizen services</li>
                    <li>Sustainability and circular economy ventures</li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>

          <section className="shell-section">
            <div className="light-surface experience-impact">
              <div className="section-header">
                <span className="eyebrow">Selected Impact</span>
                <h2 className="section-Heading">Measured improvements, not just completed projects</h2>
              </div>
              <div className="stat-grid">
                <article className="stat-card">
                  <span className="stat-value">6x</span>
                  <p className="card-Text">Faster release cadence after platform modernisation</p>
                </article>
                <article className="stat-card">
                  <span className="stat-value">45%</span>
                  <p className="card-Text">Reduction in manual processing effort in compliance-heavy flows</p>
                </article>
                <article className="stat-card">
                  <span className="stat-value">32</span>
                  <p className="card-Text">Point lift in customer experience scores on transformed services</p>
                </article>
              </div>
            </div>
          </section>

          <section className="shell-section section-stack">
            <div className="section-header">
              <span className="eyebrow">How We Contribute</span>
              <h2 className="section-Heading">Support across the full change lifecycle</h2>
            </div>
            <div className="card-grid">
              <article className="feature-card">
                <h3 className="card-Heading">Advisory and Roadmapping</h3>
                <ul className="check-list">
                  <li>Opportunity framing and proposition design</li>
                  <li>Capability assessments and technical due diligence</li>
                  <li>Investment cases and executive alignment materials</li>
                </ul>
              </article>
              <article className="feature-card">
                <h3 className="card-Heading">Architecture and Modernisation</h3>
                <ul className="check-list">
                  <li>Target architecture and migration sequencing</li>
                  <li>Integration patterns for legacy and modern estates</li>
                  <li>Security, compliance, and observability foundations</li>
                </ul>
              </article>
              <article className="feature-card">
                <h3 className="card-Heading">Leadership and Delivery</h3>
                <ul className="check-list">
                  <li>Fractional CTO, product, and delivery leadership</li>
                  <li>Operating model and cadence design</li>
                  <li>Quality, release, and support playbooks</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="shell-section">
            <div className="light-surface experience-highlights">
              <div className="section-header">
                <span className="eyebrow">Recent Highlights</span>
                <h2 className="section-Heading">Representative programme work</h2>
              </div>
              <div className="proof-grid">
                <article className="proof-card">
                  <span className="experience-highlight-tag">RegTech Platform</span>
                  <h3 className="card-Heading">Cross-market onboarding transformation</h3>
                  <p className="card-Text">
                    Unified fragmented tooling into one compliance-led customer journey that
                    supported expansion into multiple European markets.
                  </p>
                </article>
                <article className="proof-card">
                  <span className="experience-highlight-tag">National Service</span>
                  <h3 className="card-Heading">Citizen-facing digital permitting</h3>
                  <p className="card-Text">
                    Guided discovery, governance alignment, and phased delivery for a public
                    service that demanded both accessibility and full auditability.
                  </p>
                </article>
                <article className="proof-card">
                  <span className="experience-highlight-tag">Telecom Operations</span>
                  <h3 className="card-Heading">Customer service and data integration reset</h3>
                  <p className="card-Text">
                    Reworked service rituals and data access patterns to reduce handling times and
                    give frontline teams faster access to the right context.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="shell-section">
            <div className="dark-surface experience-cta">
              <div className="section-header">
                <span className="eyebrow">Bring Us In</span>
                <h2 className="section-Heading">
                  Useful when the initiative is visible, politically important, or simply stuck.
                </h2>
                <p className="content">
                  If your programme needs a clearer path, sharper leadership, or a stronger delivery
                  model, we can help define the next move quickly.
                </p>
              </div>
              <div className="action-row">
                <Link href="/contact">
                  <a className="button">Schedule a discovery call</a>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <FooterContainer />
      </div>

      <style jsx>{`
        .experience-label,
        .experience-highlight-tag {
          font-family: var(--dl-font-mono);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .experience-label {
          color: var(--dl-color-primary-500);
        }
        .experience-sector-list li {
          color: var(--dl-color-neutral-200);
        }
        .experience-impact,
        .experience-highlights,
        .experience-cta {
          padding: clamp(1.75rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .experience-highlight-tag {
          display: inline-flex;
          margin-bottom: 12px;
          color: var(--dl-color-primary-500);
        }
      `}</style>
    </>
  )
}

export default Experience
