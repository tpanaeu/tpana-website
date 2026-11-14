import Link from 'next/link'
import Site, { Arrow, ButtonLink, Invitation, Label } from '../components/site'
import { services, experience } from '../components/offer'

export default function Home() {
  return (
    <Site
      title="TPANA | Technology leadership for complex digital change"
      description="TPANA is an independent technology consultancy for organisations navigating complex digital change. Product strategy, platform modernisation and embedded leadership."
      path="/"
    >
      <section className="home-hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Label>Independent technology consultancy</Label>
            <h1>Technology leadership for <em>complex change.</em></h1>
            <p>TPANA helps organisations decide what to build, modernise critical platforms and lead delivery through launch.</p>
            <div className="actions">
              <ButtonLink href="/contact/">Discuss your project</ButtonLink>
              <Link href="/experience/"><a className="text-link">Explore our work <Arrow /></a></Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src="/assets/technology-leadership.webp" alt="" width="1400" height="1050" />
          </div>
        </div>
        <div className="wrap sectors">
          <p>Sector experience</p>
          <ul>
            <li>Financial services</li><li>Insurance</li><li>Telecommunications</li><li>Public services</li>
          </ul>
        </div>
      </section>

      <section className="section wrap" id="services" aria-labelledby="services-heading">
        <div className="section-heading">
          <Label>Services</Label>
          <h2 id="services-heading">The right support for your next decision.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ title, question, description, scope, icon }) => (
            <article className="service" key={title}>
              <span className={`service-icon ${icon}`} aria-hidden="true"><i /><i /><i /></span>
              <h3>{title}</h3>
              <p className="service-question">{question}</p>
              <p>{description}</p>
              <p className="service-scope">{scope}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section">
        <div className="wrap section">
          <div className="section-heading heading-row">
            <div><Label>Selected experience</Label><h2>Where we’ve done the work.</h2></div>
            <Link href="/experience/"><a className="text-link">See all experience <Arrow /></a></Link>
          </div>
          <div className="work-list">
            {experience.map(({ sector, title, anchor }) => (
              <Link key={anchor} href={`/experience/#${anchor}`}><a className="work-row">
                <span className="work-sector">{sector}</span>
                <span className="work-title">{title}</span>
                <Arrow diagonal />
              </a></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section partner">
        <div><Label>About TPANA</Label><h2>Work directly with the people leading delivery.</h2></div>
        <div>
          <p>Founded by Thodoris Panagopoulos, TPANA brings product, architecture and delivery leadership into the same conversation. We work alongside your team, from the first decision through to release and handover.</p>
          <Link href="/about/"><a className="text-link">Meet the founder <Arrow /></a></Link>
        </div>
      </section>
      <Invitation />
    </Site>
  )
}
