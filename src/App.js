import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import { useState } from "react";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([
    {
      tshirtName: "gucci",
      description: "cotton",
      price: 0,
      lQuantity: 0,
      mQuantity: 0,
      sQuantity:0,
    },
  ]);

  const add = (prod) => {
    setProducts((prev) => {
      return [...prev, prod];
    });
  };
  console.log(products);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addProduct" element={<AddProduct add={add} products={products} />}></Route>
        <Route
          path="/products"
          element={<Products products={products}/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
