import { profile } from "../data/profile";

function Education() {
  return (
    <section id="education" className="container py-5">
      <h2 className="mb-3">Education</h2>
      <ul className="list-group">
        {profile.education.map((e, i) => (
          <li key={i} className="list-group-item">
            <div className="fw-semibold">{e.degree} — {e.school}</div>
            <div className="text-muted">{e.period}</div>
            {e.note && <div className="small mt-1">{e.note}</div>}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Education;
