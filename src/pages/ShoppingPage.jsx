import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { TfiPlus, TfiMinus } from "react-icons/tfi";
import { GrCheckmark } from "react-icons/gr";
import { PiWarningCircleThin } from "react-icons/pi";

import { CartContext } from '../contexts/CartContext';

/* Css */
import "../styles/pages/ShoppingPage.css"

const ShoppingPage = () => {
  const {cart, removeFromCart, updateQuantity, setQuantityDirectly} = useContext(CartContext);
  const [tabActive, setTabActive] = useState('국내배송');
  const [checkedItemList, setcheckedItemList] = useState({});

  /* 상품 필터링 */
  const domesticProducts = cart.filter((item)=> item.isDelivery === "국내배송");
  const internationalProducts = cart.filter((item) => item.isDelivery === "해외배송");

  /* 현재 활성 상품 */
  const activeProducts = tabActive === "국내배송" ? domesticProducts : internationalProducts;

  /* 장바구니 상품 삭제 */
  const removeCart = (id) => {
    const confirmText = window.confirm(
      "선택하신 상품을 삭제하시겠습니까?"
    )
    if(confirmText) {
      removeFromCart(id);
    }
  }

  /* 상품 체크 상태 변경 */
  const productCheckedState = (productId) => {
    setcheckedItemList((currentCheckedItemList) => ({
      ...currentCheckedItemList,
      [productId]: !currentCheckedItemList[productId]
    }));
  };

  /* 전체 선택 함수 */
  const selectAllProducts = () => {
    const isAllSelected = activeProducts.every((product) => {
      return checkedItemList[product.id] === true;
    });

    const newCheckedItemList = {};

    if(isAllSelected){
      //전부 체크 되어 있다면 전부 해제
      activeProducts.forEach((product) => {
        newCheckedItemList[product.id] = false;
      });
    }else{
      //하나라도 체크 안되어 있으면 전부 선택
      activeProducts.forEach((product) => {
        newCheckedItemList[product.id] = true;      
      });
    }
    setcheckedItemList(newCheckedItemList);
  };

  /* 선택 삭제 함수 */
  const deleteSelectedProducts  = () => {
    const selectedProductIdList = Object.keys(checkedItemList).filter(
      (productId) => checkedItemList[productId] === true
    );

    if(selectedProductIdList.length === 0){
      alert("선택된 상품이 없습니다");
      return;
    }

    const confirmText = window.confirm("선택하신 상품을 모두 삭제하시겠습니까?");

    if(!confirmText){
      return;
    }

    selectedProductIdList.forEach((productId) => {
      removeFromCart(Number(productId));
    });

    setcheckedItemList({});
  };

  /* 총 금액, 배달비 계산 */
  const calculateCartTotal = () => {
    //상품들 총 금액
    let totalProductsPrice = 0;

    activeProducts.forEach((item) => {
      const discountedPrice = Math.round(item.price * (1 - item.discountRate / 100));

      const totalPrice = discountedPrice * item.quantity;

      totalProductsPrice += totalPrice;
    });

    //상품들 배달비
    let totalDeliveryPrice = 0
    if(totalProductsPrice >= 300000){
      totalDeliveryPrice = 0;
    }else{
      totalDeliveryPrice = 2500;
    }

    const finalTotalProductsPrice = totalProductsPrice + totalDeliveryPrice;

    return{
      totalProductsPrice,
      totalDeliveryPrice,
      finalTotalProductsPrice
    };
  };

  /* 계산 총 정리 */
  const result = calculateCartTotal();

  const totalProductsPrice = result.totalProductsPrice;
  const totalDeliveryPrice = result.totalDeliveryPrice;
  const finalTotalProductsPrice = result.finalTotalProductsPrice;
  
  /* 상품 렌더링 함수 */
  const renderProducts = (products) => {
    return products.map((item) => {
      //원래 가격
      const itemOriginalPrice = item.price;
      //할인된 가격
      const itemDiscountedPrice = Math.round(itemOriginalPrice * (1 - item.discountRate / 100));
      
      //상품 총 금액 (할인가 × 수량)
      const itemTotalPrice = itemDiscountedPrice * item.quantity;

      //배송비 상품 총액 300000원이상 무료배송
      const fivemanwon = 300000;
      //배송 할인
      const deliverText = `${fivemanwon.toLocaleString()}원 이상 무료배송`;

      return (
        <div className="cart-item" key={item.id}>
          <label className='cart-item-checkbox'>
            <input className='cart-item-checkbox-input' type="checkbox" checked={checkedItemList[item.id] === true} onChange={() => productCheckedState(item.id)}/>
            <span className="cart-item-checkbox-mark">
              <GrCheckmark className="cart-item-checkbox-mark-icon"/>
            </span>
          </label>
          <div className='item-wrap'>
            <div className="item-info">
              <img src={item.imageUrl} alt="" />
              <div className="item-description">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <span>{itemOriginalPrice.toLocaleString()}원</span>
                <span>{item.discountRate}%</span>
                <span>{itemDiscountedPrice.toLocaleString()}원</span>
                <span>배송비 : {item.deliverPrice.toLocaleString()}원 <em>({deliverText})</em> / 기본배송</span>
              </div>
              <button className='item-closebtn' onClick={() => removeCart(item.id)}>
                <img src="/assets/images/shopping-item-close.png" alt="Item-Close" />
              </button>
            </div>
            <div className="item-quantity">
              <span className="item-quantity-label">수량</span>
              <div className="item-quantity-container">
                <button className="item-quantity-btn" onClick={() => updateQuantity(item.id, "decrease")}>
                  <TfiMinus className="quantity-icon"/>
                </button>
                <div className="item-quantity-input">
                  <input 
                    type="text" 
                    value={item.quantity}
                    onChange={(e) => {
                      const value = e.target.value;

                      if(value === ""){
                        setQuantityDirectly(item.id, "");
                        return;
                      }
                      if(!isNaN(value)){
                        setQuantityDirectly(item.id, Number(value));
                      }
                    }}
                    onBlur={() => {
                      if(item.quantity === "" || item.quantity < 1){
                        setQuantityDirectly(item.id, 1);
                      }
                    }}
                  />
                </div>
                <button className="item-quantity-btn" onClick={() => updateQuantity(item.id, "increase")}>
                  <TfiPlus className="quantity-icon"/>
                </button>
              </div>
            </div>
            <div className="item-total-price">
              <span className="item-total-label">주문금액</span>
              <span className="item-total-amount">
                <span className="item-total-value">{itemTotalPrice.toLocaleString()}</span>
                <span className="item-total-unit">원</span>
              </span>
            </div>
            <div className="item-buttons">
              <button>관심상품</button>
              <button>주문하기</button>
            </div>
          </div>
        </div>
      )
    })
  };

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
              <li
                className={tabActive === "국내배송" ? "active" : ""}
                onClick={() => setTabActive("국내배송")}
              >
                국내배송상품({domesticProducts.length})
              </li>
              <li
                className={tabActive === "해외배송" ? "active" : ""}
                onClick={() => setTabActive("해외배송")}  
              >
                해외배송상품({internationalProducts.length})
              </li>
            </ul>
          </div>
          {/* cart-tab-content */}
          <div className="cart-tab-content">
            <div className="cart-tab-content-inner">
              {activeProducts.length > 0 ? (
                <>
                  <div className="cart-product">
                    <h1 className="cart-title">장바구니 상품</h1>
                    <h2 className="cart-subtitle">일반상품({activeProducts.length})</h2>
                    <div className="cart-items">
                      {renderProducts(activeProducts)}
                    </div>
                    <div className="cart-summary">
                      <h3 className="cart-summary-title">[기본배송]</h3>
                      <p className="cart-summary-content">
                        <span className="cart-summary-text">상품구매금액 {totalProductsPrice.toLocaleString()}원 + 배송비 {totalDeliveryPrice.toLocaleString()}원</span>
                        <span className="cart-summary-text">합계 : {finalTotalProductsPrice.toLocaleString()}원</span>
                      </p>
                    </div>
                    <div className="cart-buttons">
                      <div className="select-buttons">
                        <button className="cart-btn" onClick={selectAllProducts}>전체선택</button>
                        <button className="cart-btn" onClick={deleteSelectedProducts}>선택삭제</button>
                      </div>
                      <div className="cart-export-buttons">
                        <button className="cart-btn">견적서출력</button>
                        <button className="cart-btn">해외장바구니로 이동</button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-total">
                    <div className="total-text">
                      <p className="total-item-price">
                        <span>총 상품금액</span>
                        <span>{totalProductsPrice.toLocaleString()}원</span>
                      </p>
                      <p className="total-delivery-price">
                        <span>총 배송비</span>
                        <span>{totalDeliveryPrice.toLocaleString()}원</span>
                      </p>
                      <p className="all-total-price">
                        <span>결제예정금액</span>
                        <span>{finalTotalProductsPrice.toLocaleString()}원</span>
                      </p>
                    </div>
                    <div className="total-buttons">
                      <button type="button" className="all-item-order">전체상품주문</button>
                      <button type="button" className="select-item-order">선택상품주문</button>
                    </div>
                    <p className="total-description">
                      <img src="/assets/images/total-button-icon.svg" alt="" />
                      <span>
                        할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="no-shopping-product">
                    <PiWarningCircleThin className="no-shopping-icon"/>
                    <p className="no-shopping-text">장바구니가 비어 있습니다.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="shopping-page-guide">
          <h2 className="guide-title">이용안내</h2>
          <div className="guide-section">
            <h3 className="guide-section-title">장바구니 이용안내</h3>
            <ul className="guide-list">
              <li className="guide-text">해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.</li>
              <li className="guide-text">해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수 있습니다.</li>
              <li className="guide-text">선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.</li>
              <li className="guide-text">[쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</li>
              <li className="guide-text">장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.</li>
              <li className="guide-text">파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.</li>
            </ul>
            <h3 className="guide-section-title">무이자할부 이용안내</h3>
            <ul className="guide-list">
              <li className="guide-text">상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.</li>
              <li className="guide-text">[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.</li>
              <li className="guide-text">단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.</li>
              <li className="guide-text">무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어, 무이자할부 상품 기준으로 배송비가 표시됩니다.<br/>실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를 참고해주시기 바랍니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage