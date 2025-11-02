import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <Head>
          <title>Experience - TPANA IT Solutions</title>
          <meta property="og:title" content="Experience - TPANA IT Solutions" />
        </Head>
        <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
        <main className="experience-main">
          <section className="experience-hero">
            <div className="experience-copy">
              <span className="experience-eyebrow">Experience</span>
              <h1 className="experience-heading section-Heading">
                Complex programmes delivered with clarity and momentum.
              </h1>
              <p className="experience-lead content">
                Our leadership team has shepherded multi-year transformations and rapid delivery
                squads alike. Whether the challenge is modernising a legacy estate or launching a
                new digital product, we bring the structure, empathy, and engineering depth to make
                it successful.
              </p>
            </div>
            <div className="experience-hero-card">
              <h2>Core sectors</h2>
              <ul>
                <li>Financial Institutions</li>
                <li>Insurance Brokers</li>
                <li>Telecommunications</li>
                <li>eGovernment Platforms</li>
                <li>Sustainable &amp; Circular Economy</li>
              </ul>
              <p className="card-Text">
                We understand the governance demands of regulated industries and how to guide teams
                through them without losing sight of user experience.
              </p>
            </div>
          </section>

          <section className="experience-results">
            <div className="experience-results-card">
              <span className="experience-results-eyebrow">Our impact</span>
              <h2 className="section-Heading">Programmes we led unlocked measurable outcomes</h2>
              <div className="experience-results-stats">
                <div className="experience-results-stat">
                  <span className="experience-results-number">6x</span>
                  <span className="experience-results-label">Faster release cadence after modernisation</span>
                </div>
                <div className="experience-results-stat">
                  <span className="experience-results-number">45%</span>
                  <span className="experience-results-label">Reduction in manual processing effort</span>
                </div>
                <div className="experience-results-stat">
                  <span className="experience-results-number">↑32</span>
                  <span className="experience-results-label">Point lift in customer experience scores</span>
                </div>
              </div>
            </div>
          </section>

          <section className="experience-grid">
            <article className="experience-tile">
              <h3 className="card-Heading">Advisory &amp; Roadmapping</h3>
              <p className="card-Text">
                Turn complex ambitions into aligned, actionable plans with clear investments,
                milestones, and measurable guardrails.
              </p>
              <ul className="experience-tile-list">
                <li>Vision articulation &amp; opportunity framing</li>
                <li>Capability assessments &amp; due diligence</li>
                <li>Funding decks and stakeholder storytelling</li>
              </ul>
            </article>
            <article className="experience-tile">
              <h3 className="card-Heading">Solution Architecture</h3>
              <p className="card-Text">
                Design scalable, secure architectures that integrate legacy environments with modern
                platforms and cloud services.
              </p>
              <ul className="experience-tile-list">
                <li>Target architecture definition &amp; diagrams</li>
                <li>Integration strategies &amp; migration plans</li>
                <li>Security, compliance, and observability blueprints</li>
              </ul>
            </article>
            <article className="experience-tile">
              <h3 className="card-Heading">Team Leadership</h3>
              <p className="card-Text">
                Embed experienced product, engineering, and delivery leaders to uplift your teams
                and accelerate execution.
              </p>
              <ul className="experience-tile-list">
                <li>Fractional CTO, CPO, and delivery leads</li>
                <li>Operating model &amp; ritual design</li>
                <li>Capability uplift through pairing and coaching</li>
              </ul>
            </article>
            <article className="experience-tile">
              <h3 className="card-Heading">Delivery Excellence</h3>
              <p className="card-Text">
                Ship production-ready software supported by mature practices, automated quality, and
                transparent reporting.
              </p>
              <ul className="experience-tile-list">
                <li>Incremental delivery &amp; release governance</li>
                <li>Quality engineering &amp; automation frameworks</li>
                <li>Runbooks, support models, and continuous improvement</li>
              </ul>
            </article>
          </section>

          <section className="experience-proof">
            <div className="experience-proof-card">
              <span className="experience-results-eyebrow">Recent highlights</span>
              <div className="experience-proof-grid">
                <article>
                  <h3 className="card-Heading">RegTech platform scale-up</h3>
                  <p className="card-Text">
                    Unified fragmented compliance tooling into a single platform, streamlining KYC
                    journeys across four markets and enabling faster expansion.
                  </p>
                </article>
                <article>
                  <h3 className="card-Heading">National eGovernment service</h3>
                  <p className="card-Text">
                    Led discovery, procurement alignment, and phased delivery of a citizen-facing
                    service with full auditability and accessible UX.
                  </p>
                </article>
                <article>
                  <h3 className="card-Heading">Telecom customer operations</h3>
                  <p className="card-Text">
                    Introduced data-led service rituals, integrated CRM and billing estates, and
                    reduced contact centre handling times by double digits.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="experience-cta">
            <div className="experience-cta-card">
              <div>
                <span className="experience-results-eyebrow">Let's collaborate</span>
                <h2 className="section-Heading">Bring us into your next mission-critical initiative</h2>
              </div>
              <p className="content">
                Share where you want to be in the next 90 days and we'll outline how we can help
                unblock the path—whether you need an audit, a squad, or long-term leadership.
              </p>
              <Link href="/contact">
                <a className="button">Schedule a discovery call</a>
              </Link>
            </div>
          </section>
        </main>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
      <style jsx>
        {`
          .experience-container {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .experience-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 120px;
            gap: var(--dl-space-space-tenunits);
          }
          .experience-hero {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-tenunits) var(--dl-space-space-tripleunit);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fiveunits);
          }
          .experience-copy {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .experience-eyebrow,
          .experience-results-eyebrow {
            font-family: var(--dl-font-heading);
            font-size: 13px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--dl-color-primary-600);
          }
          .experience-heading {
            color: var(--dl-color-neutral-900);
          }
          .experience-lead {
            color: var(--dl-color-neutral-700);
            max-width: 640px;
          }
          .experience-hero-card {
            background: linear-gradient(140deg, rgba(37, 114, 173, 0.12), rgba(18, 41, 66, 0.12));
            border: 1px solid rgba(37, 114, 173, 0.2);
            border-radius: 24px;
            padding: var(--dl-space-space-fiveunits);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-threeunits);
            box-shadow: var(--dl-shadow-soft);
          }
          .experience-hero-card h2 {
            font-family: var(--dl-font-heading);
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--dl-color-primary-700);
          }
          .experience-hero-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-unit);
            font-size: 18px;
            color: var(--dl-color-neutral-900);
          }
          .experience-results {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 var(--dl-space-space-tripleunit);
          }
          .experience-results-card {
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
          .experience-results-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: var(--dl-space-space-fourunits);
          }
          .experience-results-stat {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-halfunit);
          }
          .experience-results-number {
            font-family: var(--dl-font-heading);
            font-size: 40px;
            color: var(--dl-color-primary-700);
          }
          .experience-results-label {
            font-size: 16px;
            color: var(--dl-color-neutral-700);
            line-height: 1.5;
          }
          .experience-grid {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: var(--dl-space-space-fiveunits);
          }
          .experience-tile {
            background: var(--dl-color-gray-white);
            border-radius: 24px;
            padding: var(--dl-space-space-fourunits);
            box-shadow: var(--dl-shadow-soft);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
            border: 1px solid rgba(18, 41, 66, 0.08);
            transition: transform 180ms ease, box-shadow 180ms ease;
          }
          .experience-tile:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -28px rgba(13, 30, 48, 0.35);
          }
          .experience-tile-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-halfunit);
            font-size: 15px;
            color: var(--dl-color-neutral-700);
          }
          .experience-proof {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 var(--dl-space-space-tripleunit);
          }
          .experience-proof-card {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 28px;
            background: linear-gradient(140deg, rgba(32, 91, 134, 0.08), rgba(241, 178, 74, 0.12));
            border: 1px solid rgba(37, 114, 173, 0.15);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .experience-proof-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: var(--dl-space-space-fourunits);
          }
          .experience-proof-grid article {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-neutral-800);
          }
          .experience-cta {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 var(--dl-space-space-tripleunit) var(--dl-space-space-tenunits);
          }
          .experience-cta-card {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: var(--dl-space-space-fiveunits);
            border-radius: 28px;
            background: linear-gradient(150deg, rgba(18, 41, 66, 0.92), rgba(37, 114, 173, 0.88));
            box-shadow: var(--dl-shadow-card);
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
            color: rgba(255, 255, 255, 0.88);
          }
          .experience-cta-card .content {
            color: rgba(255, 255, 255, 0.8);
          }
          .experience-cta-card .button {
            align-self: flex-start;
          }
          @media (max-width: 991px) {
            .experience-main {
              margin-top: 96px;
            }
            .experience-heading {
              font-size: 40px;
            }
            .experience-results-card,
            .experience-proof-card,
            .experience-cta-card {
              padding: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .experience-main {
              gap: var(--dl-space-space-eightunits);
            }
            .experience-hero {
              padding: var(--dl-space-space-eightunits) var(--dl-space-space-doubleunit);
            }
            .experience-results,
            .experience-grid,
            .experience-proof,
            .experience-cta {
              padding: 0 var(--dl-space-space-doubleunit);
            }
            .experience-cta-card .button {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .experience-main {
              margin-top: 88px;
            }
            .experience-hero {
              padding: var(--dl-space-space-sixunits) var(--dl-space-space-doubleunit);
            }
            .experience-hero-card {
              padding: var(--dl-space-space-fourunits);
            }
            .experience-results-card,
            .experience-proof-card,
            .experience-cta-card {
              gap: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Experience
