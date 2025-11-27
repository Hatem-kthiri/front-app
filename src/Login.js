import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userLogged = localStorage.getItem("token");
    if (userLogged) {
      navigate("/");
    }
  }, []);

  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const saveToLocal = (token) => {
    localStorage.setItem("token", token);
  };
  const handleLogin = () => {
    axios
      .post("backend-app-knhq.onrender.com/api/login", login)
      .then((res) => {
        alert(res.data.message);
        saveToLocal(res.data.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="your email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="your password"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleLogin}>Submit</button>
      </div>
    </>
  );
};

export default Login;
