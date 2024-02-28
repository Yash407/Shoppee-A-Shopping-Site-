import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitem = () => {
    const{getTotalCartAmount,all_product,cartItem,deleteFromCart}=useContext(ShopContext);
  return (
    <div className='cart'> 
      <div className="cart-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     
      
      {all_product.map((ele,i)=>{
        if(cartItem[ele.id]>0){
            return <div>
                <div className='cart-format cart-format-main'>
        <img className='carticon-product-icon' src={ele.image} alt="" />
        <p>{ele.name}</p>
        <p>${ele.new_price}</p>
        <button className='cart-quantity'>{cartItem[ele.id]}</button>
        <p>${ele.new_price*cartItem[ele.id]}</p>
        <img className='removeicon' src={remove_icon} onClick={()=>{deleteFromCart(ele.id)}} alt="" />
      </div>
      <hr />
   </div>
        }
        return null;
      })}
      <div className="cart-down">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-totalitems">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
          <div className="cart-totalitems">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-totalitems">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          </div>
          <button className='procced-btn'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
   
  )
}

export default Cartitem
