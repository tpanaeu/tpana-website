import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const About = () => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - TPANA IT Solutions</title>
          <meta property="og:title" content="About - TPANA IT Solutions" />
        </Head>
        <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
        <main className="about-main">
          <section className="about-hero">
            <div className="about-copy">
              <span className="about-eyebrow">Who we are</span>
              <h1 className="about-heading section-Heading">
                We build momentum for missions where quality and trust matter most.
              </h1>
              <p className="about-text content">
                TPANA is a boutique consultancy led by hands-on senior engineers and product
                strategists. We help organisations navigate ambiguity, modernise responsibly, and
                launch services that people rely on every day.
              </p>
              <div className="about-pillars">
                <div className="about-pillar">
                  <span className="about-pillar-title">Co-create</span>
                  <p className="card-Text">
                    We listen deeply, co-design the path forward, and anchor every decision to
                    shared goals and measurable outcomes.
                  </p>
                </div>
                <div className="about-pillar">
                  <span className="about-pillar-title">Simplify</span>
                  <p className="card-Text">
                    We translate complex requirements into elegant services that teams can own and
                    customers can trust.
                  </p>
                </div>
                <div className="about-pillar">
                  <span className="about-pillar-title">Deliver</span>
                  <p className="card-Text">
                    We lead implementation with transparency, pragmatic governance, and the rigor
                    regulated environments demand.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-panel">
              <div className="about-panel-card">
                <img
                  alt="Theodoros Panagopoulos Software Consultants logo"
                  src="/assets/tp-logotype-horizontal.png"
                  className="about-panel-logo"
                />
                <p className="content">
                  Founded by Thodoris Panagopoulos, TPANA partners with leadership teams across
                  finance, telecoms, insurance, public sector, and sustainability to deliver
                  technology with lasting impact.
                </p>
                <div className="about-highlight">
                  <span>Based in Athens. Collaborating across Europe and beyond.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-story">
                <div className="about-story-content">
                  <span className="about-section-subtitle">Our story</span>
                  <h2 className="section-Heading">From architecture blueprints to human-centred services</h2>
                  <p className="content">
                    For over a decade and a half we have designed and shipped platforms that empower
                    teams and serve millions of users. We embed with your organisation, navigate
                    change alongside you, and leave you better equipped for what comes next.
                  </p>
                  <ul className="about-story-list">
                    <li>Enterprise-grade practices paired with product thinking.</li>
                    <li>Coaching and capability uplift woven into delivery.</li>
                    <li>Transparent communication and measurable success metrics.</li>
                  </ul>
                </div>
                <div className="about-story-metrics">
                  <div className="about-story-metric">
                    <span className="about-story-number">40+</span>
                    <span className="about-story-label">Products and services launched</span>
                  </div>
                  <div className="about-story-metric">
                    <span className="about-story-number">12</span>
                    <span className="about-story-label">Cross-functional teams guided</span>
                  </div>
                  <div className="about-story-metric">
                    <span className="about-story-number">5 countries</span>
                    <span className="about-story-label">In-market implementations</span>
                  </div>
                </div>
          </section>

          <section className="about-history">
            <div className="about-history-card">
              <span className="about-section-subtitle">Guiding principles</span>
              <h2 className="section-Heading">Craftsmanship, accountability, and shared ownership</h2>
              <p className="content">
                Every engagement is anchored in behaviours that keep programmes moving and people
                aligned. These are the principles we bring into every room.
              </p>
              <div className="about-values-grid">
                <div className="about-value">
                  <h3 className="card-Heading">Enterprise-ready from day one</h3>
                  <p className="card-Text">
                    From architecture documentation to release governance, we prepare artefacts that
                    work for compliance teams, auditors, and future maintainers.
                  </p>
                </div>
                <div className="about-value">
                  <h3 className="card-Heading">Empathy for both users and teams</h3>
                  <p className="card-Text">
                    We facilitate conversations that surface real needs and constraints, ensuring
                    solutions feel intuitive while respecting internal realities.
                  </p>
                </div>
                <div className="about-value">
                  <h3 className="card-Heading">Measurable outcomes, not vanity deliverables</h3>
                  <p className="card-Text">
                    Success is defined up-front through meaningful metrics, then revisited at every
                    checkpoint so we can adjust together.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 120px;
            gap: var(--dl-space-space-tenunits);
          }
          .about-hero {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-tenunits) var(--dl-space-space-tripleunit);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fiveunits);
            align-items: stretch;
          }
          .about-copy {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .about-eyebrow,
          .about-section-subtitle {
            font-family: var(--dl-font-heading);
            font-size: 13px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--dl-color-primary-600);
          }
          .about-heading {
            color: var(--dl-color-neutral-900);
          }
          .about-text {
            color: var(--dl-color-neutral-700);
            max-width: 640px;
          }
          .about-pillars {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: var(--dl-space-space-fourunits);
          }
          .about-pillar {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .about-pillar-title {
            font-family: var(--dl-font-heading);
            font-size: 18px;
            color: var(--dl-color-primary-700);
            letter-spacing: 0.04em;
            text-transform: uppercase;
          }
          .about-panel {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-panel-card {
            width: 100%;
            padding: var(--dl-space-space-fiveunits);
            border-radius: 24px;
            background: linear-gradient(140deg, rgba(18, 41, 66, 0.9), rgba(37, 114, 173, 0.85));
            box-shadow: var(--dl-shadow-card);
            color: rgba(255, 255, 255, 0.82);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-tripleunit);
          }
          .about-panel-logo {
            width: min(320px, 100%);
            height: auto;
            align-self: center;
            filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.35));
          }
          .about-highlight {
            border-top: 1px solid rgba(255, 255, 255, 0.18);
            padding-top: var(--dl-space-space-doubleunit);
            font-size: 15px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .about-story {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fiveunits);
            align-items: stretch;
          }
          .about-story-content {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
            color: var(--dl-color-neutral-700);
          }
          .about-story-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-unit);
            font-size: 17px;
            color: var(--dl-color-neutral-900);
          }
          .about-story-metrics {
            display: grid;
            gap: var(--dl-space-space-threeunits);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 24px;
            background: var(--dl-color-neutral-50);
            border: 1px solid rgba(18, 41, 66, 0.08);
            box-shadow: var(--dl-shadow-soft);
          }
          .about-story-metric {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-halfunit);
          }
          .about-story-number {
            font-family: var(--dl-font-heading);
            font-size: 36px;
            color: var(--dl-color-primary-700);
          }
          .about-story-label {
            font-size: 16px;
            color: var(--dl-color-neutral-700);
            line-height: 1.5;
          }
          .about-history {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit) var(--dl-space-space-tenunits);
          }
          .about-history-card {
            padding: var(--dl-space-space-fiveunits);
            border-radius: 24px;
            background: var(--dl-color-gray-white);
            box-shadow: var(--dl-shadow-soft);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .about-history-card .content {
            color: var(--dl-color-neutral-700);
          }
          .about-values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: var(--dl-space-space-fourunits);
          }
          .about-value {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-neutral-800);
          }
          .about-value .card-Text {
            color: var(--dl-color-neutral-700);
          }
          @media (max-width: 991px) {
            .about-main {
              margin-top: 96px;
            }
            .about-heading {
              font-size: 40px;
            }
            .about-story-metrics {
              padding: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .about-main {
              gap: var(--dl-space-space-eightunits);
            }
            .about-hero {
              padding: var(--dl-space-space-eightunits) var(--dl-space-space-doubleunit);
            }
            .about-story,
            .about-history {
              padding: 0 var(--dl-space-space-doubleunit);
            }
            .about-history-card {
              padding: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .about-main {
              margin-top: 88px;
            }
            .about-hero {
              padding: var(--dl-space-space-sixunits) var(--dl-space-space-doubleunit);
            }
            .about-panel-card,
            .about-story-metrics {
              padding: var(--dl-space-space-fourunits);
            }
            .about-story {
              grid-template-columns: 1fr;
              gap: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
