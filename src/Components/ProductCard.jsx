import './ProductCard.css'

function ProductCard({item}) {
  return (
    <div className="product-card" key={item.id}>
      <img src={item.image} alt={item.title + ' image'} />
      <h3>{item.title}</h3>
      <p>{item.category}</p>
      <p><b>{item.price}</b></p>
      <p>{item.description}</p>
      <p>{'Rating: ' + item.rating.rate}</p>
    </div>
  )
}

export default ProductCard;