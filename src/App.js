import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./Components/Header/Header";
import EmployeList from "./Components/EmployeList/EmployeList";
import Product from "./Components/Product/Product";
function App() {
  return (
    <div>
      <Header />
      <EmployeList />
      <Product />
    </div>
  );
}

export default App;
