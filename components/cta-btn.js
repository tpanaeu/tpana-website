import React from 'react'

import PropTypes from 'prop-types'

const CtaBtn = (props) => {
  return (
    <>
      <div className="cta-btn-container">
        <button className="cta-btn-cta-btn anchor button">
          {props.cta_btn}
        </button>
      </div>
      <style jsx>
        {`
          .cta-btn-container {
            display: flex;
            position: relative;
          }
          .cta-btn-cta-btn {
            color: var(--dl-color-gray-black);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 767px) {
            .cta-btn-cta-btn {
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
