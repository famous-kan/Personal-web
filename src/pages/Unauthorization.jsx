import React from 'react'
import { useNavigate } from "react-router-dom"

const Unauthorization = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="cont-404">
        <img src='src/assets/404.svg' alt="svg" className='h-[400px] flex justify-center mx-auto' />
        <button className='btn flex mx-auto m-10 text-xl bg-slate-500 text-white shadow-2xl' onClick={()=> navigate('/')} >Back to Home</button>
    </div>
</>
  )
}

export default Unauthorization