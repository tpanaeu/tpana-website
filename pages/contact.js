import { useState } from 'react'
import Site, { Arrow, ButtonLink, Label, email, linkedIn } from '../components/site'

const mailto = `mailto:${email}?subject=${encodeURIComponent('Project enquiry for TPANA')}`

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus(`Copy this address manually: ${email}`)
    }
  }

  return (
    <Site title="Contact TPANA | Discuss your project"
      description="Contact TPANA to discuss product strategy, platform modernisation or senior technology and delivery leadership." path="/contact/">
      <section className="wrap page-intro contact-layout">
        <div>
          <Label>Contact</Label>
          <h1>Tell us what <em>needs to change.</em></h1>
          <p>Planning a launch, modernising a platform or looking for senior support on a difficult programme? Send a short note about where you are and what you’d like to achieve.</p>
          <div className="actions"><ButtonLink href={mailto}>Email TPANA</ButtonLink></div>
        </div>
        <aside className="contact-panel">
          <h2>Start with a short note</h2>
          <ul>
            <li>What you want to achieve</li>
            <li>What’s holding up progress</li>
            <li>Any important dates or constraints</li>
          </ul>
          <div className="contact-details">
            <a className="text-link" href={mailto}>{email}</a>
            <button type="button" className="copy-button" onClick={copyEmail}>Copy email</button>
            <p className="copy-status" role="status">{copyStatus}</p>
          </div>
          <a className="text-link" href={linkedIn}>Connect on LinkedIn <Arrow diagonal /></a>
        </aside>
      </section>
    </Site>
  )
}
