import React from 'react'
import Head from 'next/head'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - TPANA IT Solutions</title>
          <meta property="og:title" content="About - TPANA IT Solutions" />
        </Head>
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
          }
        `}
      </style>
    </>
  )
}

export default About
