
import SingleCart from './SingleCart';
import { useEffect } from 'react';
import { useState } from 'react';





const Cards = ({ count, setCount }) => {
 
const [Data, setData] = useState([])

   useEffect(() => {


    const Sneaker = async () => {

      const ApiData = await fetch(
        'https://dummyjson.com/products/category/mens-shoes'
      )
      const response = await ApiData.json()
      console.log(response)
      setData(response.products)

    }

   
      Sneaker();
    

   

  }, []);
  return (
  <>
  <div className='font-bold h-15 w-full text-4xl text-start mt-5 ml-22'>NEW ARRIVAL</div>
    <div className='flex items-center justify-center gap-5 flex-wrap' >
    
{Data.slice(0, 4).map((e)=> (
  <SingleCart
       key={e.id}
       image={e.thumbnail || e.images?.[0]}
       title={e.title}
       price={e.price}
        count={count}
  setCount={setCount}
  />
))}
    </div>
  </>
  )
}

export default Cards