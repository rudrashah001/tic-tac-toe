import { useState } from "react";

function Navbar({ scrollTo, refs }) {
  const [open, setOpen] = useState(false);

  const go = (ref) => {
    scrollTo(ref);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <button onClick={() => go(refs.homeRef)}>Home</button>
        <button onClick={() => go(refs.aboutRef)}>About</button>
        <button onClick={() => go(refs.skillsRef)}>Skills</button>
        <button onClick={() => go(refs.projectsRef)}>Projects</button>
        <button onClick={() => go(refs.certRef)}>Certificates</button>
        <button onClick={() => go(refs.contactRef)}>Contact</button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;





