import React, {useState} from 'react'
import { Link } from 'react-router-dom'

/* Css */
import "../styles/pages/LoginPage.css"

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("user");

  const loginTab = [
    {
      id : "user",
      label : "일반회원 로그인",
      content : (
        <form className='user-wrap'>
          <input type="text" placeholder='아이디를 입력해주세요' />
          <input type="password" placeholder='비밀번호를 입력해주세요' />
          <button type="button" className='normal-login-btn'>로그인</button>
          <ul>
            <li>
              <Link to="">아이디찾기</Link>
            </li>
            <li>
              <Link to="">비밀번호찾기</Link>
            </li>
          </ul>
        </form>
      )
    },
    {
      id : "guest",
      label : "비회원 배송조회",
      content : (
        <form className='guest-wrap'>
          <input type="text" placeholder='주문자명' />
          <input type="text" placeholder='주문번호' />
          <input type="password" placeholder='비회원주문 비밀번호' />
          <button className='guest-login-btn'>주문조회</button>
        </form>
      )
    }
  ]


  return (
    <div className='login-page'>
      <div className="login-page-inner">
        <div className="login-page-logo">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="Logo-Image" />
          </Link>
        </div>
        <div className="login-page-content">
          <div className="easy-login-container">
            <h2>간편하게 로그인하기</h2>
            <p>
              귀찮은 입력 없이<br />
              SNS로 쉽고 빠르게 로그인해보세요.
            </p>
            <ul>
              <li className='login-kakao'>
                <Link to="">
                  <img src="/assets/images/kakao.png" alt="" />
                  <span>카카오로 원터치 로그인/회원가입</span>
                </Link>
              </li>
              <li className='login-naver'>
                <Link to="">
                  <img src="/assets/images/naver.png" alt="" />
                  <span>네이버로 로그인/회원가입</span>
                </Link>
              </li>
              <li className='login-facebook'>
                <Link to="">
                  <img src="/assets/images/facebook.png" alt="" />
                  <span>facebook으로 로그인/회원가입</span>
                </Link>
              </li>
              <li className='login-google'>
                <Link to="">
                  <img src="/assets/images/google.png" alt="" />
                  <span>Google로 로그인/회원가입</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="login-center-line"></div>
          <div className="normal-login-container">
            <div className='login-title'>
              {loginTab.map((tab) => (
                <h2 
                  key={tab.id} 
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? "open" : ""}
                >
                  {tab.label}
                </h2>
              ))}
            </div>
            <div className="login-content">
              {loginTab.find((tab) => tab.id === activeTab).content}
            </div>
          </div>
        </div>
        <div className="join-btn">
          <Link to="">회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage