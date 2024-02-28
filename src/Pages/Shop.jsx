import React from 'react'
import Homepage from '../Components/Homepage/Homepage'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollection/Newcollection'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Homepage/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop
