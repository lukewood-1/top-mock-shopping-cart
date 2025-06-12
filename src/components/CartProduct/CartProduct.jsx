import styles from './CartProduct.module.css'

function CartProduct({data, cartSetter}){
  const {cart, setCart} = cartSetter;

  function incrementQtd(){
    const target = cart.find(item => item.id === data.id);
    const copyObj = target;
    copyObj.qtd++;

    setCart([...cart.filter(item => item.id !== data.id), copyObj])
  }

  function decrementQtd(){
    if(data.qtd > 1){
      const target = cart.find(item => item.id === data.id);
      const copyObj = target;
      copyObj.qtd--;

      setCart([...cart.filter(item => item.id !== data.id), copyObj])
    }
  }

  function removeFromCart(){
    setCart([...cart].filter(item => item.id !== data.id))
  }

  return (
    <div className={styles.container}>
      <img src={data.image} alt="img" width='50' height='75' />
      <div>
        <h3>{data.title}</h3>
        <div className={styles.data}>
          <div className={styles.utds}>
            <p>Price: ${data.price.toFixed(2)}</p>
            <p>Qtd: {data.qtd}</p>
            <div className={styles.qtdBtns}>
              <button className={styles.btn} onClick={decrementQtd}>-</button>
              <button className={styles.btn} onClick={incrementQtd}>+</button>
            </div>
          </div>
          <div className={styles.right}>
            <p>Subtotal: {(data.price * data.qtd).toFixed(2)}</p>
            <button className={styles.btn} onClick={() => removeFromCart()}>remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct