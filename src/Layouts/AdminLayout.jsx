import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAd from '../components/Admin/SidebarAd'
import HeaderAd from '../components/Admin/HeaderAd'

const AdminLayout = () => {
  return (
    <div className='flex h-screen'>
        <SidebarAd />
        <div className='flex flex-col flex-1'>
          <HeaderAd />
          <main className='flex-1 p-6 bg-slate-900 overflow-y-auto'>
          <Outlet />
          </main>
        </div>


    </div>
  )
}

export default AdminLayout