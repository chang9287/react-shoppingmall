import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";



/* Css */
import "../../styles/components/ui/ProductPhotoReviwCards.css"

const ProductPhotoReviwCards = ({photoreview}) => {

  const stars = photoreview.reviewStars;

  const fullstar = Math.floor(stars);
  const halfstar = stars - fullstar >= 0.5 ? 1 : 0;
  //const emptystar = 5 - fullstar - halfstar;

  return (
    <div className='photo-review-card'>
      <Link to={`/photo-review/${photoreview.reviewIdx}`}>
        <div className="review-image">
          <img src={photoreview.reviewImageUrl} alt="Review-Image" />
        </div>
        <div className="review-text">
          <h3>{photoreview.reviewTitle}</h3>
          <p>{photoreview.reviewDescription}</p>
          <div className="user">
            <span className='review-id'>{photoreview.reviewId}</span>
            <span className='review-date'>{photoreview.reviewDate}</span>
          </div>
          <div className="review-product">
            <div className="product-img">
              <img src={photoreview.productImageUrl} alt="Product-Image" />
            </div>
            <h3>{photoreview.productName}</h3>
            <div className='revuew-star'>
              {/* 꽉 찬 별 */}
              {Array.from({ length : fullstar }, (_, index) => (
                <FontAwesomeIcon key={`full-${index}`} icon={faStar} style={{ color: "orangered" }} />
              ))}
              {/* 반만 찬 별 */}
              {halfstar === 1 && (
                <FontAwesomeIcon icon={faStarHalf} style={{ color: "orangered" }} />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductPhotoReviwCards