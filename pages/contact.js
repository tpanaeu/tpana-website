import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import FooterContainer from '../components/footer-container'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - TPANA IT Solutions</title>
          <meta property="og:title" content="Contact - TPANA IT Solutions" />
        </Head>
        <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
        <div className="contact-container1">
          <div className="contact-hero">
            <div className="contact-container2">
              <h1 className="contact-heading section-Heading">Want to chat?</h1>
              <span className="contact-text">
                <span>
                  {' '}
                  You may drop us an a message at :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="mailto:contact@tpana.eu?subject=">contact@tpana.eu</a>
                <br className="section-Text"></br>
                <br className="section-Text"></br>
                <br className="section-Text"></br>
              </span>
            </div>
            <div className="contact-hero-text-container">
              <div className="contact-cta-btn-container"></div>
            </div>
            <img
              alt="image"
              src="/playground_assets/818-1500w.jpg"
              className="contact-image"
            />
          </div>
        </div>
        <FooterContainer rootClassName="footer-container-root-class-name"></FooterContainer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-container1 {
            width: 100%;
            height: 808px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .contact-hero {
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
          .contact-container2 {
            width: 555px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .contact-heading {
            color: #040404;
            width: 549px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .contact-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .contact-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-cta-btn-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .contact-image {
            width: 40%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .contact-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .contact-heading {
              text-align: center;
            }
            .contact-text {
              text-align: center;
            }
            .contact-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .contact-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-hero-text-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
