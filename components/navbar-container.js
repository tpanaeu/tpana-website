import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavbarContainer = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { href: '/about', label: props.link },
    { href: '/experience', label: props.link1 },
    { href: '/contact', label: props.link2 },
  ]

  return (
    <>
      <div
        data-role="Header"
        className={`navbar-container-navbar-container ${props.rootClassName} `}
      >
        <div className="navbar-container-navbar">
          <Link href="/">
            <a className="navbar-container-brand" aria-label="TP Software Consultants">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="navbar-container-image"
              />
            </a>
          </Link>
          <nav className="navbar-container-links-container" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="navbar-Link navbar-container-link">{link.label}</a>
              </Link>
            ))}
          </nav>
          <div className="navbar-container-cta">
            <Link href="/contact">
              <a className="navbar-container-contact button">{props.ctaLabel}</a>
            </Link>
          </div>
          <button
            type="button"
            data-type="BurgerMenu"
            className="navbar-container-burger-menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg viewBox="0 0 1024 1024" className="navbar-container-icon" aria-hidden="true">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          data-type="MobileMenu"
          className={`navbar-container-mobile-menu ${menuOpen ? 'navbar-container-mobile-menu--open' : ''}`}
        >
          <div className="navbar-container-container">
            <Link href="/">
              <a className="navbar-container-heading card-Heading" onClick={() => setMenuOpen(false)}>
                {props.Heading}
              </a>
            </Link>
            <button
              type="button"
              data-type="CloseMobileMenu"
              className="navbar-container-close-menu"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <svg viewBox="0 0 1024 1024" className="navbar-container-icon2" aria-hidden="true">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </button>
          </div>
          <nav className="navbar-container-links-container1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="navbar-Link navbar-container-link-mobile"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="navbar-container-contact-mobile button" onClick={() => setMenuOpen(false)}>
                {props.ctaLabel}
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            top: 0;
            left: 0;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(12px);
            box-shadow: 0 10px 40px -24px rgba(15, 47, 69, 0.45);
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
          .navbar-container-brand {
            display: inline-flex;
            align-items: center;
          }
          .navbar-container-image {
            width: 220px;
            height: auto;
            object-fit: contain;
          }
          .navbar-container-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: var(--dl-space-space-doubleunit);
          }
          .navbar-container-link {
            color: var(--dl-color-primary-700);
            position: relative;
            padding: 0.35rem 0;
          }
          .navbar-container-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: var(--dl-color-primary-500);
            transition: width 160ms ease;
          }
          .navbar-container-link:hover::after,
          .navbar-container-link:focus-visible::after {
            width: 100%;
          }
          .navbar-container-cta {
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
          }
          .navbar-container-contact {
            padding: 0.75rem 1.75rem;
            font-size: 15px;
          }
          .navbar-container-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0.5rem;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius8);
            border: 1px solid rgba(29, 95, 143, 0.15);
            background-color: var(--dl-color-gray-white);
          }
          .navbar-container-icon {
            width: 36px;
            height: 36px;
            fill: var(--dl-color-primary-700);
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
            background: rgba(9, 15, 27, 0.86);
            backdrop-filter: blur(12px);
            opacity: 0;
            pointer-events: none;
            transition: opacity 160ms ease;
          }
          .navbar-container-mobile-menu--open {
            display: flex;
            opacity: 1;
            pointer-events: auto;
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
          .navbar-container-heading {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .navbar-container-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 44px;
            height: 44px;
            border-radius: var(--dl-radius-radius-radius8);
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: rgba(255, 255, 255, 0.05);
          }
          .navbar-container-icon2 {
            width: 24px;
            height: 24px;
            fill: var(--dl-color-gray-white);
          }
          .navbar-container-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: var(--dl-space-space-doubleunit);
          }
          .navbar-container-link-mobile {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            letter-spacing: 0.08em;
          }
          .navbar-container-contact-mobile {
            width: 100%;
            text-align: center;
          }
          .navbar-container-root-class-name {
            top: 0px;
            right: 0px;
            background: rgba(255, 255, 255, 0.96);
          }
          .navbar-container-root-class-name1 {
            top: -22px;
            left: -18px;
          }
          .navbar-container-root-class-name2 {
            top: -22px;
            left: -18px;
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
          }
          @media (max-width: 991px) {
            .navbar-container-navbar {
              padding-top: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .navbar-container-links-container {
              display: none;
            }
            .navbar-container-cta {
              display: none;
            }
            .navbar-container-burger-menu {
              display: inline-flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-container-navbar {
              position: relative;
            }
          }
          @media (max-width: 479px) {
            .navbar-container-burger-menu {
              margin-left: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarContainer.defaultProps = {
  rootClassName: '',
  link1: 'Experience',
  link: 'About',
  image_src: '/assets/tp-logotype-horizontal.png',
  Heading: 'TP Software Consultants',
  image_alt: 'image',
  link2: 'Contact',
  ctaLabel: "Let's talk",
}

NavbarContainer.propTypes = {
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  link: PropTypes.string,
  image_src: PropTypes.string,
  Heading: PropTypes.string,
  image_alt: PropTypes.string,
  link2: PropTypes.string,
  ctaLabel: PropTypes.string,
}

export default NavbarContainer
