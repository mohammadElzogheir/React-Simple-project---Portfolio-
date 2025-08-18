
export default function Home() {
  return (
    <section id="home" className="hero-wrap text-center py-5">
      <div className="container">
        <h1 className="display-5 fw-bold mb-2">Welcome to My Portfolio</h1>
        <p className="text-muted mb-4">This is the home page</p>

        <div className="d-flex justify-content-center gap-2">
          <a href="#about" className="btn btn-primary">About me</a>
          <a href="#projects" className="btn btn-outline-primary">Projects</a>
        </div>
      </div>
    </section>
  );
}
