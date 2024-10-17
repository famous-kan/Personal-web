import React from 'react'
import { NavLink } from 'react-router-dom';
import useUserStore from '../../stores/userStore'
import { useNavigate } from 'react-router-dom'





const SidebarUser = () => {
    const logout = useUserStore(state => state.logout)
    const navigate = useNavigate()
    const hdlLogout = () => {
        logout()
        navigate('/')
      }

    return (
        <div className='w-60 bg-pink-100 flex flex-col h-screen'>
    
    
          <div className=' w-14 h-14 bg-red-200 flex items-center justify-center text-lg font-bold rounded-full '>
           <img  
           src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="" 
           className=' rounded-full w-14 h-14'
           />
          </div>
    
       
          <div className='flex-1 px-4 py-4 space-y-2 w-full'>
         
            Update Profile
          
          
            </div>
       
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

export default SidebarUser




