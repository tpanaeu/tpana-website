import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const About = () => {
  return (
    <>
      <div className="page-shell">
        <Head>
          <title>About TPANA | Senior-Led Digital Transformation Partner</title>
          <meta
            name="description"
            content="Learn how TPANA combines product strategy, architecture, and delivery leadership to help organisations modernise responsibly."
          />
          <meta property="og:title" content="About TPANA" />
        </Head>

        <NavbarContainer />

        <main className="page-main">
          <section className="shell-section">
            <div className="hero-shell about-hero">
              <div className="hero-copy">
                <span className="eyebrow">About TPANA</span>
                <h1 className="section-Heading">
                  A senior partner for programmes where credibility matters as much as speed.
                </h1>
                <p className="content hero-lead">
                  TPANA was built around a simple idea: complex digital change works better when
                  the same partner can shape the strategy, challenge weak assumptions, and help the
                  team execute with discipline.
                </p>
                <div className="action-row">
                  <Link href="/contact">
                    <a className="button">Talk through your challenge</a>
                  </Link>
                  <Link href="/experience">
                    <a className="button-secondary">Review recent work</a>
                  </Link>
                </div>
              </div>

              <aside className="hero-aside">
                <div className="quote-card">
                  <img
                    alt="TPANA vertical logotype"
                    src="/assets/tp-logotype-vertical.png"
                    className="about-mark"
                  />
                  <p className="content hero-lead">
                    Founded by Thodoris Panagopoulos, the practice supports organisations across
                    finance, telecoms, insurance, public services, and sustainability.
                  </p>
                  <div className="about-location">Athens based. Working across Europe and beyond.</div>
                </div>
              </aside>
            </div>
          </section>

          <section className="shell-section section-stack">
            <div className="section-header">
              <span className="eyebrow">Operating Principles</span>
              <h2 className="section-Heading">What clients experience when they work with us</h2>
            </div>
            <div className="card-grid">
              <article className="feature-card">
                <h3 className="card-Heading">Strategic thinking that survives delivery reality</h3>
                <p className="card-Text">
                  We do not stop at roadmap slides. Every recommendation is shaped around the teams,
                  systems, and governance that need to make it real.
                </p>
              </article>
              <article className="feature-card">
                <h3 className="card-Heading">Human-centred design without enterprise naivety</h3>
                <p className="card-Text">
                  The work has to feel intuitive for customers and manageable for operations,
                  compliance, and support teams.
                </p>
              </article>
              <article className="feature-card">
                <h3 className="card-Heading">Clear accountability in ambiguous environments</h3>
                <p className="card-Text">
                  We bring structure to blurred ownership, competing priorities, and delivery
                  programmes that need a calmer centre of gravity.
                </p>
              </article>
            </div>
          </section>

          <section className="shell-section">
            <div className="split-grid">
              <div className="light-surface about-story">
                <div className="section-header">
                  <span className="eyebrow">Our Story</span>
                  <h2 className="section-Heading">From architecture depth to service clarity</h2>
                  <p className="content">
                    Over the years, the work has spanned architecture, delivery leadership, and
                    product shaping. The common thread is helping organisations cut through
                    complexity and leave with stronger internal capability than they started with.
                  </p>
                </div>
                <ul className="check-list">
                  <li>Enterprise-grade documentation and governance from day one</li>
                  <li>Capability uplift woven into delivery, not bolted on afterwards</li>
                  <li>Decisions anchored in measurable outcomes rather than vanity milestones</li>
                </ul>
              </div>

              <div className="stat-grid">
                <article className="stat-card">
                  <span className="stat-value">40+</span>
                  <p className="card-Text">Products and service initiatives launched or reset</p>
                </article>
                <article className="stat-card">
                  <span className="stat-value">12</span>
                  <p className="card-Text">Cross-functional teams guided through change</p>
                </article>
                <article className="stat-card">
                  <span className="stat-value">5</span>
                  <p className="card-Text">Countries with in-market programme delivery</p>
                </article>
              </div>
            </div>
          </section>

          <section className="shell-section">
            <div className="light-surface about-values">
              <div className="section-header">
                <span className="eyebrow">What We Protect</span>
                <h2 className="section-Heading">The standards we bring into every room</h2>
              </div>
              <div className="proof-grid">
                <article className="proof-card">
                  <h3 className="card-Heading">Craft with context</h3>
                  <p className="card-Text">
                    Beautiful user journeys do not matter if internal teams cannot support them. We
                    design for the whole operating environment.
                  </p>
                </article>
                <article className="proof-card">
                  <h3 className="card-Heading">Rigor without drag</h3>
                  <p className="card-Text">
                    Regulated work needs discipline. We build controls and artefacts that reduce
                    risk without slowing delivery to a crawl.
                  </p>
                </article>
                <article className="proof-card">
                  <h3 className="card-Heading">Shared ownership</h3>
                  <p className="card-Text">
                    The best engagements leave clients more capable. We partner closely enough that
                    the organisation can sustain momentum after launch.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>

        <FooterContainer />
      </div>

      <style jsx>{`
        .about-hero {
          align-items: center;
        }
        .about-mark {
          width: 112px;
          height: auto;
        }
        .about-location {
          font-family: var(--dl-font-mono);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--dl-color-primary-500);
        }
        .about-story,
        .about-values {
          padding: clamp(1.75rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
      `}</style>
    </>
  )
}

export default About
