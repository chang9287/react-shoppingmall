import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/components/BottomBanner.css"

const BottomBanner = () => {
  return (
    <div className='bottom-banner'>
      <div className="bottom-banner-wrap inner">
        <div className="banners">
          <Link to="#none">
            <img src="/assets/images/down-banner-01.jpg" alt="" />
            <div className='bottom-banner-title' >
              <h1>인기 베스트 상품을 만나보세요! <br/> 지금 특별 할인 혜택이 준비되었습니다!</h1>
              <p>많은 사랑을 받은 인기 상품들을, <br/> 지금 바로 할인된 가격에 만나보세요.</p>
            </div>
          </Link>
        </div>
        <div className="banners">
          <Link to="#none">
            <img src="/assets/images/down-banner-02.jpg" alt="" />
            <div className='bottom-banner-title' >
              <h1>인기 베스트 상품을 만나보세요! <br/> 지금 특별 할인 혜택이 준비되었습니다!</h1>
              <p>많은 사랑을 받은 인기 상품들을, <br/> 지금 바로 할인된 가격에 만나보세요.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner