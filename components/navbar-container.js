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
      <header className={`navbar-container ${props.rootClassName}`}>
        <div className="navbar-shell">
          <Link href="/">
            <a className="navbar-brand" aria-label="TPANA home" onClick={() => setMenuOpen(false)}>
              <img alt={props.image_alt} src={props.image_src} className="navbar-logo" />
              <span className="navbar-brand-copy">
                Boutique strategy, product, and engineering leadership
              </span>
            </a>
          </Link>

          <nav className="navbar-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="navbar-Link navbar-link">{link.label}</a>
              </Link>
            ))}
          </nav>

          <div className="navbar-actions">
            <Link href="/contact">
              <a className="button navbar-cta">{props.ctaLabel}</a>
            </Link>
            <button
              type="button"
              className="navbar-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`navbar-mobile ${menuOpen ? 'navbar-mobile-open' : ''}`}>
          <div className="navbar-mobile-panel">
            <div className="navbar-mobile-top">
              <span className="navbar-mobile-label">Navigation</span>
              <button
                type="button"
                className="navbar-mobile-close"
                aria-label="Close navigation"
                onClick={() => setMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18"></path>
                </svg>
              </button>
            </div>

            <nav className="navbar-mobile-links" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="navbar-mobile-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>

            <Link href="/contact">
              <a className="button navbar-mobile-cta" onClick={() => setMenuOpen(false)}>
                {props.ctaLabel}
              </a>
            </Link>
          </div>
        </div>
      </header>

      <style jsx>{`
        .navbar-container {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 120;
          display: flex;
          justify-content: center;
          padding: 18px 24px 0;
        }
        .navbar-shell {
          width: min(100%, var(--dl-size-size-maxcontent));
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto;
          gap: 20px;
          align-items: center;
          padding: 14px 18px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(23, 28, 36, 0.08);
          box-shadow: 0 24px 60px -42px rgba(17, 19, 24, 0.48);
          backdrop-filter: blur(18px);
        }
        .navbar-brand {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }
        .navbar-logo {
          width: clamp(126px, 15vw, 168px);
          height: auto;
          flex-shrink: 0;
        }
        .navbar-brand-copy {
          max-width: 250px;
          font-size: 0.74rem;
          line-height: 1.45;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--dl-color-neutral-700);
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .navbar-link {
          color: var(--dl-color-primary-800);
          position: relative;
          padding-bottom: 6px;
        }
        .navbar-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left center;
          background: linear-gradient(90deg, var(--dl-color-primary-500), var(--dl-color-accent-500));
          transition: transform 140ms ease;
        }
        .navbar-link:hover::after,
        .navbar-link:focus-visible::after {
          transform: scaleX(1);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .navbar-cta {
          min-height: 48px;
          padding-inline: 1.3rem;
        }
        .navbar-toggle {
          display: none;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          border: 1px solid rgba(29, 79, 119, 0.14);
          background: rgba(255, 255, 255, 0.9);
          align-items: center;
          justify-content: center;
          color: var(--dl-color-primary-800);
        }
        .navbar-toggle svg,
        .navbar-mobile-close svg {
          width: 22px;
          height: 22px;
          stroke: currentColor;
          strokeWidth: 1.8;
          fill: none;
          strokeLinecap: round;
        }
        .navbar-mobile {
          position: fixed;
          inset: 0;
          display: none;
          justify-content: flex-end;
          background: rgba(8, 21, 34, 0.42);
          backdrop-filter: blur(8px);
        }
        .navbar-mobile-open {
          display: flex;
        }
        .navbar-mobile-panel {
          width: min(100%, 360px);
          min-height: 100vh;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          background: linear-gradient(180deg, rgba(11, 24, 38, 0.98), rgba(19, 52, 79, 0.98));
          color: var(--dl-color-gray-white);
          box-shadow: -24px 0 60px -36px rgba(8, 21, 34, 0.8);
        }
        .navbar-mobile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-mobile-label {
          font-family: var(--dl-font-heading);
          font-size: 0.82rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.62);
        }
        .navbar-mobile-close {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--dl-color-gray-white);
        }
        .navbar-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .navbar-mobile-link {
          font-family: var(--dl-font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.1;
        }
        .navbar-mobile-cta {
          margin-top: auto;
        }
        @media (max-width: 991px) {
          .navbar-container {
            padding-inline: 16px;
          }
          .navbar-shell {
            grid-template-columns: minmax(0, 1fr) auto;
          }
          .navbar-links,
          .navbar-cta {
            display: none;
          }
          .navbar-toggle {
            display: inline-flex;
          }
          .navbar-brand-copy {
            display: none;
          }
        }
        @media (max-width: 479px) {
          .navbar-container {
            padding-top: 12px;
            padding-inline: 12px;
          }
          .navbar-shell {
            padding: 12px 14px;
            border-radius: 20px;
          }
          .navbar-logo {
            width: 118px;
          }
        }
      `}</style>
    </>
  )
}

NavbarContainer.defaultProps = {
  rootClassName: '',
  Heading: 'TPANA',
  image_alt: 'TPANA logo',
  image_src: '/assets/tp-logotype-horizontal.png',
  link: 'About',
  link1: 'Experience',
  link2: 'Contact',
  ctaLabel: 'Book intro call',
}

NavbarContainer.propTypes = {
  rootClassName: PropTypes.string,
  Heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  link: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  ctaLabel: PropTypes.string,
}

export default NavbarContainer
