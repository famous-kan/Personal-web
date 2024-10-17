import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default function Layout () {
  return (
    <div className='flex flex-col min-h-screen'>
      <MainNav />

      <hr />
      <div className='flex-1'>
      <Outlet />

      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}
