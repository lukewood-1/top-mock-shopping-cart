import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShopPage from "../../containers/ShopPage/ShopPage";
import CartPage from "../../containers/CartPage/CartPage";
import Header from "../../components/Header/Header";


function Shop(){
  const portfolio = useLoaderData();
  const [cart, setCart] = useState([]);
  const [path, setPath] = useState('shop');

  return (<>
    <Header pageMonitor={{path, setPath}} />
    {
      path === 'shop'
      ? <ShopPage data={portfolio} cartSetter={{cart, setCart}} />
      : path === 'cart'
      ? <CartPage cartSetter={{cart, setCart}} />
      : null
    }
  </>)
}

export default Shop