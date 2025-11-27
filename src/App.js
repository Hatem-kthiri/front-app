import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./Components/Header/Header";
import EmployeList from "./Components/EmployeList/EmployeList";
import Product from "./Components/Product/Product";
import FullName from "./Components/FullName/FullName";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
function App() {
  return (
    <div>
      {/* <Header />
      <EmployeList />
      <Product />
      <FullName /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
