import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoReviewPage from './pages/PhotoReviewPage';
import PhotoReviewDetail from './pages/PhotoReviewDetail';
import ShoppingPage from './pages/ShoppingPage';
import SideButton from './components/common/SideButton';


//CSS
import "../src/styles/reset/reset.css"
import "../src/styles/global.css"

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 현재 경로(pathname) 추적

  useEffect(() => {
    // 경로가 변경될 때마다 스크롤을 상단으로 이동
    window.scrollTo(0, 0);
  }, [pathname]); // pathname이 변경될 때마다 useEffect 실행

  return null; // UI를 렌더링하지 않음
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* 메인페이지 */}
          <Route path='/' element={<MainPage />} />
          {/* 카테고리별 페이지 */}
          <Route path="/:category" element={<CategoryPage />} />
          {/* 상품 상세 페이지 */}
          <Route path="/:category/:id" element={<ProductDetailPage />} />
          {/* 포토 리뷰 페이지 */}
          <Route path="/photo-review" element={<PhotoReviewPage />} />
          {/* 포토 리뷰 상세 페이지 */}
          <Route path="/photo-review/:reviewIdx" element={<PhotoReviewDetail />} />
          {/* 장바구니 페이지 */}
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </main>
      <SideButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
