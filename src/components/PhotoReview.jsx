import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Title from './main/Title'
import ProductPhotoReviwCards from './ui/ProductPhotoReviwCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { BsArrowRight } from "react-icons/bs";

/* Json */
import productsReview from '../components/data/productsReview.json'

/* Css */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../styles/components/PhotoReview.css"

const PhotoReview = () => {
  useEffect(() => {
    //Swiper가 DOM 요소를 찾을 수 있도록 보장
    const nextButton = document.querySelector('.custom-next');
    const prevButton = document.querySelector('.custom-prev');

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', () => {
        document.querySelector('.swiper-button-next')?.click();
      });
      prevButton.addEventListener('click', () => {
        document.querySelector('.swiper-button-prev')?.click();
      });
    }

    return () => {
      //Cleanup
      if (nextButton && prevButton) {
        nextButton.removeEventListener('click', () => {});
        prevButton.removeEventListener('click', () => {});
      }
    };
  }, []);


  return (
    <div className='photo-review'>
      <div className="photo-review-wrap inner">
        <Title title="photo review" subtitle="고객님들이 직접 작성한 리뷰를 확인해보세요." />
        <div className="photo-review-list">
          <button className='photo-review-more'>
            <Link to="/photo-review">더보기 <BsArrowRight /></Link>
          </button>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: '.custom-pagination', //외부 pagination
              type: 'progressbar' 
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
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
          <div className="custom-pagination"></div>
          <button className="custom-prev"></button>
          <button className="custom-next"></button>
        </div>
      </div>
    </div>
  )
}

export default PhotoReview