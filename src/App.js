import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import { useState } from "react";
import Products from "./components/Products/Products";
import Cart from './components/Cart/Cart.js';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) =>{
    setTotalPrice((prev) => {
      return Number(prev) + Number(item.price);
    })
    setCartItems((prev) => {
      return [...prev, item];
    })
  }

  const add = (prod) => {
    setProducts((prev) => {
      return [...prev, prod];
    });
  };

  return (
    <BrowserRouter>
      <Header setCartVisible ={setCartVisible} noOfItems={cartItems}/>
      {cartVisible && (
          <Cart cartItems={cartItems} setCartVisible={setCartVisible} setCartItems={setCartItems} totalPrice={totalPrice}/>
        )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addProduct" element={<AddProduct add={add} products={products} addToCart={addToCart}/>}></Route>
        <Route
          path="/products"
          element={<Products products={products} addToCart={addToCart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
