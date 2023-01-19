import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const fillFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { userName, email, password } = formData;
  const submitForm = () => {
    alert("form submitted");
    setFormData({
      userName: "",
      email: "",
      password: "",
    });
    navigate('/welcomepage')
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#ccc",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <input
          type="text"
          name="userName"
          placeholder="Username"
          autoComplete="off"
          value={formData.userName}
          onChange={fillFormData}
          style={{ margin: "0.5rem 0", width: "100%", padding: "0.8rem 1rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="off"
          value={formData.email}
          onChange={fillFormData}
          style={{ margin: "0.5rem 0", width: "100%", padding: "0.8rem 1rem" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={formData.password}
          onChange={fillFormData}
          style={{ margin: "0.5rem 0", width: "100%", padding: "0.8rem 1rem" }}
        />
        <button
          style={{
            margin: "0.5rem 0",
            padding: "0.8rem 1rem",
            cursor: "pointer",
          }}
          onClick={submitForm}
        >
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Subscription;