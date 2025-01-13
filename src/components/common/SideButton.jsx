import React from 'react'
import { Link } from 'react-router-dom'
import { RiKakaoTalkFill, RiInstagramLine } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";

/* Css */
import "../../styles/components/common/SideButton.css"

const SideButton = () => {
  return (
    <div className='side-button'>
      <div className='kakao'>
        <Link to="">
          <RiKakaoTalkFill />
        </Link>
      </div>
      <div className='insta'>
        <Link to="">
          <RiInstagramLine />
        </Link>
      </div>
      <div className='go-to-top'>
        <Link to="#">
          <IoArrowUp />
        </Link>
      </div>
    </div>
  )
}

export default SideButton