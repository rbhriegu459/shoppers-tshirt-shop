import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  function handleGoBack() {
    props.setCartVisible(false);
  }

  function onClear() {
    props.setCartItems([]);
  }

  return (
    <Modal>
      <ul>
        {props.cartItems.length > 0 ? (
          props.cartItems.map((item, index) => (
            <li key={index}>
              {item.tshirtName} {item.description} {item.price}
            </li>
          ))
        ) : (
          <h2>Cart is Empty! :(</h2>
        )}
      </ul>
      <div>Total Price : Rs.{props.totalPrice}</div>
      <div>
        <button onClick={onClear}>Clear</button>
        <button onClick={handleGoBack}>Back</button>
      </div>
    </Modal>
  );
}

export default Cart;
