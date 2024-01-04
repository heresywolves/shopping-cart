import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then((responce) => {
        if (responce.status >= 400) {
          throw new Error('server error');
        }
        return responce.json()
      })
      .then((responce) => setProducts(responce))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encoutered</p>;
  if (loading) return <p>Loading...</p>;

  if (products) console.log('Products:', products);
  return (
    <div>
      Main page
      {products && (
        products.map((item) => {
          return (
            <div key={item.id} className='item-card'>
              <p className='item-title'>{item.title}</p>
              <p className='item-category'>{item.category}</p>
              <p className='item-description'>{item.description}</p>
              <img className='item-image' width='100px' src={item.image} />
              <p className='item-price'>{'$' + item.price}</p>
              <p className='item-rating'>{'Rating: ' + item.rating.rate}</p>
            </div>
          )
        })
      )} 
      <Link to="cart">View cart</Link>
    </div>
  )
}

export default App
