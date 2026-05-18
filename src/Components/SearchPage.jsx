import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleCart from './SingleCart'


const SearchPage = ({ count, setCount }) => {

  const { shoeName } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchShoes = async () => {
      const ApiData = await fetch(
        'https://dummyjson.com/products/category/mens-shoes'
      )
      const response = await ApiData.json()
      const filtered = response.products.filter((e) =>
        e.title.toLowerCase().includes(
          shoeName.toLowerCase()
        )
      )
      setData(filtered)
    }
    fetchShoes()
  }, [shoeName])
  return (
   <>
  
   <div className='flex items-center justify-center '>
     <div className='flex flex-wrap gap-5 p-10 mt-5'>

      {data.length === 0 ? (
        <h2 className="text-2xl font-bold mt-50 ">
          Not Available ❌
        </h2>
      ) : (
        data.map((e) => (
          <SingleCart
            key={e.id}
            image={e.thumbnail}
            title={e.title}
            price={e.price}
            count={count}
            setCount={setCount}
          />
        ))
      )}

    </div>
   </div>
   </>
  )
}

export default SearchPage