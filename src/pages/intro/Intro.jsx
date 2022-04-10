import "./intro.css";

const Intro = () => {
  return (
    <div className="intro" id="home">
      <div className="logo">Forezon Investment</div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#home"> Home</a>
          </li>
          <li>
            <a href="#team"> Team</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
          <li>
            <a href="/register"> Sign up</a>
          </li>
        </ul>
      </div>
      <div className="talk">LET'S TALK BUSINESS</div>
      <a className="contact" href="#contact">
        Contact Us
      </a>
    </div>
  );
};

export default Intro;
