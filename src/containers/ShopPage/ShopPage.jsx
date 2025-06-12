import ProductWindow from '../ProductWindow/ProductWindow'
import { useState, useEffect } from 'react';
import styles from './ShopPage.module.css';

function ShopPage({data, cartSetter}){
  const [filtered, setFiltered] = useState(data);
  const [needsChange, setNeedsChange] = useState(true);
  const [categories, setCategories] = useState(initCategories());
  const [filter, setFilter] = useState(false);

  function toggleFilter(){
    setFilter(!filter);
  }

  // Gather categories from products
  function initCategories(){
      const diff = [];

      for(let item of data){
        if(!diff.includes(item.category)){
          diff.push(item.category)
        }
      };

      return {items: diff, selected: diff}
  }

  // Filter products by category
  useEffect(() => {
    if(needsChange){
      console.log('Filtering categories...');

      const filteredItems = data.filter(item => categories.selected.includes(item.category));

      setFiltered(filteredItems);
      setNeedsChange(false)
    }
    
  }, [needsChange]);

  function handleCategorySelect(e){
    console.log('value is ', e.target.checked, '\n selected: ', categories.selected)

    if(!e.target.checked){
      setCategories(prev => ({
        items: prev.items,
        selected: prev.selected.filter(item => item !== e.target.value),
      }));
      setNeedsChange(true);
    } else {
      setCategories(prev => ({
        items: prev.items,
        selected: [...prev.selected, e.target.value]
      }))
      setNeedsChange(true);
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.hero}>
        <div className={styles.left}>
          <h2>Shop page</h2>
          <p>{data.length} product{data.length > 1 && 's'}.
            <br />
            {categories.items.length} categor{categories.items.length === 1 ? 'y' : 'ies'}.
            <br />
            Come shop!</p>
        </div>

        <div className={styles.categoriesWrapper}>
          <button onClick={toggleFilter} className={styles.filterBtn}>Filter categories{categories.items.length !== categories.selected.length && <span className={styles.filterWarning}> (In use)</span>}</button>

          <div className={styles.categories + (filter ? ' ' + styles.shown : '')}>
            {categories.items.map(item => 
              <span className={styles.categoryItem} key={item}>
                <label className={styles.label} htmlFor={'input-'+item}> {item} </label>
                <input id={'input-'+item} type="checkbox" checked={categories.selected.includes(item)} value={item} onChange={handleCategorySelect} />
              </span>
            )}
          </div>

        </div>
      </div>


      <ProductWindow 
        data={filtered} 
        cartSetter={cartSetter}
      />

    </div>
  )
}

export default ShopPage