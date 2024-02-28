import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      Home <img style={{width:"5px"}} src={arrow_icon} alt="" />  {product.category} <img style={{width:"5px"}} src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
