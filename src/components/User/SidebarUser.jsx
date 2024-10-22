import React from 'react'
import { NavLink } from 'react-router-dom';
import useUserStore from '../../stores/userStore'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaLessThan } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";





const SidebarUser = () => {
    const logout = useUserStore(state => state.logout)
    const profileImage = useUserStore(state => state.profileImage)
    const navigate = useNavigate()
    const hdlLogout = () => {
        logout()
        navigate('/')
      }

    return (
        <div className='w-60 bg-orange-100 flex flex-col h-screen'>

          <div className=' flex justify-center m-3 '>
          
            {/* <Link to = {'/'}>
              <div className='flex justify-center items-center '>
              {/* <FaLessThan className='h-6 w-6' /> */}
              {/* <IoMdHome  className='h-10 w-10' /> */}
              {/* </div> */}
            {/* </Link> */}

              <img  
              src={profileImage} alt="" 
              className=' rounded-full w-[90px] h-[90px]'
              />
          </div>
    
       
          <div className='flex-1 px-4 py-4 space-y-2 w-full'>
          <NavLink 
        to={'/user'}
        className={({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full h-14 bg-orange-400 rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full h-14 flex items-center gap-3 rounded'
          }>
          Update profile
        </NavLink>
            
            <NavLink 
        to={'status'}
        className={({isActive}) => 
          isActive
          ? ' hover:bg-pink-200 w-full h-14 bg-orange-400  rounded-md flex items-center gap-3'
          : ' hover:bg-slate-100 w-full h-14 flex items-center gap-3 rounded'
          }>
          Order/Status delivery
        </NavLink>
            </div>
      
       
              <div className='flex items-center gap-3 justify-center m-3'>
              <NavLink 
              onClick={hdlLogout}
            className= 'btn h-16 w-16 rounded-full text-white bg-pink-950 border-none '>
           Logout
            </NavLink>
              </div>
    
    
        </div>
    )
}

export default SidebarUser




