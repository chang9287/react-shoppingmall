import React from 'react'
import "../../styles/components/main/Title.css"

const Title = ({title, subtitle}) => {
  return (
    <div className='section-title'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Title