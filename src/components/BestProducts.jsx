import React, {useState} from 'react'
import ProductCards from './ui/ProductCards'
import Title from './main/Title'

/* json 파일 불러오기 */
import products from '../components/data/products.json'

/* Css */
import "../styles/components/BestProducts.css"

const BestProducts = ( {addToCart} ) => {
  const bestPerRow = 8; //한 페이지에 보여줄 갯수
  const [bestCurrentPage, setBestCurrentPage] = useState(1) //현재 페이지

  //isBest가 true인 상품만 추출
  const bestproducts = products.filter((product) => product.isBest);

  //페이지에 해당하는 상품 보여주기
  const bestCurrentIndex = (bestCurrentPage - 1) * bestPerRow;
  const bestCurrentProducts = bestproducts.slice(bestCurrentIndex, bestCurrentIndex + bestPerRow);

  //페이지네이션 수
  const bestPageCount = Math.ceil(bestproducts.length / bestPerRow)
  const bestPages = [];
  for(let i = 1; i <= bestPageCount; i++){
    bestPages.push(i)
  }

  /* 
  0  0 ~ 7
  8  8 ~ 15
  16 16 ~ 23
  24 
  */
  /*
  currentpage 1
  0 = 0 * 8
    = [0, 8] 0 1 2 3 4 5 6 7
  currentpage 2
  8 = 1 * 8
    = [8 16] 8 9 10 11 12 13 14 15
  */

  return (
    <div className='best-products'>
      <div className="best-products-wrap inner">
        <Title title="best product" subtitle="이번 주 저희 쇼핑몰 베스트 상품입니다." />
        <div className="best-products-list">
          {bestCurrentProducts.map((product, index) => (
            <ProductCards key={index} product={product} addToCart={addToCart}/>
          ))}
        </div>
        {/* 페이지네이션 버튼 */}
        <div className="best-products-pagination">
          {bestPages.map((page) => (
            <button
              key={page}
              onClick={() => setBestCurrentPage(page)}
              className={bestCurrentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestProducts