import shopping from '../../assests/shop.jpg';
import classes from './Home.module.css';
function Home(){
    return(
        <div className={classes.home}>
            <img src={shopping} alt='shopping' className={classes.shopping}/>
            <h1 className={classes.shopText }>SHOP THE ITEM IN <br></br> 20% Discount</h1>
        </div>
    )
}

export default Home;