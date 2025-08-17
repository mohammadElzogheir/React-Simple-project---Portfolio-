import { profile } from "../data/profile";

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-3">Projects</h2>
      <div className="row g-3">
        {profile.projects.map((pr, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5">{pr.name}</h3>
                <p className="text-muted">{pr.tagline}</p>

                {pr.stack?.length > 0 && (
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {pr.stack.map((s, k) => (
                      <span key={k} className="badge text-bg-secondary">{s}</span>
                    ))}
                  </div>
                )}

                {pr.link && (
                  <a
                    href={pr.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
