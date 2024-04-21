import { useState } from "react";
import classes from "./AddProduct.module.css";
import Products from "../Products/Products";

function AddProduct({add , products, addToCart}) {

  const [tshirtName, setTshirtName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [lQuantity, setLQuantity] = useState(0);
  const [mQuantity, setMQuantity] = useState(0);
  const [sQuantity, setSQuantity] = useState(0);

  function handleSubmit(e){
    e.preventDefault();

    add({tshirtName, description, price, lQuantity, mQuantity, sQuantity});

    setTshirtName("");
    setDescription("");
    setPrice(0);
    setLQuantity(0);
    setMQuantity(0);
    setSQuantity(0);
  }

  return (
    <div>
      <div className={classes.mainDiv}>
      <form onSubmit={handleSubmit}>
        <label>
          T-shirt Name-
          <input type="text" className={classes.inputDetails} value={tshirtName} onChange={(e) => setTshirtName(e.target.value)}/>
        </label>

        <label>
          Description-
          <input type="decription" className={classes.inputDetails} value={description} onChange={(e) => setDescription(e.target.value) }/>
        </label>

        <label>
          Price- <input type="number" className={classes.inputDetails} value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        <div className={classes.quantity}>
          <h3>Quantities- </h3>
          <div>
            <label>
              L
              <input type="number" className={classes.quantities} value={lQuantity} onChange={(e) => setLQuantity(e.target.value)}/>
            </label>

            <label>
              M <input type="number" className={classes.quantities} value={mQuantity} onChange={(e) => setMQuantity(e.target.value)}/>
            </label>

            <label>
              S
              <input type="number" className={classes.quantities} value={sQuantity} onChange={(e) => setSQuantity(e.target.value)}/>
            </label>
          </div>
        </div>

        <button type="submit"className={classes.submitBtn}> Add Product</button>
      </form>
    </div>

    <Products products={products} addToCart={addToCart}/>
    </div>
  );
}

export default AddProduct;
