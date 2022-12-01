import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbHeart, TbShoppingCart } from "react-icons/tb";

const Navbar = () => {
  return (
    <header className="container my-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary rounded-5 shadow px-5">
        <Link className="navbar-brand" to="/">
          mini project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/top-rated">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {/* <div>
            <button className="btn rounded-5 border-0">
              <TbHeart size={20} className="text-light mx-2" />
            </button>
            <button className="btn rounded-5 border-0">
              <TbShoppingCart size={20} className="text-light mx-2" />
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
