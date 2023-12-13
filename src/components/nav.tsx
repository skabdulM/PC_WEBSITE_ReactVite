import React from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div className="container gap-4">
          <div className="d-flex justify-content-between w-100">
            <img src="/Progra.png" alt="not availabe" width="45em" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-3">
              <li className="nav-item">
                <button className="dropbtn">
                  <Link to="/home">
                    <label
                      className={`underline  ${
                        location.pathname === "/home" ? "sethover" : ""
                      }`}
                    >
                      Home
                    </label>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="dropbtn">
                  <Link to="/events">
                    <label
                      className={`underline  ${
                        location.pathname === "/events" ? "sethover" : ""
                      }`}
                    >
                      Events
                    </label>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="dropbtn">
                  <Link to="/members">
                    <label
                      className={`underline  ${
                        location.pathname === "/members" ? "sethover" : ""
                      }`}
                    >
                      Members
                    </label>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="dropbtn">
                  <Link to="/about">
                    <label
                      className={`underline  ${
                        location.pathname === "/about" ? "sethover" : ""
                      }`}
                    >
                      About
                    </label>
                  </Link>
                </button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
