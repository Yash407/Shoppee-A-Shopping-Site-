import React, { useContext } from 'react'
import './Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> 
           <span> </span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
         {
          all_product.map((ele,i)=>{
             if(props.category===ele.category){
              return <Items key={i} id={ele.id} name={ele.name} image={ele.image} new_price={ele.new_price} old_price={ele.old_price} />}
           else {
            return null;
           }            
            })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
