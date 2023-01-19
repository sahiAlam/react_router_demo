import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>404 Error!</h1>
      <p>Page not found</p>
      <Link to="/">Go to home</Link>
    </>
  );
};

export default PageNotFound;