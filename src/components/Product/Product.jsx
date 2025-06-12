import { useState, useEffect } from "react"
import styles from './Product.module.css'

function Product({data, cartSetter}){
  const [qtd, setQtd] = useState(1);
  const {cart, setCart} = cartSetter;

  useEffect(() => {
    if(qtd > 99){
      setQtd(99);
    }
  }, [qtd])

  function addToCart(){
    if(!cart.find(item => item.id === data.id)){
      setCart([...cart, {
        title: data.title,
        price: data.price,
        image: data.image,
        id: data.id,
        category: data.category,
        qtd: qtd
      }])
    } else {
      const idx = cart.findIndex(item => item.id === data.id);
      const copyObj = {...cart[idx]};
      copyObj.qtd = copyObj.qtd + qtd;

      const newCart = [...cart.filter(item => item.id !== data.id), copyObj]

      setCart(newCart);
    }
  }

  function handleQtd(e){
    if(e.target.value < 1){
      setQtd(1);
    } else {
      setQtd(e.target.value)
    }
  }

  function incrementQtd(){
    if(qtd < 100){
      setQtd(qtd + 1)
    }
  }

  function decrementQtd(){
    if(qtd > 1){
      setQtd(qtd - 1)
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.image} alt="product-image" width='150' height='150' />
      <p className={styles.label}>{data.title}</p>
      <div className={styles.priceBox}>
        <p className={styles.price}>${(data.price * qtd).toFixed(2)}</p>
        <div>
          <label htmlFor={'label_'+data.title}>qtd: </label>
          <input id={'label_'+data.title} type="number" value={qtd} onChange={handleQtd} className={styles.qtdInput} />
          <div className={styles.qtdBtns}>
            <button onClick={decrementQtd} className={styles.qtdBtn}>-</button>
            <button onClick={incrementQtd} className={styles.qtdBtn}>+</button>
          </div>
        </div>
        <button className={styles.addToCart} onClick={() => addToCart(data, qtd)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product