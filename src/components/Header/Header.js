import classes from "./Header.module.css";
import cart from "../../assests/cart.png";

function Header({setCartVisible, noOfItems}) {
  return (
    <nav className={classes.nav}>
      <div className={classes.heading}>
        <h2 className={classes.headRed}>Shoppers</h2>
        <h2>Shop</h2>
      </div>

      <div className={classes.navLinks}>
        <a href="/">Home</a>
        <a href="addProduct">Add Product</a>
        <a href="products">Products</a>
        <button className={classes.cartBtn} onClick={() => setCartVisible(true)}>
          <img src={cart} className={classes.cartImage} />
          <span className={classes.cartSpan}> Cart </span>
          <h4>({noOfItems.length})</h4>
        </button>
      </div>
    </nav>
  );
}

export default Header;
