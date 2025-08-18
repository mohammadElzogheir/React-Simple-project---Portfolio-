import { profile } from "../data/profile";

function About() {
  return (
    <section id="about" className="container py-5" style={{ paddingTop: "92px" }}>
      <div className="row g-4 align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={profile.photo}
            alt={`${profile.name} portrait`}
            className="img-fluid rounded"
            style={{ maxWidth: 240 }}
          />
        </div>

        <div className="col-md-8">
          <h2 className="fw-bold mb-2">Hi, I’m {profile.name} 👋</h2>
          <p className="text-muted mb-2">{profile.role}</p>
          <p className="mb-3">{profile.summary}</p>

          <ul className="mb-3">
            {profile.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="border-start ps-3 fw-semibold mb-3">
            💡 “{profile.value}”
          </div>

          <div className="mb-3">
            {profile.quick.map((q, i) => (
              <span key={i} className="badge text-bg-primary me-2 mb-2">
                {q}
              </span>
            ))}
          </div>

          <div className="d-grid gap-2 d-sm-flex">
            <a
              className="btn btn-primary w-100 w-sm-auto"
              href={profile.links.cv}
              download
            >
              Download CV
            </a>

            <a
              className="btn btn-primary w-100 w-sm-auto"
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>

            <a
              className="btn btn-primary w-100 w-sm-auto"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="btn btn-primary w-100 w-sm-auto"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
