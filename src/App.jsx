import './App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import products from './products';
import cacheProducts from './utils/cacheProducts';

function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data only if it hasn't been fetched and cached
    if (products.length === 0) {
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then((responce) => {
        if (responce.status >= 400) {
          throw new Error('server error');
        }
        return responce.json()
      })
      .then((responce) => {
        console.log(responce);
        cacheProducts(responce);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
    } else {
      setLoading(false);
    }
  },[])

  if (error) return <p>A network error was encoutered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Main page</h1>
      <Link to="cart">View cart</Link>
    </div>
  )
}


export default App;
