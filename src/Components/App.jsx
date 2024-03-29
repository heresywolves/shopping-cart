import './App.css'
import { useContext, useEffect, useState } from 'react';
import products from '../products';
import cacheProducts from '../utils/cacheProducts';
import ProductCard from './ProductCard';
import { ShopContext } from '../Context/ShopContext';
import Header from './Header';

function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { populateCartStructure } = useContext(ShopContext);

  useEffect(() => {
    // Fetch data only if it hasn't been fetched and cached
    if (products.length === 0) {
      console.log('Cache is empty. Fetching product data...');
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then((responce) => {
        if (responce.status >= 400) {
          throw new Error('server error');
        }
        return responce.json()
      })
      .then((responce) => {
        // console.log(responce);
        cacheProducts(responce);
        populateCartStructure(responce);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
    } else {
      setLoading(false);
    }
  },[populateCartStructure])

  if (error) {
    console.log(error);
    return <p>A network error was encoutered</p>
  }
  if (loading) return <p className='loading-text'>Loading...</p>;

  return (
    <div>
      <Header linkUrl={'cart'}/>
      <h1>Catalog</h1>
      <div className='products-container'>
        {products.map((item) => {
          return (
            <ProductCard key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}


export default App;
