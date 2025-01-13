import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import ProductPhotoReviwCards from '../components/ui/ProductPhotoReviwCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

/* Json */
import productsReview from '../components/data/productsReview.json'

/* Css */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../styles/pages/PhotoReviewPage.css"

const PhotoReviewPage = () => {
  useEffect(() => {
    // Swiper가 DOM 요소를 찾을 수 있도록 보장
    const nextButton = document.querySelector('.review-page-custom-next');
    const prevButton = document.querySelector('.review-page-custom-prev');
  
    if (nextButton && prevButton) {
      nextButton.addEventListener('click', () => {
        document.querySelector('.swiper-button-next')?.click();
      });
      prevButton.addEventListener('click', () => {
        document.querySelector('.swiper-button-prev')?.click();
      });
    }
  
    return () => {
      // Cleanup
      if (nextButton && prevButton) {
        nextButton.removeEventListener('click', () => {});
        prevButton.removeEventListener('click', () => {});
      }
    };
  }, []);
  
  return (
    <div className='photo-review-page'>
      <div className="photo-review-page-inner inner">
        <h1 className="photo-review-page-title">상품 사용후기</h1>
        <div className="photo-review-page-list">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: '.review-page-custom-pagination', // 외부   pagination
              type: 'progressbar' 
            }}
            navigation={{
              nextEl: '.review-page-custom-next',
              prevEl: '.review-page-custom-prev',
            }}
            spaceBetween={25}
            slidesPerView={4}
          >
            {productsReview.map((photoreview, index) => (
              <SwiperSlide key={index}> 
                <ProductPhotoReviwCards photoreview={photoreview} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper 외부에 위치한 프로그레스바 */}
          <div className="review-page-custom-pagination"></div>
          <button className="review-page-custom-prev"></button>
          <button className="review-page-custom-next"></button>
        </div>
        <div className="photo-review-page-search">
          <table className='search-list'>
            <thead>
              <tr>
                <th>번호</th>
                <th>상품정보</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
                <th>평점</th>
              </tr>
            </thead>
          </table>
          <p className='search-result'>검색결과가 없습니다.</p>
          <form action="" className='search-option'>
            <select name="" id="">
              <option value="">전체</option>
              <option value="">일주일</option>
              <option value="">한 달</option>
              <option value="">세 달</option>
            </select>
            <select name="" id="">
              <option value="">제목</option>
              <option value="">내용</option>
              <option value="">글쓴이</option>
              <option value="">아이디</option>
              <option value="">별명</option>
              <option value="">상품정보</option>
            </select>
            <input type="text" />
            <button>찾기</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PhotoReviewPage