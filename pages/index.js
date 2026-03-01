import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Home = () => {
  return (
    <>
      <div className="page-shell">
        <Head>
          <title>TPANA | Strategy, Product, and Engineering Leadership</title>
          <meta
            name="description"
            content="TPANA helps regulated and high-trust organisations modernise products, platforms, and delivery with senior strategy and engineering leadership."
          />
          <meta
            property="og:title"
            content="TPANA | Strategy, Product, and Engineering Leadership"
          />
        </Head>

        <NavbarContainer />

        <main className="page-main">
          <section className="shell-section">
            <div className="hero-shell">
              <div className="hero-copy">
                <span className="eyebrow">Boutique Technology Partner</span>
                <h1 className="section-Heading">
                  Turn complex digital programmes into services people trust and teams can scale.
                </h1>
                <p className="content hero-lead">
                  TPANA embeds senior product, architecture, and delivery leadership inside
                  mission-critical initiatives. We help ambitious teams move with more clarity,
                  better governance, and sharper customer experience.
                </p>
                <div className="action-row">
                  <Link href="/contact">
                    <a className="button">Start a strategic conversation</a>
                  </Link>
                  <Link href="/experience">
                    <a className="button-secondary">See engagement outcomes</a>
                  </Link>
                </div>
                <div className="metric-grid">
                  <div className="metric-card">
                    <span className="metric-value">6 weeks</span>
                    <span className="metric-label">Typical time to first release</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-value">16+ years</span>
                    <span className="metric-label">Leading change in complex environments</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-value">45%</span>
                    <span className="metric-label">Reduction in manual effort on flagship programmes</span>
                  </div>
                </div>
              </div>

              <aside className="hero-aside">
                <div className="quote-card">
                  <span className="quote-mark">“</span>
                  <p className="content hero-lead">
                    TPANA gave us a delivery rhythm leadership could trust and a product experience
                    customers could actually navigate.
                  </p>
                  <div className="home-quote-meta">
                    <span className="home-quote-role">Chief Digital Officer</span>
                    <span className="home-quote-company">European financial services group</span>
                  </div>
                </div>
                <div className="home-intro-note">
                  Strategy, delivery, and governance in one senior partner model.
                </div>
              </aside>
            </div>
          </section>

          <section className="shell-section section-stack">
            <div className="section-header">
              <span className="eyebrow">Where We Add Leverage</span>
              <h2 className="card-Heading home-subheading">
                Best suited for teams balancing customer expectations, operational complexity, and
                executive pressure to move.
              </h2>
            </div>
            <div className="logo-grid">
              <div className="brand-chip">Fintech and Payments</div>
              <div className="brand-chip">Insurance and Risk</div>
              <div className="brand-chip">Telecommunications</div>
              <div className="brand-chip">Public Sector Services</div>
              <div className="brand-chip">Climate and Circular Platforms</div>
            </div>
          </section>

          <section className="shell-section section-stack">
            <div className="section-header">
              <span className="eyebrow">Signature Capabilities</span>
              <h2 className="section-Heading">What leadership teams bring us in to solve</h2>
              <p className="content">
                We close the gap between board-level ambition and delivery-level execution. That
                means sharper product bets, more resilient architecture, and teams that operate
                with less friction.
              </p>
            </div>
            <div className="card-grid">
              <article className="feature-card">
                <span className="home-card-tag">01</span>
                <h3 className="card-Heading">Offer and Product Strategy</h3>
                <p className="card-Text">
                  Define the right proposition, prioritise the roadmap, and create stakeholder
                  confidence before major investment is committed.
                </p>
                <ul className="check-list">
                  <li>Vision framing and positioning workshops</li>
                  <li>Service blueprinting and prototype direction</li>
                  <li>Decision-ready business cases</li>
                </ul>
              </article>
              <article className="feature-card">
                <span className="home-card-tag">02</span>
                <h3 className="card-Heading">Platform Modernisation</h3>
                <p className="card-Text">
                  Rework brittle estates into scalable platforms without losing control over
                  compliance, integrations, or operational continuity.
                </p>
                <ul className="check-list">
                  <li>Architecture runway and migration sequencing</li>
                  <li>Integration strategy and data flow design</li>
                  <li>Risk-aware delivery governance</li>
                </ul>
              </article>
              <article className="feature-card">
                <span className="home-card-tag">03</span>
                <h3 className="card-Heading">Embedded Leadership</h3>
                <p className="card-Text">
                  Add senior product, engineering, and delivery leadership exactly where your
                  organisation is stretched or evolving fastest.
                </p>
                <ul className="check-list">
                  <li>Fractional CTO and delivery leadership</li>
                  <li>Team coaching and operating model design</li>
                  <li>Stakeholder alignment across business and tech</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="shell-section">
            <div className="light-surface home-proof-band">
              <div className="section-header">
                <span className="eyebrow">Proof Of Value</span>
                <h2 className="section-Heading">Outcomes over outputs</h2>
              </div>
              <div className="proof-grid">
                <article className="proof-card">
                  <span className="home-proof-sector">Regulated fintech</span>
                  <h3 className="card-Heading">Unified onboarding and compliance workspace</h3>
                  <p className="card-Text">
                    Defined the product strategy and led platform delivery across four markets,
                    reducing manual review load while keeping launch timelines intact.
                  </p>
                  <div className="home-proof-result">45% less manual processing</div>
                </article>
                <article className="proof-card">
                  <span className="home-proof-sector">Telecom operations</span>
                  <h3 className="card-Heading">Service redesign for customer care teams</h3>
                  <p className="card-Text">
                    Reframed the service model, aligned delivery priorities, and integrated
                    fragmented data flows to improve customer interactions at scale.
                  </p>
                  <div className="home-proof-result">32-point lift in experience scores</div>
                </article>
                <article className="proof-card">
                  <span className="home-proof-sector">Public sector</span>
                  <h3 className="card-Heading">Citizen-facing digital permitting journey</h3>
                  <p className="card-Text">
                    Guided discovery, procurement alignment, and phased execution for a service
                    that replaced opaque offline workflows with accountable digital delivery.
                  </p>
                  <div className="home-proof-result">60K+ users onboarded</div>
                </article>
              </div>
            </div>
          </section>

          <section className="shell-section">
            <div className="split-grid">
              <div className="panel-surface">
                <div className="section-header">
                  <span className="eyebrow">How We Work</span>
                  <h2 className="section-Heading">A senior-led path from ambiguity to execution</h2>
                  <p className="content">
                    We keep the process rigorous without making it bureaucratic. Clients come to us
                    when they need pace, but cannot afford chaos.
                  </p>
                </div>
              </div>
              <div className="timeline-grid">
                <article className="timeline-card">
                  <span className="process-index">01</span>
                  <h3 className="card-Heading">Align the mission</h3>
                  <p className="card-Text">
                    Clarify commercial goals, user realities, delivery constraints, and decision
                    rights.
                  </p>
                </article>
                <article className="timeline-card">
                  <span className="process-index">02</span>
                  <h3 className="card-Heading">Design the service</h3>
                  <p className="card-Text">
                    Shape journeys, operating models, and technical approaches together.
                  </p>
                </article>
                <article className="timeline-card">
                  <span className="process-index">03</span>
                  <h3 className="card-Heading">Execute with control</h3>
                  <p className="card-Text">
                    Build in transparent increments with governance leaders can stand behind.
                  </p>
                </article>
                <article className="timeline-card">
                  <span className="process-index">04</span>
                  <h3 className="card-Heading">Transfer momentum</h3>
                  <p className="card-Text">
                    Leave behind stronger teams, clearer rituals, and a roadmap for what comes next.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="shell-section">
            <div className="dark-surface home-cta">
              <div className="section-header">
                <span className="eyebrow">Next Step</span>
                <h2 className="section-Heading">
                  If the next 90 days matter, the operating model should too.
                </h2>
                <p className="content">
                  Bring us the challenge, the constraints, and the ambition. We will help you shape
                  a realistic path forward with stronger design, cleaner delivery, and executive
                  confidence.
                </p>
              </div>
              <div className="action-row">
                <Link href="/contact">
                  <a className="button">Book a working session</a>
                </Link>
                <Link href="/about">
                  <a className="button-secondary">Meet the leadership team</a>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <FooterContainer />
      </div>

      <style jsx>{`
        .home-quote-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .home-quote-role {
          font-family: var(--dl-font-heading);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--dl-color-accent-300);
        }
        .home-quote-company {
          color: rgba(255, 255, 255, 0.6);
        }
        .home-intro-note {
          margin-top: 16px;
          font-family: var(--dl-font-heading);
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
        }
        .home-subheading {
          max-width: 780px;
        }
        .home-card-tag,
        .home-proof-sector {
          display: inline-flex;
          margin-bottom: 14px;
          font-family: var(--dl-font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--dl-color-primary-700);
        }
        .home-proof-band {
          padding: clamp(1.75rem, 4vw, 3rem);
        }
        .home-proof-result {
          margin-top: 18px;
          font-family: var(--dl-font-heading);
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--dl-color-primary-700);
        }
        .home-cta {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
      `}</style>
    </>
  )
}

export default Home
