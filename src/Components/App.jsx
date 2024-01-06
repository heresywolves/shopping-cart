import './App.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import products from '../products';
import cacheProducts from '../utils/cacheProducts';
import ProductCard from './ProductCard';
import { ShopContext } from '../Context/ShopContext';

function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { populateCartStructure } = useContext(ShopContext);

  useEffect(() => {
    // Fetch data only if it hasn't been fetched and cached
    if (products.length === 0) {
      console.log('Cache is empty. Fetching product data...');
      fetch('https://fakestoreapi.com/products?limit=3', { mode: "cors" })
      .then((responce) => {
        if (responce.status >= 400) {
          throw new Error('server error');
        }
        return responce.json()
      })
      .then((responce) => {
        console.log(responce);
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
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Main page</h1>
      <Link to="cart">View cart</Link>
      {products.map((item) => {
        return (
          <ProductCard key={item.id} item={item} />
        )
      })}
    </div>
  )
}


export default App;
