import { profile } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="container py-5">
      <h2 className="mb-3 text-center">Experience</h2>

      {profile.experience.map((job, i) => (
        <article key={i} className="mb-4 text-center">
          <h3 className="h5 mb-1">{job.title} — {job.company}</h3>
          <p className="text-muted mb-2">{job.period}</p>

          
          <ul className="list-unstyled mb-0 d-inline-block text-start">
            {job.points.map((p, j) => (
              <li key={j} className="mb-1">• {p}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
export default Experience;
