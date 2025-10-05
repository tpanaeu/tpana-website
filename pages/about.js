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
              <span className="about-eyebrow">About us</span>
              <h1 className="about-heading section-Heading">
                Trusted partners in digital transformation
              </h1>
              <p className="about-text content">
                TPANA was established in 2022 with a simple goal: help forward-thinking
                organizations transform ambiguous challenges into robust, scalable
                software. We bring deep engineering expertise, an obsession with user
                experience, and a collaborative mindset to every engagement.
              </p>
              <div className="about-pillars">
                <div className="about-pillar">
                  <span className="about-pillar-title">Co-create</span>
                  <p className="card-Text">We listen first, shape together, and align your stakeholders around a shared vision.</p>
                </div>
                <div className="about-pillar">
                  <span className="about-pillar-title">Simplify</span>
                  <p className="card-Text">We translate complex requirements into intuitive services and products.</p>
                </div>
                <div className="about-pillar">
                  <span className="about-pillar-title">Deliver</span>
                  <p className="card-Text">We lead implementation with accountability, transparency, and measurable outcomes.</p>
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
                  Thodoris Panagopoulos &amp; SIA GP is a boutique consultancy led by hands-on senior engineers. We craft long-term partnerships across finance, telco, insurance, public sector, and sustainability.
                </p>
                <div className="about-highlight">
                  <span>Based in Athens, collaborating globally.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-history">
            <div className="about-history-card">
              <h2 className="section-Heading">A philosophy rooted in craftsmanship</h2>
              <p className="content">
                Our work thrives at the intersection of strategy and execution. Every solution we build is designed to scale, adapt, and deliver sustainable impact. We are relentless about quality, yet pragmatic about shipping value.
              </p>
              <ul className="about-list">
                <li>
                  <strong>Expert engineering leadership:</strong> 16+ years of experience building and integrating enterprise-grade systems.
                </li>
                <li>
                  <strong>Empathetic consultancy:</strong> We align technology decisions with business value and customer needs.
                </li>
                <li>
                  <strong>Outcome-focused delivery:</strong> Clear milestones, collaborative rituals, and measurable success metrics.
                </li>
              </ul>
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
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: var(--dl-space-space-fiveunits);
            align-items: stretch;
          }
          .about-copy {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .about-eyebrow {
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
            max-width: 620px;
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
          .about-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: var(--dl-space-space-doubleunit);
          }
          .about-list li {
            font-family: var(--dl-font-body);
            font-size: 17px;
            line-height: 1.7;
            color: var(--dl-color-neutral-900);
          }
          .about-list strong {
            color: var(--dl-color-primary-700);
          }
          @media (max-width: 991px) {
            .about-main {
              margin-top: 96px;
            }
            .about-heading {
              font-size: 40px;
            }
          }
          @media (max-width: 767px) {
            .about-main {
              gap: var(--dl-space-space-eightunits);
            }
            .about-hero {
              padding: var(--dl-space-space-eightunits) var(--dl-space-space-doubleunit);
            }
            .about-history {
              padding: 0 var(--dl-space-space-doubleunit) var(--dl-space-space-eightunits);
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
            .about-panel-card {
              padding: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
