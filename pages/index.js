import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import CtaBtn from '../components/cta-btn'
import FooterContainer from '../components/footer-container'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>TPANA IT Solutions</title>
          <meta property="og:title" content="TPANA IT Solutions" />
        </Head>
        <NavbarContainer></NavbarContainer>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div className="home-container1">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading section-Heading">
                We help organizations achieve their goals through technology
              </h1>
              <span className="home-text">
                <span>
                  {' '}
                  Working directly with the customer to analyze, design, develop
                  and deliver outstanding applications, quickly and effectively.
                </span>
                <br className="section-Text"></br>
              </span>
              <div className="home-cta-btn-container">
                <Link href="/about">
                  <a className="home-link">
                    <CtaBtn className="home-component1"></CtaBtn>
                  </a>
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/818-1500w.jpg"
              className="home-image"
            />
          </div>
        </div>
        <div className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text3 section-Heading">Services</h2>
          </div>
          <div className="home-cards-container">
            <div className="home-card">
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="home-icon"
                >
                  <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
              </div>
              <div className="home-content-container">
                <span className="home-heading1 card-Heading">
                  Process Automation
                </span>
                <span className="home-text4 card-Text">
                  Reduce the time required to do business by automating common
                  tasks.
                </span>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-icon-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
                </svg>
              </div>
              <div className="home-content-container1">
                <span className="home-heading2 card-Heading">
                  Requirements Analysis
                </span>
                <span className="home-text5 card-Text">
                  Identify your core business needs, with future extensibility
                  in mind.
                </span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 865.7188571428571 1024"
                  className="home-icon4"
                >
                  <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
              </div>
              <div className="home-content-container2">
                <span className="home-heading3 card-Heading">
                  Software Design
                </span>
                <span className="home-text6">
                  Design your applications with robust modern technologies.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-section-separator3"></div>
        <div className="home-section-separator4"></div>
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
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .home-hero {
            width: 100%;
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
          .home-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: #040404;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cta-btn-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link {
            display: contents;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-image {
            width: 40%;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            height: 521px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text3 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text4 {
            text-align: center;
          }
          .home-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon2 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text5 {
            text-align: center;
          }
          .home-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-icon4 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text6 {
            text-align: center;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          @media (max-width: 991px) {
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading {
              text-align: center;
            }
            .home-text {
              text-align: center;
            }
            .home-image {
              width: 100%;
            }
            .home-text3 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .home-hero-text-container {
              width: 100%;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
