import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eaque laboriosam placeat aliquam dolorem sit maiores iste eveniet officiis consequatur.</p>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default About;