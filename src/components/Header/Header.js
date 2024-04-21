import classes from "./Header.module.css";
import cart from "../../assests/cart.png";

function Header() {
  return (
    <nav className={classes.nav}>
      <div className={classes.heading}>
        <h2 className={classes.headRed}>Shoppers</h2>
        <h2>Shop</h2>
      </div>

      <button className={classes.cartBtn}>
        <img src={cart} className={classes.cartImage} />
        <span className={classes.cartSpan}>Cart</span>
      </button>
    </nav>
  );
}

export default Header;
