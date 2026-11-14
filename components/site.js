import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const email = 'contact@tpana.eu'
export const linkedIn = 'https://www.linkedin.com/in/thodorispanagopoulos/'

const nav = [
  ['Services', '/#services'],
  ['Experience', '/experience/'],
  ['About', '/about/'],
]

export function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

export function ButtonLink({ href, children, secondary = false }) {
  const className = secondary ? 'button button-outline' : 'button'
  return href.startsWith('/')
    ? <Link href={href}><a className={className}>{children}<Arrow /></a></Link>
    : <a href={href} className={className}>{children}<Arrow diagonal /></a>
}

export function Label({ children }) {
  return <p className="label">{children}</p>
}

export function Invitation() {
  return (
    <section className="invitation">
      <div className="wrap invitation-inner">
        <div>
          <Label>Get in touch</Label>
          <h2>What needs to move forward?</h2>
          <p>Tell us what you’re trying to change and where you could use senior support.</p>
        </div>
        <ButtonLink href="/contact/">Discuss your project</ButtonLink>
      </div>
    </section>
  )
}

export default function Site({ title, description, path, children }) {
  const { pathname } = useRouter()
  const canonical = path && `https://www.tpana.eu${path}`
  const image = 'https://www.tpana.eu/assets/tpana-social.jpg'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        {canonical && <meta property="og:url" content={canonical} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/"><a className="brand" aria-label="TPANA home">
            <img src="/assets/tp-logotype-horizontal.png" width="870" height="210" alt="" />
          </a></Link>
          <nav className="site-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <Link href={href} key={href}><a aria-current={href === `${pathname}/` ? 'page' : undefined}>{label}</a></Link>
            ))}
          </nav>
          <Link href="/contact/"><a className="header-contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact <Arrow diagonal /></a></Link>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-main">
            <div className="footer-identity">
              <Link href="/"><a className="brand" aria-label="TPANA home">
                <img src="/assets/tp-logotype-horizontal.png" width="870" height="210" alt="" />
              </a></Link>
              <p>Independent technology consultancy<br />Based in Athens, working across Europe.</p>
            </div>
            <div className="footer-links">
              <Link href="/experience/"><a>Experience</a></Link>
              <Link href="/about/"><a>About TPANA</a></Link>
              <Link href="/contact/"><a>Contact</a></Link>
            </div>
            <div className="footer-links">
              <a href={`mailto:${email}`}>{email}</a>
              <a href={linkedIn}>LinkedIn <Arrow diagonal /></a>
              <a href="https://github.com/tpanagopoulos">GitHub <Arrow diagonal /></a>
            </div>
          </div>
          <div className="footer-legal">
            <span>© TPANA</span>
            <Link href="/privacy/"><a>Privacy and analytics</a></Link>
          </div>
        </div>
      </footer>
    </>
  )
}
