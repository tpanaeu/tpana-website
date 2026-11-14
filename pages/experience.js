import Site, { Invitation, Label } from '../components/site'
import { experience } from '../components/offer'

export default function Experience() {
  return (
    <Site title="Selected experience | TPANA"
      description="Explore TPANA’s experience in regulated fintech, telecommunications and digital public services." path="/experience/">
      <section className="wrap page-intro">
        <Label>Selected experience</Label>
        <h1>Digital change in <em>complex sectors.</em></h1>
        <p>Examples of product, architecture and delivery work where customer needs, regulation and existing systems all shaped the result.</p>
      </section>
      <section className="work-section">
        <div className="wrap section cases">
          {experience.map(({ sector, title, description, anchor }) => (
            <article className="case" id={anchor} key={anchor}>
              <Label>{sector}</Label>
              <div><h2>{title}</h2><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <Invitation />
    </Site>
  )
}
