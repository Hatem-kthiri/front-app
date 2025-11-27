import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
