import Site, { ButtonLink, Label } from '../components/site'

export default function NotFound() {
  return (
    <Site title="Page not found | TPANA" description="Return to the TPANA homepage to find services, experience and contact details.">
      <section className="wrap page-intro">
        <Label>404</Label>
        <h1>Page not found.</h1>
        <p>The address may have changed. You can find our services and contact details from the homepage.</p>
        <div className="actions"><ButtonLink href="/">Back to homepage</ButtonLink></div>
      </section>
    </Site>
  )
}
