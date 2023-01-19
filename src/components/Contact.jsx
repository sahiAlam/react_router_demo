import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet
        repudiandae exercitationem quisquam sint veritatis sequi eius voluptates
        nisi ipsam.
      </p>
      <h3>Nested Routing Example</h3>
      <Link to="business">Business</Link> <br />
      <Link to="library">Library</Link> <br />
      <Link to="faculty">Faculty</Link> <br />
      <Outlet />
    </>
  );
};

export default Contact;