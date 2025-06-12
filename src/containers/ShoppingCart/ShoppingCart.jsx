import CartProduct from '../../components/CartProduct/CartProduct'
import styles from './ShoppingCart.module.css'
import { useEffect } from 'react';

function ShoppingCart({cartSetter}){
  const {cart, setCart} = cartSetter;

  const total = () => {
    let total = 0;

    for(let i of cart){
      total += (i.price * i.qtd);
    }

    return '$' + total.toFixed(2);
  }

  return (
    <div className={styles.cart}>
      <h3 className={styles.total}>Total: {total()}</h3>
      <h2 className={styles.headline}>Your cart</h2>
      <div className={styles.productsWrapper}>
        {
          cart.length === 0
          ? <p>When you add products to your cart, they will appear here ;)</p>
          : cart.map(product => <CartProduct key={product.id} data={product} cartSetter={cartSetter} />)
        }
      </div>
    </div>
  )
}

export default ShoppingCart