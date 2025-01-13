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

  const { reviewIdx } = useParams(); // URL 파라미터에서 reviewIdx 가져오기
  const review = productsReview.find((review) => review.reviewIdx === parseInt(reviewIdx)); // 리뷰 찾기
  //parseInt(reviewIdx) : URL 파라미터로 받은 reviewIdx를 숫자로 변환
  //리뷰의 reviewIdx과 파라미터로 받은 reviewIdx가 서로 일치하는지 확인

  if (!review) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  } 

  /* 상품 별점 출력 */
  const stars = review.reviewStars;

  const fullstar = Math.floor(stars);
  const halfstar = stars - fullstar >= 0.5 ? 1 : 0;

  // 리뷰와 연결된 상품 정보 찾기
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


/* 
  {
    "reviewIdx" : 1,
    "reviewTitle" : "디자인은 멋진데, 가격이 좀 비싸네요.",
    "reviewId" : "SnapLoom001",
    "reviewStars" : 4.5,
    "reviewDate" : "2024-09-02",
    "reviewDescription" : "모던 프레임 전신거울을 구입했는데, 디자인이 매우 세련되고 방이 더 넓어 보이게 해 줍니다. 하지만 가격이 다소 비싸서 별점을 하나 뺐습니다. 전체적으로는 만족스러워요.",
    "reviewImageUrl" : "/assets/images/homedeco/product-homedeco-04.jpg",
    "productId" : 37,
    "productImageUrl" : "/assets/images/homedeco/product-homedeco-04.jpg",
    "productName" : "모던 프레임 전신거울",
    "productPrice" : 9000
  },
*/

/* 
차이점
productsReview[currentIndex - 1]
  - productsReview는 전체 리뷰 목록을 담고 있는 배열입니다.
  - currentIndex는 현재 리뷰의 인덱스를 나타냅니다.
  - productsReview[currentIndex - 1]는 현재 리뷰의 바로 이전 리뷰 객체

  이 표현은 전체 리뷰 목록에서 이전 리뷰를 찾는 데 사용됩니다.

review[currentIndex - 1]
  - review는 현재 리뷰 객체를 가리킵니다.
  - 즉, productsReview 배열에서 찾은 특정 리뷰 객체입니다.

  - review는 배열이 아니라 객체이기 때문에 review[currentIndex - 1]와 같은 표현은 의미가 없음
*/