import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

/* Css */
import "../../styles/components/ui/ProductCards.css"


const ProductCards = ({product}) => {

  const originalPrice = product.price;
  const discountedPrice = Math.round(originalPrice * (1 - product.discountRate / 100));

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({...product, quantity:1 });
  };
  
  return (
    <div className='product-card'>
      <div className="product-image">
        <Link to={`/${product.category}/${product.id}`}>
          <img src={product.imageUrl} alt="" />
        </Link>
        <ul className='product-button'>
          <li>
            <button className='cart-button' onClick={handleAddToCart}>
              <img src="/assets/images/cart-button.png" alt="Cart-Button" />
            </button>
          </li>
          <li>
            <button className='like-button'>
              <img src="/assets/images/like-button.png" alt="Like-Button" />
            </button>
          </li>
        </ul>    
      </div>
      <div className="product-info">
        <h2>
          <Link to={`/${product.category}/${product.id}`}>{product.name}</Link>
        </h2>
        <p>{product.description}</p>
        <div className="product-price">
          <p className='original-price'>{originalPrice.toLocaleString()}원</p>
          <div className="current-price">
            <span className='discount-rate'>{product.discountRate}%</span>
            <span className='discounted-price'>
              {discountedPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCards