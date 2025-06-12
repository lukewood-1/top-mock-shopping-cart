import Product from '../../components/Product/Product'
import styles from './ProductWindow.module.css'

function ProductWindow({data, cartSetter}){
    const categories = (() => {
        const result = [];

        for(let item of data){
            if(!result.includes(item.category)){
                result.push(item.category)
            }
        }

        return result
    })();



    return (<>
        <div className={styles.grid}>
            {data.length === 0 
                ? <p className={styles.emptyGrid}>When you enable categories of products to show, they'll show up here.</p>
                : <div className="productSection">
                    {categories.map( i => 
                        <div className={styles.productSection} key={i}>
                            <h2 className={styles.categoryTitle}>{i}</h2>
                            <div className={styles.grid}>
                                {data
                                    .filter(j => j.category === i)
                                    .map(product => <Product key={product.id} data={product} cartSetter={cartSetter} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
        </>)
}

export default ProductWindow