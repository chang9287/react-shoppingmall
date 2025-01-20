import React from 'react'
import MainVisual from '../components/MainVisual'
import Categories from '../components/Categories'
import BestProducts from '../components/BestProducts'
import TopBanner from '../components/TopBanner'
import NewArrivals from '../components/NewArrivals'
import BottomBanner from '../components/BottomBanner'
import PhotoReview from '../components/PhotoReview'


import "../styles/pages/MainPage.css"

const MainPage = ({addToCart}) => {
  return (
    <div className='main-page'>
      <MainVisual />
      <Categories addToCart={addToCart} />
      <BestProducts addToCart={addToCart} />
      <TopBanner />
      <NewArrivals addToCart={addToCart} />
      <BottomBanner />
      <PhotoReview />
    </div>
  )
}

export default MainPage