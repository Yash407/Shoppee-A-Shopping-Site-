import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts';

const Products = () => {
  const {all_product}=useContext(ShopContext);
  const{productId}=useParams();
  const product= all_product.find((e)=> e.id=== Number(productId)); 
   return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox />
      <Relatedproducts/>
    </div>
  )
}

export default Products
