import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavbarContainer = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`navbar-container-navbar-container ${props.rootClassName} `}
      >
        <div className="navbar-container-navbar">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-container-image"
          />
          <div className="navbar-container-links-container">
            <Link href="/about">
              <a className="navbar-container-link1 navbar-Link">{props.link}</a>
            </Link>
            <span className="navbar-container-link2 navbar-Link">
              {props.link1}
            </span>
            <Link href="/contact">
              <a className="navbar-container-link4 navbar-Link">
                {props.link2}
              </a>
            </Link>
          </div>
          <div data-type="BurgerMenu" className="navbar-container-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-container-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="navbar-container-mobile-menu">
            <div className="navbar-container-container">
              <span className="card-Heading navbar-container-heading">
                {props.Heading}
              </span>
              <div
                data-type="CloseMobileMenu"
                className="navbar-container-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navbar-container-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="navbar-container-links-container1">
              <span className="navbar-container-link5 navbar-Link">
                {props.link3}
              </span>
              <span className="navbar-container-link6 navbar-Link">
                {props.link4}
              </span>
              <span className="navbar-container-link7 navbar-Link">
                {props.link5}
              </span>
              <span className="navbar-Link">{props.link6}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-container-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .navbar-container-image {
            width: 100px;
            height: 90px;
            object-fit: cover;
          }
          .navbar-container-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .navbar-container-link1 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .navbar-container-link2 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .navbar-container-link4 {
            text-decoration: none;
          }
          .navbar-container-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container-icon {
            width: 36px;
            height: 36px;
          }
          .navbar-container-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-container-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-container-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container-icon2 {
            width: 24px;
            height: 24px;
          }
          .navbar-container-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container-link5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container-link6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container-link7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container-root-class-name {
            top: 0px;
            right: 0px;
            background-color: #d9d9d9;
          }
          .navbar-container-root-class-name1 {
            top: -22px;
            left: -18px;
          }
          .navbar-container-root-class-name2 {
            top: -22px;
            left: -18px;
          }
          @media (max-width: 991px) {
            .navbar-container-heading {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .navbar-container-navbar {
              position: relative;
            }
            .navbar-container-links-container {
              display: none;
            }
            .navbar-container-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .navbar-container-icon {
              fill: var(--dl-color-gray-white);
            }
          }
          @media (max-width: 479px) {
            .navbar-container-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarContainer.defaultProps = {
  rootClassName: '',
  link3: 'About',
  link1: 'Experience',
  link5: 'Portofolio',
  link: 'About',
  link6: 'Contact',
  image_src: '/playground_assets/tpana%20%5B2%5D-200h.png',
  Heading: 'Logo',
  image_alt: 'image',
  link2: 'Contact',
  link4: 'Experience',
}

NavbarContainer.propTypes = {
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  link5: PropTypes.string,
  link: PropTypes.string,
  link6: PropTypes.string,
  image_src: PropTypes.string,
  Heading: PropTypes.string,
  image_alt: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
}

export default NavbarContainer
