import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        facilis dignissimos. Eligendi velit illum sunt doloremque fugiat, minus
        in cumque!
      </p>
      <button onClick={() => navigate('/subscription')}>Get Subcription</button>
    </>
  );
};

export default Home;
