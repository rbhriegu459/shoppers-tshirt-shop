import classes from "./Header.module.css";
import cart from "../../assests/cart.png";

function Header() {
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
        <button className={classes.cartBtn}>
          <img src={cart} className={classes.cartImage} />
          <span className={classes.cartSpan}> Cart </span>
          <h4>(0)</h4>
        </button>
      </div>
    </nav>
  );
}

export default Header;
