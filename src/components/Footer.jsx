function Footer(){
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <span>&copy; {new Date().getFullYear()} Mohammad</span>
        <nav>
          <a className="text-white me-3" href="#home">Home</a>
          <a className="text-white me-3" href="#projects">Projects</a>
          <a className="text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
