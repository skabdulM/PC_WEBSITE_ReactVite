import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <span>
          <img
            src="../../public/icon.svg"
            alt="not found"
            style={{ width: "3em" }}
          />
        </span>
        <i className="logoWebComponent" color="light"></i>
        <ul className="nav">
          <li className="dropdown">
            <Link to="/home" className="dropbtn">
              <button className="dropbtn">
                <label className="underline">Home</label>
              </button>
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/about" className="dropbtn">
              <button className="dropbtn">
                <label className="underline">About</label>
              </button>
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/members" className="dropbtn">
              <button className="dropbtn">
                <label className="underline">Members</label>
              </button>
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/events" className="dropbtn">
              <button className="dropbtn">
                <label className="underline">Events</label>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
