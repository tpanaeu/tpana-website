import React from 'react'
import Head from 'next/head'

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
                Build on solid ground
              </h1>
              <p className="experience-lead content">
                Our team has led multi-disciplinary initiatives across regulated industries and
                fast-moving scale-ups alike. We bring a blend of product thinking, architecture,
                and delivery pragmatism to every engagement.
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
            </div>
          </section>

          <section className="experience-grid">
            <article className="experience-tile">
              <h3 className="card-Heading">Advisory &amp; Roadmapping</h3>
              <p className="card-Text">
                Translate business strategy into actionable delivery plans, align stakeholders, and
                de-risk investments with technical due diligence.
              </p>
            </article>
            <article className="experience-tile">
              <h3 className="card-Heading">Solution Architecture</h3>
              <p className="card-Text">
                Define modern architectures, integration patterns, and platform strategies that scale
                confidently across hybrid and cloud environments.
              </p>
            </article>
            <article className="experience-tile">
              <h3 className="card-Heading">Team Leadership</h3>
              <p className="card-Text">
                Lead cross-functional teams, instil agile operating rhythms, and nurture capabilities
                within your organisation.
              </p>
            </article>
            <article className="experience-tile">
              <h3 className="card-Heading">Delivery Excellence</h3>
              <p className="card-Text">
                Ship production-ready software with rigorous quality practices, observability, and
                continuous improvement baked in.
              </p>
            </article>
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
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: var(--dl-space-space-fiveunits);
          }
          .experience-copy {
            display: flex;
            flex-direction: column;
            gap: var(--dl-space-space-fourunits);
          }
          .experience-eyebrow {
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
          .experience-grid {
            width: 100%;
            max-width: var(--dl-size-size-maxcontent);
            padding: 0 var(--dl-space-space-tripleunit) var(--dl-space-space-tenunits);
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
          @media (max-width: 991px) {
            .experience-main {
              margin-top: 96px;
            }
            .experience-heading {
              font-size: 40px;
            }
          }
          @media (max-width: 767px) {
            .experience-main {
              gap: var(--dl-space-space-eightunits);
            }
            .experience-hero {
              padding: var(--dl-space-space-eightunits) var(--dl-space-space-doubleunit);
            }
            .experience-grid {
              padding: 0 var(--dl-space-space-doubleunit) var(--dl-space-space-eightunits);
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
          }
        `}
      </style>
    </>
  )
}

export default Experience
