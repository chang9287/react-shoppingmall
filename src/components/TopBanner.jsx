import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/components/TopBanner.css"

const TopBanner = () => {
  return (
    <div className='top-banner'>
      <div className="top-banner-wrap inner">
        <Link to="#none">
          <img src="/assets/images/top-banner-01.jpg" alt="" />
          <div className='top-banner-title' >
            <h1>최고의 맛을 경험하세요! <br/> 지금 바로 인기 상품을 만나보세요.</h1>
            <p>구매 후 리뷰를 남기시면 포인트가 지급됩니다.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TopBanner