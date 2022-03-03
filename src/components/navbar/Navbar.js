import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isOpen, closeNavbar }) {
  return (
    <nav className={`navbar ${isOpen && "active"}`}>
      <div>
        <h1>Games</h1>
      </div>
      <ul>
        <li>
          <Link to="/alien-isolation" className="link" onClick={closeNavbar}>
            Alien Isolation
          </Link>
        </li>
        <li>
          <Link to="/antichamber" className="link" onClick={closeNavbar}>
            Antichamber
          </Link>
        </li>
        <li>
          <Link
            to="/a-story-about-my-uncle"
            className="link"
            onClick={closeNavbar}
          >
            A Story About My Uncle
          </Link>
        </li>
        <li>
          <Link to="/bioshock" className="link" onClick={closeNavbar}>
            Bioshock
          </Link>
        </li>
        <li>
          <Link to="/bioshock-2" className="link" onClick={closeNavbar}>
            Bioshock 2
          </Link>
        </li>
        <li>
          <Link to="/bioshock-infinite" className="link" onClick={closeNavbar}>
            Bioshock Infinite
          </Link>
        </li>
        <li>
          <Link to="/conarium" className="link" onClick={closeNavbar}>
            Conarium
          </Link>
        </li>
        <li>
          <Link to="/draugen" className="link" onClick={closeNavbar}>
            Draugen
          </Link>
        </li>
        <li>
          <Link to="/firewatch" className="link" onClick={closeNavbar}>
            Firewatch
          </Link>
        </li>
        <li>
          <Link to="/impostor-factory" className="link" onClick={closeNavbar}>
            Impostor Factory
          </Link>
        </li>
        <li>
          <Link to="/life-is-strange" className="link" onClick={closeNavbar}>
            Life Is Strange
          </Link>
        </li>
        <li>
          <Link to="/little-nightmares" className="link" onClick={closeNavbar}>
            Little Nightmares
          </Link>
        </li>
        <li>
          <Link to="/outlast" className="link" onClick={closeNavbar}>
            Outlast
          </Link>
        </li>
        <li>
          <Link
            to="/return-of-the-obra-dinn"
            className="link"
            onClick={closeNavbar}
          >
            Return Of The Obra Dinn
          </Link>
        </li>
        <li>
          <Link to="/sea-of-solitude" className="link" onClick={closeNavbar}>
            Sea Of Solitude
          </Link>
        </li>
        <li>
          <Link to="/the-town-of-light" className="link" onClick={closeNavbar}>
            The Town Of Light
          </Link>
        </li>
        <li>
          <Link
            to="/the-vanishing-of-ethan-carter"
            className="link"
            onClick={closeNavbar}
          >
            The Vanishing Of Ethan Carter
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
