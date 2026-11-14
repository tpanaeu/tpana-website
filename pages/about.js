import Site, { Arrow, Invitation, Label, linkedIn } from '../components/site'

export default function About() {
  return (
    <Site title="About TPANA | Founder-led technology consultancy"
      description="Meet Thodoris Panagopoulos and learn how TPANA works alongside leaders and teams on complex digital programmes." path="/about/">
      <section className="wrap page-intro">
        <Label>About TPANA</Label>
        <h1>Senior expertise, <em>working alongside your team.</em></h1>
        <p>TPANA is an independent technology consultancy based in Athens. We help leadership teams make difficult product and technology decisions and give delivery teams a clear way to act on them.</p>
      </section>
      <section className="work-section">
        <div className="wrap section founder">
          <div className="founder-mark"><img src="/assets/tp-mark.png" alt="" width="290" height="185" /></div>
          <div>
            <Label>Founder</Label>
            <h2>Thodoris Panagopoulos</h2>
            <p>Thodoris founded TPANA to bring product strategy, software architecture and delivery leadership together. His experience spans financial services, insurance, telecommunications and public services.</p>
            <a className="text-link" href={linkedIn}>Connect on LinkedIn <Arrow diagonal /></a>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading"><Label>How we work</Label><h2>From the first decision to handover.</h2></div>
        <ol className="process-list">
          <li><h3>Agree on the outcome</h3><p>Clarify what needs to change, who owns the decisions and which constraints will shape the work.</p></li>
          <li><h3>Set a delivery path</h3><p>Work through the product, architecture and operating choices together. Agree on what to test or release first.</p></li>
          <li><h3>Build with your team</h3><p>Review progress and risks as the work moves forward. Document decisions and give your team what it needs to own the service.</p></li>
        </ol>
      </section>
      <Invitation />
    </Site>
  )
}
