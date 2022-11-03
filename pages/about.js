import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - TPANA IT Solutions</title>
          <meta property="og:title" content="About - TPANA IT Solutions" />
        </Head>
        <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
        <div className="about-container1">
          <div className="about-hero">
            <div className="about-container2">
              <h1 className="about-heading section-Heading">
                Thodoris Panagopoulos k SIA GP
              </h1>
              <span className="about-text">
                <span>
                  {' '}
                  TPANA was established in 2022, with the vision of helping
                  organizations achieve their business goals through software.
                </span>
                <br className="section-Text"></br>
                <br className="content"></br>
                <span className="content">
                  We have a passion for technology, enjoy working with others,
                  understanding their needs and help them overcome their
                  problems.
                </span>
                <br className="section-Text"></br>
              </span>
            </div>
            <div className="about-hero-text-container">
              <div className="about-cta-btn-container"></div>
            </div>
            <img
              alt="image"
              src="/playground_assets/tpana_animation-1500w.gif"
              className="about-image"
            />
          </div>
        </div>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .about-container1 {
            width: 100%;
            height: 808px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .about-hero {
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
          .about-container2 {
            width: 657px;
            height: 291px;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .about-heading {
            color: #040404;
            width: 549px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .about-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .about-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-cta-btn-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-image {
            width: 40%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .about-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .about-heading {
              text-align: center;
            }
            .about-text {
              text-align: center;
            }
            .about-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .about-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .about-hero-text-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
