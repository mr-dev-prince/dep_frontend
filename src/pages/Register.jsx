import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      await axios.post("https://dep-backend-buk6.onrender.com/api/v1/user/register", {
        name,
        email,
        password,
      });
      alert("User Created successfully :)");
    } catch (error) {
      console.log(
        "Error while submitting the user register credentials!",
        error
      );
      alert("Couldn't Register!");
    }
  };
  return (
    <div className="w-96 p-2 rounded-xl">
      <form
        className="flex flex-col p-4 gap-10 rounded-lg shadow-xl shadow-slate-200"
        action="register"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-serif text-3xl ">Register</h1>
        <input
          className="inputBox"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          id="name"
          required
        />
        <input
          className="inputBox"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          id="email"
          required
        />
        <input
          className="inputBox"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          id="password"
          required
        />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
