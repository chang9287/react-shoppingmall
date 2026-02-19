import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

/* Import Swiper styles */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* Css */
import "../styles/components/MainVisual.css"

/* import required modules */
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const MainVisual = () => {
  const mainImages = [
    {
      imageUrl : '/assets/images/main-visual-slide-01.jpg',
      alt : 'Main-Visual-Slide-01',
      subtitle : '모던 라이프',
      titleUp : '심플한 잡화,',
      titleDown : '실용성과 스타일을 겸비하다.',
      description : '현대적인 디자인의 잡화 아이템을 만나보세요.',
    },
    {
      imageUrl : '/assets/images/main-visual-slide-02.jpg',
      alt : 'Main-Visual-Slide-02',
      subtitle : '편리한 생활',
      titleUp : '실용적인 잡화,',
      titleDown : '당신의 삶을 더 편리하게.',
      description : '실용적인 아이템으로 생활의 편리함을 더해보세요.',
    },
    {
      imageUrl : '/assets/images/main-visual-slide-03.jpg',
      alt : 'Main-Visual-Slide-03',
      subtitle : '감각적인 선택',
      titleUp : '트렌디한 잡화,',
      titleDown : '일상에 활기를 더하다.',
      description : '트렌디한 잡화로 일상에 활기를 불어넣으세요.',
    },
    {
      imageUrl : '/assets/images/main-visual-slide-04.jpg',
      alt : 'Main-Visual-Slide-04',
      subtitle : '일상 속의 즐거움',
      titleUp : '독창적인 잡화,',
      titleDown : '당신의 일상을 특별하게.',
      description : '독창적인 아이템으로 일상을 특별하게 만들어보세요.',
    },
    {
      imageUrl : '/assets/images/main-visual-slide-05.jpg',
      alt : 'Main-Visual-Slide-05',
      subtitle : '최신 트렌드',
      titleUp : '다양한 잡화,',
      titleDown : '당신의 일상을 풍성하게.',
      description : '매일매일 새로운 잡화 아이템을 만나보세요.',
    },
  ]

  return (
    <div className='main-visual'>
      <Swiper
        cssMode={true}
        spaceBetween={30}
        loop={true}
        slidesPerView={2}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        allowTouchMove={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, /* Autoplay */]}
        className="mySwiper"
      >
        {mainImages.map((mainImage, index) => (
          <SwiperSlide key={index}>
            <img src={mainImage.imageUrl} alt={mainImage.alt} />
            <div className='main-image-text'>
              <h4>{mainImage.subtitle}</h4>
              <div className='title-wrap'>
                <h2>{mainImage.titleUp}<br></br>{mainImage.titleDown}</h2>
              </div>
              <p>{mainImage.description}</p>
              <button>
                <Link to="">
                  <span>더 알아보기 →</span>
                </Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainVisual