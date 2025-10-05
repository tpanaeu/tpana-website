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
              <span className="home-hero-badge">Strategic Software Consulting</span>
              <h1 className="home-heading section-Heading">
                We help organizations move faster, smarter, and with confidence.
              </h1>
              <p className="home-text content">
                We embed with your teams to understand what matters most. Then we
                prototype, build, and launch digital products that create real
                impact-from automation and integrations to customer-facing
                experiences.
              </p>
              <div className="home-actions">
                <Link href="/contact">
                  <a className="button home-primary-action">Start a project</a>
                </Link>
                <Link href="/experience">
                  <a className="home-secondary-action">View recent work</a>
                </Link>
              </div>
              <div className="home-metrics">
                <div className="home-metric">
                  <span className="home-metric-number">16+</span>
                  <span className="home-metric-label">Years in the field</span>
                </div>
                <div className="home-metric">
                  <span className="home-metric-number">6</span>
                  <span className="home-metric-label">Industries served</span>
                </div>
                <div className="home-metric">
                  <span className="home-metric-number">100%</span>
                  <span className="home-metric-label">Client retention</span>
                </div>
              </div>
            </div>
            <div className="home-hero-visual">
              <div className="home-hero-card">
                <img
                  alt="TP Software Consultants logo"
                  src="/assets/tp-logotype-vertical.png"
                  className="home-hero-logo"
                />
                <div className="home-hero-card-content">
                  <p className="content">
                    "TPANA brought clarity to our roadmap and delivered software
                    that scaled with our growth."
                  </p>
                  <span className="home-hero-card-caption">CTO, Fintech partner</span>
                </div>
              </div>
            </div>
          </section>

          <section className="home-services">
            <div className="home-section-header">
              <span className="home-section-subtitle">What we do</span>
              <h2 className="section-Heading">Services built for complex challenges</h2>
              <p className="content">
                We combine strategy, engineering, and delivery excellence to help you
                transition from idea to outcome without compromising quality or speed.
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
                <h3 className="card-Heading">Process Automation</h3>
                <p className="card-Text">
                  Automate manual flows with resilient integrations and micro-services that
                  connect the dots across your business.
                </p>
              </article>
              <article className="home-card">
                <div className="home-icon-container">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 12a4 4 0 0 1 4-4h12l6 6h10v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12Z" fill="rgba(241,178,74,0.12)" stroke="var(--dl-color-accent-500)" strokeWidth="1.5" />
                    <path d="M16 28h16M16 20h12" stroke="var(--dl-color-accent-500)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="card-Heading">Requirements &amp; Discovery</h3>
                <p className="card-Text">
                  Facilitate product workshops, align stakeholders, and translate insights into
                  actionable delivery plans.
                </p>
              </article>
              <article className="home-card">
                <div className="home-icon-container">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 16.5 24 7l16 9.5v15L24 41l-16-9.5v-15Z" fill="rgba(26,79,116,0.12)" stroke="var(--dl-color-primary-700)" strokeWidth="1.5" />
                    <path d="M24 17v17.5M14 22l10 6M34 22l-10 6" stroke="var(--dl-color-primary-700)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="card-Heading">Architecture &amp; Delivery</h3>
                <p className="card-Text">
                  Design modern, scalable systems and lead delivery teams to ship with pace and
                  confidence.
                </p>
              </article>
            </div>
          </section>

          <section className="home-approach">
            <div className="home-approach-content">
              <span className="home-section-subtitle">Our approach</span>
              <h2 className="section-Heading">Human-centered delivery that meets enterprise standards</h2>
              <ul className="home-approach-list">
                <li>
                  <strong>Co-create the vision</strong>
                  <p className="card-Text">
                    Collaborative discovery sessions to clarify objectives, success metrics, and risks.
                  </p>
                </li>
                <li>
                  <strong>Design lean solutions</strong>
                  <p className="card-Text">
                    Experience-led prototypes backed by technical validation ensure feasibility from day one.
                  </p>
                </li>
                <li>
                  <strong>Deliver and iterate</strong>
                  <p className="card-Text">
                    Pragmatic releases with measurable checkpoints keep stakeholders aligned and outcomes on track.
                  </p>
                </li>
              </ul>
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
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
          .home-secondary-action:hover,
          .home-secondary-action:focus {
            color: var(--dl-color-gray-white);
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
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .home-approach-list li {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-doubleunit);
          }
          .home-approach-list strong {
            font-family: var(--dl-font-heading);
            font-size: 18px;
            color: var(--dl-color-primary-700);
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
            .home-approach {
              padding: 0 var(--dl-space-space-doubleunit);
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
            .home-approach-content {
              padding: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
