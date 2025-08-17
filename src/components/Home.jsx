import { profile } from '../data/profile';

function Home() {
  const { photo, links } = profile;

  return (
    <section id="home" className="container py-5">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page</p>

      <img
        src={photo}
        alt="profile"
        style={{ width: '200px', height: 'auto', borderRadius: '10px' }}
      />

      <div className="d-flex gap-2 mt-3">
        
        <a
          href={links.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View CV
        </a>

        
        <a
          href={links.cv}
          download
          className="btn btn-outline-primary"
        >
          Download CV
        </a>

        </div>
    </section>
  );
}

export default Home;
