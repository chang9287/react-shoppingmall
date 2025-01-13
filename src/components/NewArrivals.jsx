import React, {useState} from 'react'
import ProductCards from './ui/ProductCards'
import Title from './main/Title'

/* json 파일 불러오기 */
import products from '../components/data/products.json'

/* Css */
import "../styles/components/NewArrivals.css"

const NewArrivals = () => {
  const newPerRow = 8; //한 페이지에 보여줄 갯수
  const [newCurrentPage, setNewCurrentPage] = useState(1)
  
  //isNew가 true인 상품만 추출
  const newproducts = products.filter((product) => product.isNew);

  //페이지에 해당하는 상품 보여주기
  const newCurrentIndex = (newCurrentPage - 1) * newPerRow;
  const newCurrentProducts = newproducts.slice(newCurrentIndex, newCurrentIndex + newPerRow);

  //페이지네이션 수
  const newPageCount = Math.ceil(newproducts.length / newPerRow)
  const newPages = [];
  for(let i = 1; i <= newPageCount; i++){
    newPages.push(i)
  }

  return (
    <div className='new-arrivals'>
      <div className="new-arrivals-wrap inner">
        <Title title="new arrivals" subtitle="새롭게 추가된 상품들 확인해보세요!!" />
        <div className="new-products-list">
          {newCurrentProducts.map((product, index) => (
            <ProductCards key={index} product={product} />
          ))}
        </div>
        {/* 페이지네이션 버튼 */}
        <div className="new-products-pagination">
          {newPages.map((page) => (
            <button
              key={page}
              onClick={() => setNewCurrentPage(page)}
              className={newCurrentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewArrivals