import React from 'react'
import './Newcollection.css'
import new_collection from '../Assets/new_collections'
import Items from '../Items/Items'
const Newcollection = () => {
  return (
    <div className='new-collecton'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collection">
         {new_collection.map((ele,i)=>{
            return <Items key={i} id={ele.id} name={ele.name} image={ele.image} new_price={ele.new_price} old_price={ele.old_price}/>
         })}
        </div>
      
    </div>
  )
}

export default Newcollection
