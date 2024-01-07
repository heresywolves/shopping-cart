import './ProductCard.css'
import AddToCartButton from './AddToCartButton';

function ProductCard({item}) {
  return (
    <div className="product-card" key={item.id}>
      <img src={item.image} alt={item.title + ' image'} />
      <h3>{item.title}</h3>
      <div className='sub-container'>
        <p className='rating'>{'Rating: ' + item.rating.rate}</p>
        <p className='category'>{item.category}</p>
      </div>
      <p className='price'><b>${item.price}</b></p>
      <p className='description'>{item.description}</p>
      <AddToCartButton itemId={item.id} />
    </div>
  )
}

export default ProductCard;