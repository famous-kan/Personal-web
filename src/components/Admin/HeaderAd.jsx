import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAd = () => {
  return (
   <header className='bg-pink-300 h-14 flex items-center px-6'>
      
      <Link to = {'/'} className='hover:bg-slate-300' >HOME</Link>
   </header>
  )
}

export default HeaderAd