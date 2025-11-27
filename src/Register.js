import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [newUser, setNewUser] = useState({});
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    const userLogged = localStorage.getItem("token");
    if (userLogged) {
      navigate("/");
    }
  }, []);
  const handleRegisterUser = () => {
    axios
      .post("backend-app-knhq.onrender.com/api/register", newUser)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="your username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="your email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="your password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleRegisterUser}>Register</button>
      </div>
    </>
  );
};

export default Register;
