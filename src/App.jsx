import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'
import QuantitySelector from './QuantitySelector'
import { useProducts } from './ProductsContext'

function App() {
  // const [products, setProducts] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { handleAddItemToCart } = useCart();
  const { handleAddProducts, products } = useProducts(); 

  useEffect(() => {
      if (!products || products.length === 0) {
        console.log("Fetching new data...");
        fetch('https://fakestoreapi.com/products', { mode: "cors" })
          .then((responce) => {
            if (responce.status >= 400) {
              throw new Error('server error');
            }
            return responce.json()
          })
          .then((responce) => handleAddProducts(responce))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
  }, [handleAddProducts, products]);

  const addToCart = (item) => {
    console.log('Adding item: ' + JSON.stringify(item));
    handleAddItemToCart(item);
  };

  if (error) return <p>A network error was encoutered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Main page</h1>
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
              <button onClick={() => {addToCart(item)}}>Add to Cart</button>
              <QuantitySelector item={item} />
            </div>
          )
        })
      )} 
      <Link to="cart">View cart</Link>
    </div>
  )
}

export default App
