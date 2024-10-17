import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav'
import SidebarUser from '../components/User/SidebarUser'
import HeaderUser from '../components/User/HeaderUser'

const UserLayout = () => {
  return (
  
      <div className='flex h-screen'>
      <SidebarUser />
      <div className='flex flex-col flex-1'>
        <HeaderUser />
        <main className='flex-1 p-6 bg-slate-300 overflow-y-auto'>
        <Outlet />
        </main>
      </div>
      </div>
  )
}

export default UserLayout