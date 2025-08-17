import { profile } from "../data/profile";

function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="mb-3">Skills</h2>
      <div className="d-flex flex-wrap gap-2">
        {profile.skills.map((s, i) => (
          <span key={i} className="badge text-bg-primary me-1 mb-2">{s}</span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
