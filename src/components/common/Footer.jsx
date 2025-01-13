import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/components/common/Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container inner'>
        <ul className="footer-nav">
          <li>
            <Link to="">브랜드</Link>
          </li>
          <li>
            <Link to="">이용약관</Link>
          </li>
          <li>
            <Link to="">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="">이용안내</Link>
          </li>
        </ul>
        <div className="footer-info">
          <div className="info common-info">
            <h6 className='info-title common-title'>info</h6>
            <div className="info-content common-content">
              <div className='responsive-info'>
                <p>
                  <div className='store'>
                    <span>상호명</span>
                    <span>SnapLoom</span>
                  </div>
                  <div className='name'>
                    <span>대표</span>
                    <span>홍길동</span>
                  </div>
                </p>
                <p>
                  <div className="adress">
                    <span>주소</span>
                    <span>서울특별시 강남구 삼성로108길</span>
                  </div>
                  <div className="phone">
                    <span>전화</span>
                    <span>010-1234-5678</span>
                  </div>
                </p>
              </div>
              <p>
                <span>개인정보관리책임자</span>
                <span><Link to="">홍길동(00000@naver.com)</Link></span>
              </p>
              <p>
                <div>
                  <span>사업자 등록번호</span>
                  <span>123-455-78965</span>
                </div>
                <div>
                  <span>통신판매업 신고</span> 
                  <span>신고준비중</span>
                </div>
              </p>
            </div>
          </div>
          <div className="center common-info">
            <h6 className='center-title common-title'>c/s center</h6>
            <div className="center-content common-content">
              <p><Link to="">010-1234-5678</Link></p>
              <p>
                <span>OPEN</span>
                <span>AM 10:00 ~ PM 06:00</span>
              </p>
              <p>
                <span>LUNCH</span>
                <span>AM 11:30 ~ PM 12:30</span>
              </p>
              <span>HOLIDAY , SAT , SUN OFF</span>
            </div>
          </div>
          <div className="bank common-info">
            <h6 className='bank-title common-title'>bank info</h6>
            <div className="bank-content common-content">
              <p>
                <span>신한</span>
                <span>000-0000-000000</span>
              </p>
              <p>
                <span>국민</span>
                <span>000-0000-000000</span>
              </p>
              <p>
                <span>예금주</span>
                <span>홍길동</span>
              </p>
              <div className='bank-option'>
                <select name="" id="">
                  <option value="">인터넷뱅킹 바로가기</option>
                  <option value="">신한은행</option>
                  <option value="">국민은행</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sns common-info">
            <h6 className='sns-title common-title'>sns</h6>
            <ul className='sns-list common-content'>
              <li><Link to="">Insatgram</Link></li>
              <li><Link to="">Facebook</Link></li>
              <li><Link to="">Youtube</Link></li>
              <li><Link to="">KaKao</Link></li>
            </ul>
          </div>
        </div>
        <span className="footer-copy">
          Copyright &copy; SnapLoom. All rights reserved.
         </span>
      </div>
    </footer>
  )
}

export default Footer