import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';

import { TfiPlus, TfiMinus } from "react-icons/tfi";

/* json 파일 불러오기 */
import products from '../components/data/products.json'

/* Css */
import "../styles/pages/ProductDetailPage.css"

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const { addToCart } = useContext(CartContext);

  /* 상품 가격 */
  const originalPrice = product.price; //원가
  const discountedPrice = Math.round(originalPrice * (1 - product.discountRate / 100)); //할인된 가격

  /* 상품 수량 플러스,마이너스 */
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * discountedPrice;

  /* 상품 수량 입력 */
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    } else {
      alert('최소 주문수량은 1개입니다.');
      setQuantity(1); // 값을 1로 초기화
    }
  };

  /* 상품 수량 증가 */
  const handleIncrease = () => {
    setQuantity((prevquantity) => prevquantity + 1)
  }
  /* 상품 수량 감소 */
  const handleDecrease = () => {
    if(quantity > 1){
      setQuantity((prevquantity) => prevquantity - 1)
    }else{
      alert('최소 주문수량은 1개 입니다.');
    }
  }
  
  /* 상품 장바구니에 담기 */
  const handleAddToCart = () => {
    addToCart({...product, quantity});
  };

  return (
    <div className='product-detail-page'>
      <div className="product-detail-page-inner inner">
        <div className="product-detail-wrap">
          <div className="detail-image-wrap">
            <div className="big-image">
              <img src={product.imageUrl} alt="Big-Image" />
            </div>
            <div className="small-image">
              <img src={product.imageUrl} alt="Small-Image" />
            </div>
          </div>
          <div className="detail-info-wrap">
            <h1 className='info-name'>{product.name}</h1>
            <p className='info-description'>{product.description}</p>
            <div className='info-price'>
              <span className='discount-rate'>{product.discountRate}%</span>
              <span className='discounted-price'>{discountedPrice.toLocaleString()}원</span>
              <span className='original-price'>{originalPrice.toLocaleString()}원</span>
            </div>
            <ul className='info-delivery'>
              <li>
                <span>국내·해외 배송</span>
                <span>{product.isDelivery}</span>
              </li>
              <li>
                <span>배송방법</span>
                <span>{product.deliverMethod}</span>
              </li>
              <li>
                <span>배송비</span>
                <span>{product.deliverPrice}원</span>
              </li>
            </ul>
            <div className='quantity-wrap'>
              <h3>{product.name}</h3>
              <div className='product-quantity'>
                <button onClick={handleDecrease}>
                  <TfiMinus className='quantity-icon'/>
                </button>
                <div>
                  <input 
                    type="text" 
                    id='quantity'
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                  />
                </div>
                <button onClick={handleIncrease}>
                  <TfiPlus className='quantity-icon'/>
                </button>
              </div>
              <p className='quantity-discounted-price'>{totalPrice.toLocaleString()}원</p>
            </div>
            <div className='product-all-quantity'>
              <p className='all-quantity-price'>총 상품금액</p>
              <div className='all-quantity-discounted'>
                <span>{totalPrice.toLocaleString()}원</span>
                <span>({quantity}개)</span>
              </div>
            </div>
            <div className='shopping-button'>
              <button>buy it now</button>
              <button onClick={handleAddToCart}>add cart</button>
              <button>wish</button>
            </div>
          </div>
        </div>
        <div className="related-product"></div>
      </div>
    </div>
  )
}

export default ProductDetailPage