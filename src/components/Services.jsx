import { profile } from "../data/profile";

function Services() {
  return (
    <section id="services" className="container py-5">
      <h2 className="mb-3">Services</h2>
      <div className="row g-3">
        {profile.services.map((s, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3 h-100">
              <h6 className="fw-semibold mb-1">{s.title}</h6>
              <p className="mb-0 text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
