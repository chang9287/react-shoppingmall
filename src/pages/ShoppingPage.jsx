import React from 'react'
import "../styles/pages/ShoppingPage.css"

const ShoppingPage = () => {
  return (
    <div className='shopping-page'>
      <div className="inner">
        <div className="shopping-page-title">
          <h1>장바구니</h1>
          <ol>
            <li>1. 장바구니</li>
            <li>2. 주문서작성</li>
            <li>3. 주문완료</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage