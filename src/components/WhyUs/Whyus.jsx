import React from 'react'
import whyImg from '../../assets/Images/BackgroundImg/Whyus.avif'

import "./whyUs.css"
function Whyus  () {
  return (
    <div className='WhyUs'>
        <div className='WhyHead'>Why Us</div>
        <div className='WhyPara'>
            <p>
            At A. Synctom, we pride ourselves on offering a diverse range of premium footwear crafted with the finest materials. Our shoes combine comfort, durability, and style to elevate your fashion game. Whether you're looking for classic pumps or trendy sneakers, we have something for every taste and occasion. Experience the perfect blend of quality and fashion at A. Synctom.
            </p>
           <div className='WhyParaBtnDiv'> <button className='WhyParaBtn'>Explore More</button></div>
        </div>
        <div className='WhyImg'>
            <img src={whyImg}></img>
        </div>
    </div>
  )
}


export default Whyus;