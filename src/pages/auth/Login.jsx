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
      let res = await login(input)
      const role = res.user.role
      console.log( role)
      if(!(input.identity.trim() && input.password.trim())){
        return alert("Please fill in all input")
      }
      
      roleRedirect(role)
  
    } catch (err) {
      console.log(err)
      const errMsg = err.response?.data?.message || err.message
            console.log(errMsg)
          toast.error(errMsg)
    }
  }

  // const roleRedirect = (role) => {
  //   console.log(role)
  //   if(role === 'ADMIN'){
  //     navigate('/admin')
  //   }else{
  //     navigate('/user')
  //   }
  // }


  return (

    <>
    <div>
      <span>Login</span> 
      <form onSubmit={hdlSubmit} 
      className='flex flex-col gap-2'>
        <input 
        name = "identity"
        value = {input.identity}
        onChange={hdlChange} type="text" placeholder='Phone or email' className="input input-bordered input-primary w-full max-w-xs" />
        <input
        name = "password"
        value = {input.password}
        onChange={hdlChange} type="text" placeholder='password' className="input input-bordered input-primary w-full max-w-xs" />
        <button className='btn btn-primary w-24 m-2' >Submit</button>


        <div className='divider my-0' ></div>

        <button type='button' className='btn btn-secondary text-lg text-white w-fit mx-auto' 
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


    </>

  )
}
