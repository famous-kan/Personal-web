import React from 'react'
import { Link } from 'react-router-dom'
import { FaHouseUser } from "react-icons/fa";
import { PiFlowerTulipBold } from "react-icons/pi";

const HeaderAd = () => {
  return (
   <header className='bg-teal-800 text-white h-20 flex items-center px-6 gap-3'>
      
      <div className='flex flex-col justify-center items-center'>
      <FaHouseUser className='w-10 h-10 ' />
      <Link to = {'/'} className='flex justify-center items-center hover:bg-slate-300 hover:text-black w-[70px] h-[20px]' >HOME</Link>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <PiFlowerTulipBold className='w-10 h-10 ' />
      <Link to = {'/shop'} className='flex justify-center items-center hover:bg-slate-300 hover:text-black w-[80px] h-[20px]' >PRODUCTS</Link>
      </div>

   </header>
  )
}

export default HeaderAd