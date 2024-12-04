import React from 'react'
import { Link } from 'react-router-dom'
import correct from '../assets/correct.png'

const OrderComplete = () => {
  return (
    <div>
      <div className='bg-slate-200 flex flex-col gap-3 w-2/5 h-80 items-center mx-auto my-10 rounded-2xl'>
        
          <img src={correct} alt="correct" className='h-20 mt-5' />
          <div className='flex flex-col gap-2 justify-center items-center'>
              <p className='text-xl'>
                Thank you for your orders
                </p> 
              <p>
                We wil send you a notification within 5 days when it ships
                </p> 
              <p>
                if you have any question, feel free to get in contact us.
                </p> 
          </div>

          <div>
                  <Link to = {'/'}>
                  <p className='btn btn-success text-white' >Home</p>
                  </Link>
              </div>

         
      </div>
    
    
    </div>
  )
}

export default OrderComplete