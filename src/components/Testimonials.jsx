import { profile } from "../data/profile";

function Testimonials() {
  return (
    <section id="testimonials" className="container py-5">
      <h2 className="mb-3">Testimonials</h2>
      <div className="row g-3">
        {profile.testimonials.map((t, i) => (
          <div className="col-md-6" key={i}>
            <blockquote className="border rounded p-3 bg-white">
              “{t.text}” — <span className="text-muted">{t.author}</span>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
