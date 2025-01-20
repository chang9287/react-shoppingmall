import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { TfiPlus, TfiMinus } from "react-icons/tfi";

/* Css */
import "../styles/pages/ShoppingPage.css"

const ShoppingPage = () => {
  return (
    <div className='shopping-page'>
      <div className="shopping-page-inner inner">
        <div className="shopping-page-title">
          <h1>장바구니</h1>
          <ul>
            <li>1. 장바구니</li>
            <li>2. 주문서작성</li>
            <li>3. 주문완료</li>
          </ul>
        </div>
        <div className="shopping-page-container">
          {/* 국내/해외 배송 */}
          <div className="cart-tab-title">
            <ul>
              <li>국내배송상품</li>
              <li>해외배송상품</li>
            </ul>
          </div>
          {/* cart-tab-content */}
          <div className="cart-tab-content">
            {/* cart-product */}
            <div className="cart-product">
              {/* cart-title */}
              <h1 className="cart-title">장바구니 상품</h1>
              <h2 className="cart-subtitle">일반상품(2)</h2>
              <div className="cart-item">
                <input type="checkbox" />
                <div className='item-wrap'>
                  <div className="item-info">
                    <img src="" alt="" />
                    <div className="item-description">
                      <h6>
                        <Link to="">상품이름</Link>
                      </h6>
                      <span>원래가격</span>
                      <span>할인률</span>
                      <span>최종가격</span>
                      <span>배송 : 50000원 이상 무료배송 / 기본배송</span>
                    </div>
                    <button className='item-closebtn'></button>
                  </div>
                  <div className="item-quantity">
                    <span>수량</span>
                    <div className='quantity-box'>
                      <button onClick="">
                        <TfiMinus className='quantity-icon'/>
                      </button>
                      <div>
                        <input 
                          type="text" 
                          id='quantity'
                          /* value={quantity} */
                          onChange=""
                          min="1"
                        />
                      </div>
                      <button onClick="">
                        <TfiPlus className='quantity-icon'/>
                      </button>
                    </div>
                    <button>변경</button>
                  </div>
                  <div className="item-total-price">
                    <span>주문금액</span>
                    <span>00원</span>
                  </div>
                  <div className="item-buttons">
                    <button>관심상품</button>
                    <button>주문하기</button>
                  </div>
                </div>
              </div>
              <div className="cart-summary"></div>
              <div className="cart-buttons">
                <div className="select-buttons">
                  <button>전체선택</button>
                  <button>선택삭제</button>
                </div>
                <div className="cart-export-buttons">
                  <button>견적서출력</button>
                  <button>해외장바구니로 이동</button>
                </div>
              </div>
            </div>
            {/* cart-total */}
            <div className="cart-total"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage