import React from 'react'
import { DollarSign } from 'lucide-react';

const SingleCart = (props) => {
const addToCart = () => {
  const product = {
    image:props.image,
       title: props.title,
        price: props.price
  }
const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
existingCart.push(product)
localStorage.setItem('cart', JSON.stringify(existingCart))
props.setCount(props.count + 1)

}

  return (
    <div>
      
<div className='bg-[#F5F5F5] gap-1 h-110 w-80 flex flex-col  items-center rounded '>
  <img  src={props.image}/>
  <div>
    <p>{props.title}</p>
    <p>{`$${props.price}`}</p>
    <div>
<button className='h-10 w-70 cursor-pointer bg-[#111111] text-white flex items-center justify-center rounded-xl'
onClick={addToCart}
>Add to Cart</button></div>
</div>
  </div>
  
    </div>
  )
}

export default SingleCart