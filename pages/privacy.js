import Site, { Label, email } from '../components/site'

export default function Privacy() {
  return (
    <Site title="Privacy and analytics | TPANA"
      description="How TPANA uses optional website analytics and handles email enquiries." path="/privacy/">
      <section className="wrap page-intro">
        <Label>Privacy</Label>
        <h1>Privacy and analytics.</h1>
      </section>
      <section className="work-section">
        <div className="wrap section policy">
          <article>
            <h2>Optional analytics</h2>
            <p>When enabled for this site, Microsoft Clarity loads only after you choose to allow analytics. You can browse the site without accepting. A first-party cookie stores your choice for up to 180 days.</p>
            {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && <button className="button button-outline" type="button" id="analytics-preference" onClick={() => window.dispatchEvent(new Event('tpana:analytics-settings'))}>Change analytics preference</button>}
          </article>
          <article>
            <h2>Email enquiries</h2>
            <p>Email links open your email application. TPANA uses the information you send by email to respond to your enquiry.</p>
          </article>
          <article>
            <h2>Contact</h2>
            <p>For privacy questions, email <a href={`mailto:${email}`}>{email}</a>.</p>
          </article>
        </div>
      </section>
    </Site>
  )
}
