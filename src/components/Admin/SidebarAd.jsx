import React from 'react'
import { AiFillCloud } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import useUserStore from '../../stores/userStore'
import { useNavigate } from 'react-router-dom'

const SidebarAd = () => {
  const logout = useUserStore(state => state.logout)
  const navigate = useNavigate()
  const hdlLogout = () => {
    logout()
    navigate('/')
  }
  
  return (
    <div className='w-60 bg-pink-100 flex flex-col h-screen'>


      <div className='h-24 bg-red-200 flex items-center justify-center text-lg font-bold'>
        Admin Panel
      </div>

   
      <nav className='flex-1 px-4 py-4 space-y-2 w-full'>
        <NavLink 
        to={'/admin'}
        end
        className={({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full bg-pink-400 rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 rounded'
          }>
      <AiFillCloud className='h-14' />
        Update Profile
        </NavLink>
      
        <NavLink 
        to={'manage'}
        className={({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full bg-pink-400 rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 rounded'
          }>
      <AiFillCloud className='h-14' />
      Manage
        </NavLink>
     
        <NavLink 
        to={'product'}
        className={({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full bg-pink-400 rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 rounded'
          }>
      <AiFillCloud className='h-14' />
       Update Product
        </NavLink>

        <NavLink 
        to={'order'}
        className={({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full bg-pink-400 rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 rounded'
          }>
      <AiFillCloud className='h-14' />
       Orders
        </NavLink>


        </nav>
   
          <div>


            
          <NavLink 
          onClick={hdlLogout}
        className= {({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full bg-pink-400 rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 rounded'
          }>
       
       Logout
        </NavLink>
          </div>


    </div>
  )
}

export default SidebarAd