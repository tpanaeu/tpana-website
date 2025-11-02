import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>TPANA IT Solutions</title>
          <meta property="og:title" content="TPANA IT Solutions" />
        </Head>
        <NavbarContainer></NavbarContainer>
        <main className="home-main">
          <section className="home-hero">
            <div className="home-hero-content">
              <span className="home-hero-badge">Boutique Technology Partner</span>
              <h1 className="home-heading section-Heading">
                Digital products engineered to earn trust in regulated industries.
              </h1>
              <p className="home-text content">
                TPANA embeds senior strategists and engineering leaders directly with your teams
                to untangle legacy constraints, design human-centred experiences, and ship
                production-ready platforms at pace.
              </p>
              <div className="home-actions">
                <Link href="/contact">
                  <a className="button home-primary-action">Start a project</a>
                </Link>
                <Link href="/experience">
                  <a className="home-secondary-action">View recent work</a>
                </Link>
                <Link href="/about">
                  <a className="home-secondary-action home-secondary-action-alt">
                    Meet the team
                  </a>
                </Link>
              </div>
              <div className="home-metrics">
                <div className="home-metric">
                  <span className="home-metric-number">6 weeks</span>
                  <span className="home-metric-label">Median time to first release</span>
                </div>
                <div className="home-metric">
                  <span className="home-metric-number">16+ years</span>
                  <span className="home-metric-label">Leading transformation programs</span>
                </div>
                <div className="home-metric">
                  <span className="home-metric-number">98%</span>
                  <span className="home-metric-label">Stakeholder satisfaction scores</span>
                </div>
              </div>
            </div>
            <div className="home-hero-visual">
              <div className="home-hero-card">
                <span className="home-hero-card-eyebrow">Client spotlight</span>
                <img
                  alt="TP Software Consultants logo"
                  src="/assets/tp-logotype-vertical.png"
                  className="home-hero-logo"
                />
                <div className="home-hero-card-content">
                  <p className="content">
                    "TPANA engineered a compliant onboarding journey that cut manual reviews by
                    almost half while keeping our launch on schedule."
                  </p>
                  <span className="home-hero-card-caption">
                    Chief Digital Officer, European finance group
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="home-trust">
            <p className="home-trust-heading">Trusted by teams shaping critical services</p>
            <ul className="home-trust-list">
              <li>Fintech &amp; payments</li>
              <li>Telecommunications</li>
              <li>Insurance</li>
              <li>Public sector</li>
              <li>Circular economy</li>
            </ul>
          </section>

          <section className="home-services">
            <div className="home-section-header">
              <span className="home-section-subtitle">What we do</span>
              <h2 className="section-Heading">Signature capabilities that move programs forward</h2>
              <p className="content">
                From vision definition through to production rollout, we blend product strategy,
                architecture, and delivery leadership so you can modernise responsibly and still
                move fast.
              </p>
            </div>
            <div className="home-cards-container">
              <article className="home-card">
                <div className="home-icon-container">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M7 9a2 2 0 0 1 2-2h9.5a2 2 0 0 1 1.6.8L23.5 12H39a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z" fill="rgba(37,114,173,0.12)" stroke="var(--dl-color-primary-500)" strokeWidth="1.5" />
                    <path d="M16 31h6M16 24h16" stroke="var(--dl-color-primary-500)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="card-Heading">Product &amp; Service Strategy</h3>
                <p className="card-Text">
                  Co-create a north star vision, prioritise the roadmap, and validate value with
                  leadership and end-users before the first line of code ships.
                </p>
                <ul className="home-card-list">
                  <li>Opportunity framing workshops</li>
                  <li>Experience mapping &amp; prototyping</li>
                  <li>Value measurement frameworks</li>
                </ul>
              </article>
              <article className="home-card">
                <div className="home-icon-container">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 12a4 4 0 0 1 4-4h12l6 6h10v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12Z" fill="rgba(241,178,74,0.12)" stroke="var(--dl-color-accent-500)" strokeWidth="1.5" />
                    <path d="M16 28h16M16 20h12" stroke="var(--dl-color-accent-500)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="card-Heading">Platform Modernisation</h3>
                <p className="card-Text">
                  Re-architect legacy platforms with resilient integrations, event-driven
                  design, and secure data flows tailored to your compliance landscape.
                </p>
                <ul className="home-card-list">
                  <li>Architecture runway &amp; roadmaps</li>
                  <li>Integration &amp; automation programs</li>
                  <li>Operational playbooks &amp; runbooks</li>
                </ul>
              </article>
              <article className="home-card">
                <div className="home-icon-container">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 16.5 24 7l16 9.5v15L24 41l-16-9.5v-15Z" fill="rgba(26,79,116,0.12)" stroke="var(--dl-color-primary-700)" strokeWidth="1.5" />
                    <path d="M24 17v17.5M14 22l10 6M34 22l-10 6" stroke="var(--dl-color-primary-700)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="card-Heading">Embedded Leadership</h3>
                <p className="card-Text">
                  Provide fractional CTO, product, and delivery leadership to scale your teams
                  with modern practices and accountable governance.
                </p>
                <ul className="home-card-list">
                  <li>Capability uplift &amp; coaching</li>
                  <li>Delivery operations &amp; rituals</li>
                  <li>Vendor alignment &amp; oversight</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="home-case-studies">
            <div className="home-section-header">
              <span className="home-section-subtitle">Selected engagements</span>
              <h2 className="section-Heading">Outcomes we have delivered with our partners</h2>
              <p className="content">
                Each collaboration is tailored to the client's context, but the common thread is
                measurable, sustainable impact from day one.
              </p>
            </div>
            <div className="home-case-cards">
              <article className="home-case-card">
                <span className="home-case-sector">Fintech platform</span>
                <h3 className="card-Heading">Unified compliance workspace</h3>
                <p className="card-Text">
                  Defined the product vision, architected a micro-services backbone, and led the
                  build of a compliant onboarding experience across four EU markets.
                </p>
                <div className="home-case-outcome">
                  <span>↓45% manual reviews</span>
                  <span>Launched in 10 weeks</span>
                </div>
              </article>
              <article className="home-case-card">
                <span className="home-case-sector">Telecom operator</span>
                <h3 className="card-Heading">Customer care modernisation</h3>
                <p className="card-Text">
                  Delivered a service blueprint, integrations roadmap, and iterative releases that
                  unified fragmented customer data and reduced call handling time.
                </p>
                <div className="home-case-outcome">
                  <span>↑32% NPS lift</span>
                  <span>75% faster data retrieval</span>
                </div>
              </article>
              <article className="home-case-card">
                <span className="home-case-sector">Public sector</span>
                <h3 className="card-Heading">Digital permitting portal</h3>
                <p className="card-Text">
                  Guided discovery, vendor alignment, and delivery of a citizen-facing portal that
                  digitised complex licensing workflows with full auditability.
                </p>
                <div className="home-case-outcome">
                  <span>60K+ users onboarded</span>
                  <span>End-to-end traceability</span>
                </div>
              </article>
            </div>
          </section>

          <section className="home-differentiators">
            <div className="home-differentiators-card">
              <h2 className="section-Heading">Why leadership teams choose TPANA</h2>
              <div className="home-differentiators-grid">
                <div className="home-difference">
                  <h3 className="card-Heading">Strategy &amp; delivery in the same squad</h3>
                  <p className="card-Text">
                    We bridge discovery and execution, ensuring every sprint ladders up to
                    validated business value without losing momentum in handovers.
                  </p>
                </div>
                <div className="home-difference">
                  <h3 className="card-Heading">Enterprise-grade with human-centred craft</h3>
                  <p className="card-Text">
                    Regulated environments demand rigour. Our team designs experiences that win
                    user adoption while meeting stringent compliance and security requirements.
                  </p>
                </div>
                <div className="home-difference">
                  <h3 className="card-Heading">Long-term partners, not just project vendors</h3>
                  <p className="card-Text">
                    We integrate with your leadership rhythms, bring transparency to decisions,
                    and stay accountable from the first workshop to post-launch iterations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="home-approach">
            <div className="home-approach-content">
              <span className="home-section-subtitle">Our approach</span>
              <h2 className="section-Heading">A collaborative path from ambition to adoption</h2>
              <ul className="home-approach-list">
                <li className="home-approach-step">
                  <span className="home-approach-step-number">01</span>
                  <div>
                    <strong>Frame the mission</strong>
                    <p className="card-Text">
                      Rapid insight sessions to align leadership on desired outcomes, guardrails, and
                      success measures.
                    </p>
                  </div>
                </li>
                <li className="home-approach-step">
                  <span className="home-approach-step-number">02</span>
                  <div>
                    <strong>Design the experience</strong>
                    <p className="card-Text">
                      Prototypes grounded in service blueprints and technical feasibility give
                      stakeholders confidence before investment.
                    </p>
                  </div>
                </li>
                <li className="home-approach-step">
                  <span className="home-approach-step-number">03</span>
                  <div>
                    <strong>Build with accountability</strong>
                    <p className="card-Text">
                      Cross-functional squads deliver on a transparent cadence with the governance
                      and controls enterprises expect.
                    </p>
                  </div>
                </li>
                <li className="home-approach-step">
                  <span className="home-approach-step-number">04</span>
                  <div>
                    <strong>Scale &amp; evolve</strong>
                    <p className="card-Text">
                      Launch support, change enablement, and continuous iteration keep you ahead of
                      shifting customer and regulatory needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="home-cta">
            <div className="home-cta-content">
              <div>
                <span className="home-section-subtitle">Next step</span>
                <h2 className="section-Heading">Book a working session with our leadership team</h2>
              </div>
              <p className="content">
                Let’s map the outcomes you need over the next quarter and shape a plan that meets
                your governance, team, and budget realities.
              </p>
              <div className="home-cta-actions">
                <Link href="/contact">
                  <a className="button">Plan your initiative</a>
                </Link>
                <Link href="/experience">
                  <a className="home-secondary-action home-secondary-action-dark">
                    Download our capabilities overview
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <FooterContainer></FooterContainer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 120px;
            gap: var(--dl-space-space-tenunits);
          }
          .home-hero {
            width: 100%;
            display: grid;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-tenunits) var(--dl-space-space-tripleunit);
            border-radius: 28px;
            position: relative;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fiveunits);
            background: radial-gradient(120% 140% at 0% 0%, rgba(37, 114, 173, 0.16) 0%, rgba(18, 41, 66, 0.78) 65%, rgba(13, 30, 48, 0.95) 100%);
            color: var(--dl-color-gray-white);
            overflow: hidden;
          }
          .home-hero::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(19, 46, 69, 0.15), rgba(37, 114, 173, 0.05));
            pointer-events: none;
          }
          .home-hero-content {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
            z-index: 1;
          }
          .home-hero-badge {
            display: inline-flex;
            align-items: center;
            gap: var(--dl-space-space-halfunit);
            padding: 0.35rem 0.85rem;
            border-radius: 999px;
            font-size: 13px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            background: rgba(255, 255, 255, 0.08);
          }
          .home-heading {
            color: var(--dl-color-gray-white);
          }
          .home-text {
            color: rgba(255, 255, 255, 0.78);
            max-width: 540px;
          }
          .home-actions {
            display: flex;
            flex-wrap: wrap;
            gap: var(--dl-space-space-doubleunit);
          }
          .home-primary-action {
            color: var(--dl-color-gray-white);
            box-shadow: 0 16px 36px -18px rgba(11, 27, 44, 0.8);
          }
          .home-secondary-action {
            display: inline-flex;
            align-items: center;
            gap: var(--dl-space-space-halfunit);
            color: rgba(255, 255, 255, 0.8);
            font-family: var(--dl-font-heading);
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            text-decoration: none;
            transition: color 160ms ease;
          }
          .home-secondary-action::after {
            content: '';
            display: inline-block;
            width: 36px;
            height: 1px;
            background: rgba(255, 255, 255, 0.5);
          }
          .home-secondary-action-alt {
            color: rgba(255, 255, 255, 0.7);
          }
          .home-secondary-action:hover,
          .home-secondary-action:focus {
            color: var(--dl-color-gray-white);
          }
          .home-secondary-action-dark {
            color: var(--dl-color-primary-700);
          }
          .home-secondary-action-dark::after {
            background: rgba(26, 79, 116, 0.5);
          }
          .home-secondary-action-dark:hover,
          .home-secondary-action-dark:focus {
            color: var(--dl-color-primary-500);
          }
          .home-metrics {
            display: flex;
            flex-wrap: wrap;
            gap: var(--dl-space-space-fiveunits);
          }
          .home-metric {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-halfunit);
          }
          .home-metric-number {
            font-family: var(--dl-font-heading);
            font-size: 44px;
            font-weight: 700;
          }
          .home-metric-label {
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: rgba(255, 255, 255, 0.58);
          }
          .home-hero-visual {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hero-card {
            width: min(360px, 100%);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-tripleunit);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(18px);
            box-shadow: 0 22px 48px -26px rgba(0, 0, 0, 0.45);
          }
          .home-hero-card-eyebrow {
            font-size: 12px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.58);
          }
          .home-hero-logo {
            width: 120px;
            height: auto;
            align-self: center;
          }
          .home-hero-card-content {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            color: rgba(255, 255, 255, 0.8);
            text-align: left;
          }
          .home-hero-card-caption {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: rgba(255, 255, 255, 0.56);
          }
          .home-trust {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            align-items: center;
            text-align: center;
          }
          .home-trust-heading {
            font-family: var(--dl-font-heading);
            font-size: 16px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--dl-color-primary-600);
          }
          .home-trust-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: var(--dl-space-space-threeunits);
            list-style: none;
            padding: 0;
            margin: 0;
            width: 100%;
          }
          .home-trust-list li {
            font-family: var(--dl-font-heading);
            font-size: 18px;
            color: var(--dl-color-neutral-700);
            letter-spacing: 0.04em;
            text-transform: uppercase;
          }
          .home-services {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fiveunits);
          }
          .home-section-header {
            max-width: 760px;
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            text-align: left;
            color: var(--dl-color-neutral-900);
          }
          .home-section-subtitle {
            font-family: var(--dl-font-heading);
            font-size: 13px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--dl-color-primary-600);
          }
          .home-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: var(--dl-space-space-fiveunits);
          }
          .home-card {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            padding: var(--dl-space-space-fourunits);
            border-radius: 24px;
            background: var(--dl-color-gray-white);
            box-shadow: var(--dl-shadow-soft);
            transition: transform 180ms ease, box-shadow 180ms ease;
          }
          .home-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 28px 56px -30px rgba(12, 23, 38, 0.35);
          }
          .home-icon-container {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--dl-color-neutral-100);
          }
          .home-icon-container svg {
            width: 48px;
            height: 48px;
          }
          .home-card-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-neutral-700);
            font-size: 15px;
          }
          .home-case-studies {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fiveunits);
          }
          .home-case-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fiveunits);
          }
          .home-case-card {
            padding: var(--dl-space-space-fiveunits);
            border-radius: 28px;
            background: linear-gradient(150deg, rgba(18, 41, 66, 0.95), rgba(37, 114, 173, 0.82));
            color: rgba(255, 255, 255, 0.85);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-tripleunit);
            box-shadow: var(--dl-shadow-card);
          }
          .home-case-sector {
            font-size: 13px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.6);
          }
          .home-case-outcome {
            display: flex;
            flex-wrap: wrap;
            gap: var(--dl-space-space-doubleunit);
            font-family: var(--dl-font-heading);
            font-size: 15px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(241, 178, 74, 0.9);
          }
          .home-differentiators {
            width: 100%;
            padding: 0 var(--dl-space-space-tripleunit);
            display: flex;
            justify-content: center;
          }
          .home-differentiators-card {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 28px;
            background: linear-gradient(140deg, rgba(32, 91, 134, 0.08), rgba(241, 178, 74, 0.1));
            border: 1px solid rgba(37, 114, 173, 0.15);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .home-differentiators-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fourunits);
          }
          .home-difference {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-unit);
          }
          .home-approach {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit) var(--dl-space-space-tenunits);
          }
          .home-approach-content {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 24px;
            background: linear-gradient(140deg, rgba(32, 91, 134, 0.08), rgba(241, 178, 74, 0.1));
            border: 1px solid rgba(37, 114, 173, 0.15);
          }
          .home-approach-list {
            display: grid;
            gap: var(--dl-space-space-fourunits);
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .home-approach-step {
            display: flex;
            gap: var(--dl-space-space-doubleunit);
            align-items: flex-start;
          }
          .home-approach-step-number {
            font-family: var(--dl-font-heading);
            font-size: 26px;
            letter-spacing: 0.08em;
            color: var(--dl-color-primary-600);
            line-height: 1;
          }
          .home-approach-step strong {
            font-family: var(--dl-font-heading);
            font-size: 18px;
            color: var(--dl-color-primary-700);
          }
          .home-cta {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 var(--dl-space-space-tripleunit) var(--dl-space-space-tenunits);
          }
          .home-cta-content {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 28px;
            background: var(--dl-color-neutral-50);
            border: 1px solid rgba(18, 41, 66, 0.08);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
            box-shadow: var(--dl-shadow-soft);
          }
          .home-cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .home-main {
              margin-top: 96px;
            }
            .home-hero {
              padding: var(--dl-space-space-eightunits) var(--dl-space-space-doubleunit);
            }
            .home-heading {
              font-size: 40px;
            }
            .home-hero-card {
              margin: 0 auto;
            }
            .home-case-card {
              padding: var(--dl-space-space-fourunits);
            }
            .home-differentiators-card,
            .home-approach-content,
            .home-cta-content {
              padding: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-main {
              gap: var(--dl-space-space-eightunits);
            }
            .home-hero {
              border-radius: 20px;
            }
            .home-actions {
              flex-direction: column;
              align-items: stretch;
            }
            .home-metrics {
              gap: var(--dl-space-space-fourunits);
            }
            .home-metric-number {
              font-size: 36px;
            }
            .home-services,
            .home-case-studies,
            .home-differentiators,
            .home-approach,
            .home-cta {
              padding: 0 var(--dl-space-space-doubleunit);
            }
            .home-case-cards {
              gap: var(--dl-space-space-fourunits);
            }
            .home-cta-actions {
              flex-direction: column;
              align-items: stretch;
            }
          }
          @media (max-width: 479px) {
            .home-main {
              margin-top: 88px;
            }
            .home-hero {
              padding: var(--dl-space-space-sixunits) var(--dl-space-space-doubleunit);
            }
            .home-hero-card {
              padding: var(--dl-space-space-fourunits);
            }
            .home-hero-logo {
              width: 96px;
            }
            .home-metrics {
              flex-direction: column;
              align-items: stretch;
            }
            .home-case-card {
              padding: var(--dl-space-space-fourunits);
            }
            .home-case-outcome {
              flex-direction: column;
              gap: var(--dl-space-space-unit);
            }
            .home-approach-content {
              padding: var(--dl-space-space-fourunits);
            }
            .home-trust-list {
              grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
