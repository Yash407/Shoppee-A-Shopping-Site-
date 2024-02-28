import React from 'react'
import './Relatedproducts.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'
const Relatedproducts = () => {

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
       {data_product.map((ele,i)=>{
        return <Items key={i} id={ele.id} name={ele.name} image={ele.image} new_price={ele.new_price} old_price={ele.old_price}/>
       })}
      </div>
    </div>
  )
}

export default Relatedproducts
