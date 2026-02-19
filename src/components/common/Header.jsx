import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { BsBag } from "react-icons/bs";

import { CartContext } from '../../contexts/CartContext';

/* Css */
import "../../styles/components/common/Header.css"

const Header = () => {
  /* 장바구니 아이콘 수량 */
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  /* 버튼 클릭 시 Navigation 열림,닫힘 */
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  /* 스크롤 이벤트 Header 그림자 생성 */
  const [showShadow, setShowShadow] = useState(false);

  useEffect ( () => {
    const handleScroll = () => {
      if( window.scrollY > 10 ) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    }
    /* 스크롤 이벤트 추가 */
    window.addEventListener('scroll', handleScroll);

    /* 컴포넌트 언마운트 시 이벤트 제거 */
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <header className={`header ${showShadow ? 'header-shadow' : ''}`}>
      <div className="header-inner">
        <div className="header-up">
          <div className='logo'>
            <Link to='/'>
              <img src="/assets/images/logo.png" alt="Logo-Image" />
            </Link>
          </div>
          <ul className="login-wrap">
            <li><Link to="/login">login</Link></li>
            <li><Link to="">join</Link></li>
            <li><Link to="">order</Link></li>
            <li><Link to="">cart</Link></li>
            <li><Link to="">my page</Link></li>
          </ul>
        </div>
        <div className="header-down">
          <div className="nav">
            <div className={`nav-icon ${isNavOpen ? "open" : "close"}`} onClick={toggleNav}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
            <ul className='nav-list'>
              {/* 첫 번째 */}
              <li>
                <Link to="">베스트</Link>
              </li>
              {/* 두 번째 */}
              <li>
                <Link to="/accessory">악세서리</Link>
                <ul className='second-list'>
                    <li>
                      <Link to=''>가방</Link>
                      <ul className='third-list'>
                        <li><Link to="">가죽</Link></li>
                        <li><Link to="">천</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to=''>지갑</Link>
                      <ul className='third-list'>
                        <li><Link to="">반지갑</Link></li>
                        <li><Link to="">장지갑</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to=''>벨트</Link>
                      <ul className='third-list'>
                        <li><Link to="">캐주얼</Link></li>
                        <li><Link to="">정장</Link></li>
                      </ul>
                    </li>
                    <li><Link to=''>모자</Link></li>
                    <li><Link to=''>선글라스</Link></li>
                  </ul>  
              </li>
              {/* 세 번째 */}
              <li>
                <Link to="/digital">디지털</Link>
                <ul className='second-list'>
                    <li>
                      <Link to=''>충전기</Link>
                      <ul className='third-list'>
                        <li><Link to="">C타입</Link></li>
                        <li><Link to="">8핀</Link></li>
                        <li><Link to="">5핀</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to=''>이어폰</Link>
                      <ul className='third-list'>
                        <li><Link to="">갤럭시</Link></li>
                        <li><Link to="">애플</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to=''>태블릿</Link>
                      <ul className='third-list'>
                        <li><Link to="">갤럭시</Link></li>
                        <li><Link to="">애플</Link></li>
                      </ul>
                    </li>
                    <li><Link to=''>스마트워치</Link></li>
                  </ul>  
              </li>
              {/* 네 번째 */}
              <li>
                <Link to="/homedeco">홈데코</Link>
                <ul className='second-list'>
                  <li>
                    <Link to=''>소품</Link>
                    <ul className='third-list'>
                      <li><Link to="">C타입</Link></li>
                      <li><Link to="">8핀</Link></li>
                      <li><Link to="">5핀</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>쿠션</Link>
                    <ul className='third-list'>
                      <li><Link to="">갤럭시</Link></li>
                      <li><Link to="">애플</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>시계</Link>
                    <ul className='third-list'>
                      <li><Link to="">갤럭시</Link></li>
                      <li><Link to="">애플</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>수납</Link>
                  </li>
                </ul>  
              </li>
              {/* 다섯 번째 */}
              <li>
                <Link to="/beauty">뷰티</Link>
                <ul className='second-list'>
                  <li>
                    <Link to=''>화장품</Link>
                    <ul className='third-list'>
                      <li><Link to="">C타입</Link></li>
                      <li><Link to="">8핀</Link></li>
                      <li><Link to="">5핀</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>뷰티도구</Link>
                    <ul className='third-list'>
                      <li><Link to="">갤럭시</Link></li>
                      <li><Link to="">애플</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* 여섯 번째 */}
              <li>
                <Link to="/kitchen">키친</Link>
                <ul className='second-list'>
                  <li>
                    <Link to=''>주방도구</Link>
                    <ul className='third-list'>
                      <li><Link to="">C타입</Link></li>
                      <li><Link to="">8핀</Link></li>
                      <li><Link to="">5핀</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>식기</Link>
                    <ul className='third-list'>
                      <li><Link to="">갤럭시</Link></li>
                      <li><Link to="">애플</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* 일곱 번째 */}
              <li>
                <Link to="/sports">스포츠</Link>
              </li>
              {/* 여덟 번째 */}
              <li>
                <Link to="/pet">애완동물</Link>
                <ul className='second-list'>
                  <li>
                    <Link to=''>애견용</Link>
                    <ul className='third-list'>
                      <li><Link to="">C타입</Link></li>
                      <li><Link to="">8핀</Link></li>
                      <li><Link to="">5핀</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>애묘용</Link>
                    <ul className='third-list'>
                      <li><Link to="">갤럭시</Link></li>
                      <li><Link to="">애플</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>기타</Link>
                  </li>
                </ul>
              </li>
              {/* 아홉 번째 */}
              <li>
                <Link to="/car-accessory">자동차용품</Link>
              </li>
              {/* 열 번째 */}
              <li>
                <Link to="">커뮤니티</Link>
                <ul className='second-list'>
                  <li>
                    <Link to=''>공지사항</Link>
                    <ul className='third-list'>
                      <li><Link to="">C타입</Link></li>
                      <li><Link to="">8핀</Link></li>
                      <li><Link to="">5핀</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>상품 사용후기</Link>
                    <ul className='third-list'>
                      <li><Link to="">갤럭시</Link></li>
                      <li><Link to="">애플</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to=''>상품 Q&A</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="search-shopping">
            <div className="search">
              <input type="text" placeholder='검색어를 입력하세요' />
              <Link to="">
                <img src="/assets/images/search-icon.png" alt="Search-Icon" />
              </Link>
            </div>
            <div className="shopping">
              <Link to={'/shopping'}>
                <BsBag className='shopping-bag' />
                <span className="shopping-count">{cartItemCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-nav-all ${isNavOpen ? 'show' : ''}`}>
        <div className="nav-all-inner">
          <div className="nav-content-left">
            <ul>
              <li>
                <Link to="">베스트</Link>
              </li>
              <li>
                <Link to="/accessory">악세서리</Link>
                <ul>
                  <li><Link to="">가방</Link></li>
                  <li><Link to="">지갑</Link></li>
                  <li><Link to="">벨트</Link></li>
                  <li><Link to="">모자</Link></li>
                  <li><Link to="">선글라스</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/digital">디지털</Link>
                <ul>
                  <li><Link to="">충전기</Link></li>
                  <li><Link to="">이어폰</Link></li>
                  <li><Link to="">태블릿</Link></li>
                  <li><Link to="">스마트워치</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/homedeco">홈데코</Link>
                <ul>
                  <li><Link to="">소품</Link></li>
                  <li><Link to="">쿠션</Link></li>
                  <li><Link to="">시계</Link></li>
                  <li><Link to="">수납</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/beauty">뷰티</Link>
                <ul>
                  <li><Link to="">화장품</Link></li>
                  <li><Link to="">뷰티도구</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/kitchen">키친</Link>
                <ul>
                  <li><Link to="">주방도구</Link></li>
                  <li><Link to="">식기</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/sports">스포츠</Link>
              </li>
              <li>
                <Link to="/pet">애완동물</Link>
                <ul>
                  <li><Link to="">애견용</Link></li>
                  <li><Link to="">애묘용</Link></li>
                  <li><Link to="">기타</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/car-accessory">자동차용품</Link>
              </li>
            </ul>
          </div>
          <div className="nav-content-right">
            <ul>
              <li>
                <Link to="">커뮤니티</Link>
                <ul>
                  <li><Link to="">공지사항</Link></li>
                  <li><Link to="">상품 사용후기</Link></li>
                  <li><Link to="">상품 Q&A</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header