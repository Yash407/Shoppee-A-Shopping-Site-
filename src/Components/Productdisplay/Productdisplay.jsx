import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Productdisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="pdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="pdisplay-img">
                    <img className='product-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="pdisplay-right">
                <h1>{product.name}</h1>
                <div className="pdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="pdisplay-right-prices">
                    <div className="pdisplay-right-old-price">
                        ${product.old_price}
                    </div>
                    <div className="pdisplay-right-new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="pdisplay-right-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit tempora aut vero ex molestias amet nesciunt, commodi modi est repellendus.
                </div>
                <div className="pdisplay-product-size">
                    <h1>Select Size</h1>
                    <div className="pdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
              <p className="pdisplay-right-category"><span>Category:</span>Women, T-Shirt, Crop Top</p>
            </div>
        </div>
    )
}

export default Productdisplay
