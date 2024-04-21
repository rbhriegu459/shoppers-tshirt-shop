import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import { useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  const add = (prod) =>{
    setProducts((prev) => {
      return [...prev, prod];
    });
  }
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addProduct" element={<AddProduct add={add}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
