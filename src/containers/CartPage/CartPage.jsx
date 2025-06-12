import { useEffect } from "react";
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import styles from './CartPage.module.css';

function CartPage({cartSetter}){
  const {cart, setCart} = cartSetter;

  return (
    <div className={styles.cartWindow}>
      <ShoppingCart cartSetter={{cart, setCart}} />
    </div>
  )
}

export default CartPage