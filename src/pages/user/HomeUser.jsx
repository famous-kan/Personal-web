import React from 'react'
import useUserStore from '../../stores/userStore'
import EditProfileUser from '../../components/User/EditProfileUser'
import { useState, useEffect } from 'react'
const HomeUser = () => {
    const user = useUserStore(state => state.user)
    const profileImage = useUserStore(state => state.profileImage)
    const setprofileImage = useUserStore(state => state.setprofileImage)
    console.log(user)


      useEffect(() => {
        setprofileImage(profileImage)
        // console.log(profileImage)
        // settestImage(profileImage)
    },[user, profileImage])

  console.log(profileImage)

  return (
    <div className='flex flex-col gap-4'>
      
      <div className='relative '>
      <img src="https://i.pinimg.com/1200x/77/aa/b1/77aab1383d579b57fcd59c7a4c000e1f.jpg" className='w-full h-[600px]' alt="" />
      </div>
      <div>
        <em className=' absolute top-[300px] left-[200px] flex justify-center text-center flex-col text-[80px]'>Your profile</em>
      </div>

      <div className=' absolute top-[400px] left-[130px] text-black flex flex-col justify-center items-center gap-4  p-4 w-fit mx-auto'>

      <div className='flex justify-center items-center gap-10 p-4'>
        <div>
      <img src={profileImage} alt="" className='h-60 w-60 rounded-full' />
        </div>
        <div className='flex flex-col text-xl gap-4  w-fit'>
       <p className='bg-slate-300 w-fit p-2 opacity-80 rounded-full'>Name: {user.firstName} {user.lastName}</p>
       <p className='bg-slate-300 w-fit p-2 opacity-80 rounded-full'>Email/phone : {user.email || user.mobile}</p> 
        </div>
      </div>

      <button type='button' className='btn  text-lg  w-fit mx-auto' 
                 onClick={() => document.getElementById('editUser-modal').showModal()}
                 >Update profile
      </button>

      <dialog id="editUser-modal" className="modal">
        <div className="modal-box">
            <button 
            type='button'
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={e=>e.target.closest('dialog').close()}
            >✕</button>
            <EditProfileUser />
            
        </div>
    </dialog>


      <div>
        {/* <img src="/src/assets/sunflower.png" alt="" className='h-30 w-30'/> */}
      </div>

      </div>
    </div>

  )
}

export default HomeUser