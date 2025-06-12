import styles from './Header.module.css';
import { useState } from 'react';

function Header({pageMonitor}){
  const {path, setPath} = pageMonitor;

  function switchToPage(page){
    setPath(page)
  }

  return (<>
    <header className={styles.container}>
      <div className={styles.logo}>
        Test Shop
        <img src="/shopping-bag.png" alt="logo" width='32' height='32'/>
      </div>

      <ul className={styles.links + ' ' + styles.fadeIn}>
        <li>
          <button className={styles.button} onClick={() => switchToPage('shop')}>
            <span className={path === 'shop' ? styles.selectedSection : ''}>Shop</span>
            <img src="/shopping-bag.png" alt="" width='16' height='16' />
          </button>
        </li>
        <li>
          <button className={styles.button} onClick={() => switchToPage('cart')}>
            <span className={path === 'cart' ? styles.selectedSection : ''}>Cart</span>
            <img src="/shopping-cart.png" alt="" width='16' height='16' />
          </button>
        </li>
      </ul>
    </header>
  </>)
}

export default Header