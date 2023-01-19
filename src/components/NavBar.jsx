import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          backgroundColor: "#111",
          padding: "1rem",
        }}
      >
        <li
          style={{
            marginLeft: "1rem",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Home
          </NavLink>
        </li>
        <li
          style={{
            marginLeft: "1rem",
          }}
        >
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            About
          </NavLink>
        </li>
        <li
          style={{
            marginLeft: "1rem",
          }}
        >
          <NavLink
            to="/products"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Products
          </NavLink>
        </li>
        <li
          style={{
            marginLeft: "1rem",
          }}
        >
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
