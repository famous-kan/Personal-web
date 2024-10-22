import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import useUserStore from '../../stores/userStore'
import { useNavigate } from 'react-router-dom'
import { HiMiniCog8Tooth } from "react-icons/hi2";

const SidebarAd = () => {
  const logout = useUserStore(state => state.logout)
  const navigate = useNavigate()
  const setCart = useUserStore(state => state.setCart)
  const hdlLogout = () => {
    navigate('/')
    logout()
  }
  
  return (
    <div className='w-60 bg-teal-200 flex flex-col h-screen'>


      <div className='h-20 bg-teal-500 flex items-center justify-center text-lg font-bold'>
        Admin Panel
      </div>

   
      <nav className='flex-1 space-y-2 w-full'>
        <NavLink 
        to={'/admin'}
        end
        className={({isActive}) => 
          isActive
          ? ' w-full bg-slate-700 text-white  flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 '
          }>
      <HiMiniCog8Tooth className='h-14 mx-3' />
        Update Profile
        </NavLink>
      
        <NavLink 
        to={'manage'}
        className={({isActive}) => 
          isActive
            ? ' w-full bg-slate-700 text-white  flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 '
          }>
      <HiMiniCog8Tooth className='h-14 mx-3' />
      Manage
        </NavLink>
     
        <NavLink 
        to={'product'}
        className={({isActive}) => 
          isActive
            ? ' w-full bg-slate-700 text-white  flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 '
          }>
      <HiMiniCog8Tooth className='h-14 mx-3' />
       Update Product
        </NavLink>

        <NavLink 
        to={'order'}
        className={({isActive}) => 
          isActive
          ? ' w-full bg-slate-700 text-white  flex items-center gap-3'
          : ' hover:bg-slate-100 w-full flex items-center gap-3 '
          }>
      <HiMiniCog8Tooth className='h-14 mx-3' />
       Orders
        </NavLink>


        </nav>
   
          <div>


            
          <NavLink 
          onClick={hdlLogout}
        className= {({isActive}) => 
          isActive
          ? 'text-lg justify-center flex mx-auto my-5 w-[80px] h-[80px] bg-slate-200 border items-center rounded-full hover:bg-slate-800 hover:text-white'
          : ''
          }>
       
       Logout
        </NavLink>
          </div>


    </div>
  )
}

export default SidebarAd