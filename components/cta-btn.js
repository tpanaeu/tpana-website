import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const CtaBtn = (props) => {
  return (
    <>
      <div className="cta-btn-container">
        <Link href="/about">
          <a className="cta-btn-link anchor button">{props.cta_btn}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .cta-btn-container {
            display: flex;
            position: relative;
          }
          .cta-btn-link {
            color: var(--dl-color-gray-black);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 767px) {
            .cta-btn-link {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
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
