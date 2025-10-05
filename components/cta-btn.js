import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const CtaBtn = (props) => {
  return (
    <>
      <div className="cta-btn-container">
        <Link href="/about">
          <a className="cta-btn-link anchor button">
            {props.cta_btn}
            <span className="cta-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .cta-btn-container {
            display: flex;
            position: relative;
          }
          .cta-btn-link {
            display: inline-flex;
            align-items: center;
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-white);
            text-align: center;
            text-decoration: none;
          }
          .cta-btn-icon {
            display: inline-flex;
            width: 18px;
            height: 18px;
          }
          .cta-btn-icon svg {
            width: 100%;
            height: 100%;
          }
          @media (max-width: 767px) {
          }
        `}
      </style>
    </>
  )
}

CtaBtn.defaultProps = {
  cta_btn: 'ABOUT US',
}

CtaBtn.propTypes = {
  cta_btn: PropTypes.string,
}

export default CtaBtn
