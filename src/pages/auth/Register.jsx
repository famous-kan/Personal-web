import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Register() {

    const [input,SetInput] = useState({
        identity : '',
        firstName : '',
        lastName : '',
        password : '',
        confirmPassword: '' 
    })
    
    const [errMsg, setErrMsg] = useState({
        isError : false,
        message : ''
    })


    const hdlChange= e => {
        SetInput(prev => ({...prev, [e.target.name] : e.target.value}))
    }


    const hdlSubmit = async(e) => {
        try {
            e.preventDefault()

            if(!(input.identity.trim() &&
            input.firstName.trim() &&
            input.lastName.trim() &&
            input.password.trim() &&
            input.confirmPassword.trim())){
                return toast.error("Please fill in all input")
            }


            if(input.password !== input.confirmPassword){
                return toast.error('Password is not matched')
            }


            const result = await axios.post('http://localhost:8000/auth/register', input)
            SetInput({
                identity : '',
                firstName : '',
                lastName : '',
                password : '',
                confirmPassword: '' 
            })
            console.log(result)
            e.target.closest('dialog').close()
            setErrMsg({message: '', isError: false})
            toast.success('Register successfully')

        } catch (err) {
            console.log(err)
            toast.error(err.response?.data?.message)
            setErrMsg({message : err.response?.data?.err, isError: true})
        }
    }


  return (
    <div>
        <div className='flex flex-col justify-center items-center bg-red-100 m-2 rounded-md'>
            <em className='text-3xl my-2'>Register</em>


            <form className= 'my-2 gap-3 flex flex-col w-3/5' onSubmit={hdlSubmit}>
            <input type="text" placeholder='Email or Phone' className='input input-bordered '
                name='identity'
                value={input.identity}
                onChange={hdlChange} />
            <input type="text" placeholder='First name' className='input input-bordered '
                    name='firstName'
                    value={input.firstName}
                    onChange={hdlChange} />
            <input type="text" placeholder='Last name' className='input input-bordered '
                    name='lastName'
                    value={input.lastName}
                    onChange={hdlChange} />
            <input type="password" placeholder='password' className='input input-bordered '
                    name='password'
                    value={input.password}
                    onChange={hdlChange} />
            <input type="password" placeholder='confirm password' className='input input-bordered '
                    name='confirmPassword'
                    value={input.confirmPassword}
                    onChange={hdlChange} />
                { 
                        errMsg.isError ? 
                        <p>{errMsg.message}</p>
                        
                        : <></>

                }
                <button className='btn hover:bg-rose-400 hover:text-white text-lg text-center my-3' >Sign Up</button>
            </form>
        </div>
    </div>
  )
}
