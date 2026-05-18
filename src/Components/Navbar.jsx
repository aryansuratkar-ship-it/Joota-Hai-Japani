import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';



const Navbar = ({ count }) => {
   const navigate = useNavigate()

const [search, setSearch] = useState('')
 const handleSearch = () => {

  navigate(`/search/${search}`)

}

  return (
    <div
    className='h-16 w-full bg-[#ffffff] text-black fixed flex items-center justify-between '
    >
      {/* logo div */}
  <div className='h-8 w-20  mb-4 ml-15'>
      <img src='logo.png'/>
  </div>

  {/* bich ke a as */}
  <div className='h-16 w-[600px] ml-10 flex items-center gap-10 text-xl font-bold'>

 <a >New & Featured</a>
 <a > Men</a>
 <a > Women</a>
  <a > Kids</a>
  <a > Style</a>
  

  </div>

  {/* search input and icons */}
  <div className='flex items-center justify-center gap-6 mr-5 h-15 w-[400px]'>
<div className='flex items-center justify-center '>
  <input type='text'
   placeholder='Search'
    value={search}
  onChange={(e) => setSearch(e.target.value)}
 className='h-8 w-60 bg-[#E5E5E5] rounded-l-lg outline-none px-2 font-Futura Bold Condensed Oblique pl-3'/>
 <div 
  onClick={handleSearch}
 className='bg-[#E5E5E5] h-8 w-8 rounded-r-lg flex items-center justify-center pr-2 cursor-pointer '>  
    <Search /></div>
</div>
 <div className='flex flex-col-reverse'>  <ShoppingCart className='cursor-pointer fixed' />
  <span className='  h-4 w-4 rounded-full flex items-center justify-center font-bold ml-1.5 mb-4 text-xs'>
          {count}
        </span>
 </div>
 <div> <EllipsisVertical /></div>
    
  </div>

    </div>
  )
}

export default Navbar