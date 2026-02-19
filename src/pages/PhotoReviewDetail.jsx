import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

/* Json */
import productsReview from '../components/data/productsReview.json'
import products from '../components/data/products.json';

/* Css */
import "../styles/pages/PhotoReviewDetail.css"

const PhotoReviewDetail = () => {
  //URL 파라미터에서 reviewIdx 가져오기
  const { reviewIdx } = useParams(); 

  //리뷰 찾기
  const review = productsReview.find((review) => review.reviewIdx === parseInt(reviewIdx)); 
  //parseInt(reviewIdx) : URL 파라미터로 받은 reviewIdx를 숫자로 변환
  //리뷰의 reviewIdx과 파라미터로 받은 reviewIdx가 서로 일치하는지 확인

  if (!review) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  } 

  /* 상품 별점 출력 */
  const stars = review.reviewStars;

  const fullstar = Math.floor(stars);
  const halfstar = stars - fullstar >= 0.5 ? 1 : 0;

  //리뷰와 연결된 상품 정보 찾기
  const product = products.find((product) => product.id === review.productId);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  /* 이전 다음 리뷰 */
  const currentReview = productsReview.findIndex((review) => review.reviewIdx === parseInt(reviewIdx));

  const prevReview = currentReview > 0 ? productsReview[currentReview - 1].reviewIdx : null;
  const nextReview = currentReview <= productsReview.length - 1 ? productsReview[currentReview + 1].reviewIdx : null;

  return (
    <div className='photo-review-detail'>
      <div className="photo-review-detail-inner inner">
        <h1 className="photo-review-detail-title">상품 사용후기</h1>
        <div className="review-product-wrap">
          <div className="review-product-image">
            <Link to={`/${product.category}/${product.id}`}>
              <img src={review.productImageUrl} alt="Review-Product-Image" />
            </Link>
          </div>
          <div className="review-product-info">
            <div className="review-product-name">
              <Link to={`/${product.category}/${product.id}`}>
                <span>{review.productName}</span>
              </Link>
            </div>
            <p className="review-product-price">{review.productPrice}원</p>
          </div>
        </div>
        <div className="review-user-wrap">
          <div className="user-title-wrap">
            <h1 className='user-title'>{review.reviewTitle}</h1>
            <ul className='user-info'>
              <li>{review.reviewId}</li>
              <li>{review.reviewDate}</li>
              <li>조회수{/* 조회수 */}</li>
              <li>
                {/* 꽉 찬 별 */}
                {Array.from({ length : fullstar }, (_, index) => (
                  <FontAwesomeIcon key={`full-${index}`} icon={faStar} style={{ color: "#333" }} />
                ))}
                {/* 반만 찬 별 */}
                {halfstar === 1 && (
                  <FontAwesomeIcon icon={faStarHalf} style={{ color: "#333" }} />
                )}
              </li>
            </ul>
          </div>
          <div className="user-image-wrap">
            <div className="user-image">
              <img src={review.reviewImageUrl} alt="User-Review-Image" />
            </div>
            <p className="user-comment">
              {review.reviewDescription}
            </p>
          </div>
          <div className="review-list-wrap">
            <button className='go-to-review-list'>
              <Link to="/photo-review">목록</Link>
            </button>
          </div>
        </div>
        <div className="review-navigation">
          <ul>
            {/* 이전 리뷰 버튼 */}
            {prevReview !== null && (
              <li className='review-prev'>
                <div className="prev-num">
                  <span>이전</span>
                  <SlArrowUp style={{fontSize: '10px'}} />
                </div>
                <Link to={`/photo-review/${prevReview}`}>
                  {productsReview[currentReview - 1].reviewTitle}
                </Link>
              </li>
            )}
            {/* 다음 리뷰 버튼 */}
            {nextReview !== null && (
              <li className='review-next'>
                <div className="next-num">
                  <span>다음</span>
                  <SlArrowDown style={{fontSize: '10px'}} />
                </div>
                <Link to={`/photo-review/${nextReview}`}>
                  {productsReview[currentReview + 1].reviewTitle}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PhotoReviewDetail