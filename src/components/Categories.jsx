import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/components/Categories.css"

const Categories = () => {

  const categorylists = [
    {
      title : '악세서리',
      imageUrl : '/assets/images/categories-01.jpg',
      category : 'accessory',
    },
    {
      title : '디지털',
      imageUrl : '/assets/images/categories-02.jpg',
      category : 'digital'
    },
    {
      title : '홈데코',
      imageUrl : '/assets/images/categories-03.jpg',
      category : 'homedeco'
    },
    {
      title : '뷰티',
      imageUrl : '/assets/images/categories-04.jpg',
      category : 'beauty'
    },
    {
      title : '키친',
      imageUrl : '/assets/images/categories-05.jpg',
      category : 'kitchen'
    },
    {
      title : '스포츠',
      imageUrl : '/assets/images/categories-06.jpg',
      category : 'sports'
    },
    {
      title : '애완동물',
      imageUrl : '/assets/images/categories-07.jpg',
      category : 'pet'
    },
    {
      title : '자동차용품',
      imageUrl : '/assets/images/categories-08.jpg',
      category : 'car-accessory'
    },
  ]
  return (
    <div className='categories'>
      <div className="categories-inner">
        <ul className='category-lists'>
            {categorylists.map((categorylist, index) => (
              <li className='category-list' key={index}>
                <Link to={`/${categorylist.category}`} >
                  <img src={categorylist.imageUrl} alt="Category-Image" />
                  <span>{categorylist.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories