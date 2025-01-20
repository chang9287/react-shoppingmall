import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProductCards from '../components/ui/ProductCards'

/* Json 파일 불러오기 */
import products from '../components/data/products.json'

/* Css */
import "../styles/pages/CategoryPage.css"

const CategoryPage = ({addToCart}) => {
  const { category } = useParams(); // 동적 라우팅에서 category 값 가져오기

  // 카테고리 이름 매핑 객체
  const categoryNames = {
    'accessory' : "악세서리",
    'digital' : "디지털",
    'homedeco' : "홈데코",
    'beauty' : "뷰티",
    'kitchen' : "키친",
    'sports' : "스포츠",
    'pet' : "애완동물",
    'car-accessory' : "자동차용품",
  };

  //해당 카테고리에 맞는 제품만 불러오기
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  /* pagination */
  const productPerPage = 8; //한 페이지에 보여줄 갯수
  const [productCurrentPage, setProductCurrentPage] = useState(1) //시작 페이지

  const CurrentIndex = (productCurrentPage - 1) * productPerPage;
  const currentProducts = filteredProducts.slice(CurrentIndex, CurrentIndex + productPerPage );

  const PageCount = Math.ceil(filteredProducts.length / productPerPage)
  const pages = [];
  for(let i = 1; i <= PageCount; i++){
    pages.push(i)
  }

  useEffect(() => {
    setProductCurrentPage(1);
  }, [category]);
  
  return (
    <div className='category-page'>
      <div className="category-page-inner inner">
        <h1 className="category-page-title">{categoryNames[category]}</h1>
        <div className='category-page-function'>
          <div className="enrolled-products">
            <span>등록제품</span>
            <em>:</em>
            <span><strong>{filteredProducts.length}</strong>개</span>
          </div>
          <div className='sort-option'>
            <button>신상품</button>
            <button>상품명</button>
            <button>낮은 가격</button>
            <button>높은 가격</button>
            <button>제조사</button>
            <button>사용 후기</button>
          </div>
        </div>
        <div className="products-list">
          {currentProducts.map((product, index) => (
            <ProductCards key={index} product={product} addToCart={addToCart}/>
          ))}
        </div>
        {/* 페이지네이션 버튼 */}
        <div className="category-products-pagination">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setProductCurrentPage(page)}
              className={productCurrentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage