import { profile } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="container py-5">
      <h2 className="mb-3">Experience</h2>

      {profile.experience.map((job, i) => (
        <article key={i} className="mb-4">
          <h3 className="h5 mb-1">
            {job.title} — {job.company}
          </h3>
          <p className="text-muted mb-2">{job.period}</p>
          <ul className="mb-0">
            {job.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
export default Experience;
