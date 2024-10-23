import React, { useState } from 'react'
import useUserStore from '../../stores/userStore'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import Register from './Register'

export default function Login() {
  const navigate = useNavigate()
  const login = useUserStore(state => state.login)
  const [input, setInput] = useState({
    identity : '',
    password: ''
  })

  const [checkInput, setCheckinput] = useState({
    identity : true,
    password: true
  })

  const hdlChange = async e =>{
    setInput(prev => ({...prev,[e.target.name]: e.target.value}))

}

  const roleRedirect = (role) => {
    if(role === 'ADMIN'){
      navigate('/admin')
    } else{
      navigate('/')
    }
  }

  const hdlSubmit = async(e) => {
    try {
      e.preventDefault()
      let isAllSubmit = {}
      Object.entries(input).forEach(([key,value]) => {
        isAllSubmit[key] = !!value.trim()
      });
      setCheckinput(isAllSubmit)
      
      let res = await login(input)
      const role = res.user.role
      if(!(input.identity.trim() && input.password.trim())){
        return alert("Please fill in all input")
      }
      setCheckinput(isAllSubmit)
      roleRedirect(role)
  
    } catch (err) {
      console.log(err)
      const errMsg = err.response?.data?.message || err.message
          console.log(errMsg)
          toast.error(errMsg)
    }
  }

  return (

    <div>



        <div className='relative'>
      <img className='w-full h-[550px]' src="https://static.wixstatic.com/media/11062b_67fcbfcd9a2547c48a2d51c649bb7e16~mv2.jpg/v1/fill/w_1333,h_739,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_67fcbfcd9a2547c48a2d51c649bb7e16~mv2.jpg" alt="" />
        </div>

        <div className='absolute top-[250px] left-[450px] p-10 flex flex-col justify-center items-center gap-4 bg-white opacity-95 shadow-2xl w-[600px] h-[400px]'>
          <em className='text-4xl'>Login</em> 
          <form onSubmit={hdlSubmit} 
          className='flex flex-col gap-2'>
            <input 
            name = "identity"
            value = {input.identity}
            onChange={hdlChange} type="text" placeholder='Phone or email' 
            className="input input-bordered w-[300px] bg-red-100 " />
             {checkInput.identity ? <></>  : <p className='text-xs text-red-500'>Fill your Phone or Email!</p>}


            <input
         
            name = "password"
            value = {input.password}
            onChange={hdlChange} type="password" placeholder='password' 
            className="input input-bordered w-[300px] bg-red-100 " />
            {checkInput.password ? <></>  : <p className='text-xs text-red-500'>Fill your Password!</p>}


            <button className='btn hover:bg-rose-400 hover:text-white text-lg w-[300px]  text-center my-3' >Submit</button>


            <div className='divider my-0' ></div>



            <button type='button' className='underline w-fit mx-auto' 
                    onClick={() => document.getElementById('register-modal').showModal()}
                    >Create new account</button>
          
          </form>
          </div>

              
              <dialog id="register-modal" className="modal">
                <div className="modal-box">
                    <button 
                    type='button'
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={e=>e.target.closest('dialog').close()}
                    >✕</button>
                    <Register />
                    
                </div>
              </dialog>


    </div>

  )
}
