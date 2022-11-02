import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Experience = (props) => {
  return (
    <>
      <div className="experience-container">
        <Head>
          <title>Experience - TPANA IT Solutions</title>
          <meta property="og:title" content="Experience - TPANA IT Solutions" />
        </Head>
        <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
        <div className="experience-container1">
          <div className="experience-hero">
            <div className="experience-container2">
              <h1 className="experience-heading section-Heading">
                Build on solid ground
              </h1>
              <span className="experience-text">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="experience-text02">
                  Our engineering team has over 16 years of experience working
                  with organizations of varying sizes in the following fields:
                </span>
                <br className="experience-text03 section-Text"></br>
                <span className="experience-text04 section-Text">
                  - Financial Institutions
                </span>
                <br className="experience-text05 section-Text"></br>
                <span className="experience-text06 section-Text">
                  - Insurance Brokers
                </span>
                <br className="experience-text07 section-Text"></br>
                <span className="experience-text08 section-Text">- Telcos</span>
                <br className="experience-text09 section-Text"></br>
                <span className="experience-text10 section-Text">
                  - eGovernement
                </span>
                <br className="experience-text11 section-Text"></br>
                <span className="experience-text12 section-Text">- </span>
                <span className="experience-text13 section-Text">
                  Sustainable / Cyclic economy
                </span>
                <br className="section-Text"></br>
              </span>
            </div>
            <div className="experience-hero-text-container">
              <div className="experience-cta-btn-container"></div>
            </div>
            <img
              alt="image"
              src="/playground_assets/818-1500w.jpg"
              className="experience-image"
            />
          </div>
        </div>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
      <style jsx>
        {`
          .experience-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .experience-container1 {
            width: 100%;
            height: 808px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .experience-hero {
            width: 100%;
            height: 822px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #f1f1f1;
          }
          .experience-container2 {
            width: 555px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .experience-heading {
            color: #040404;
            width: 549px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .experience-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .experience-text02 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text03 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text04 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text05 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text06 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text07 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text08 {
            font-size: 18px;
          }
          .experience-text09 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text10 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text11 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text12 {
            font-size: 18px;
            font-style: normal;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 1px;
          }
          .experience-text13 {
            font-size: 18px;
          }
          .experience-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .experience-cta-btn-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .experience-image {
            width: 40%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .experience-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .experience-heading {
              text-align: center;
            }
            .experience-text {
              text-align: center;
            }
            .experience-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .experience-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .experience-hero-text-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Experience
