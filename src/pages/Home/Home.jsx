import { Link } from "react-router-dom"
import styles from './Home.module.css';

function Home(){
  return (<>
    <div className={styles.wrapper}>
      <div className={styles.heroSection}>
        <div className={styles.left}>
          <h1 className={styles.headline}>Test Shop</h1>
          <button className={styles.link}><Link to='shop'>Shop now</Link></button>
        </div>
        <div className={styles.right}>
          <img className={styles.heroImage} src="/hero-image.png" alt="image" width='150' height='150' />
        </div>
      </div>
    </div>
  </>)
}

export default Home