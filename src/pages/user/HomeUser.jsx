import React from 'react'
import useUserStore from '../../stores/userStore'
import EditProfileUser from '../../components/User/EditProfileUser'

const HomeUser = () => {
    const user = useUserStore(state => state.user)
    const profileImage = useUserStore(state => state.profileImage)
console.log(user)


  return (
    <div className='flex flex-col gap-10'>
      <p>Your profile</p>
      
      <div className='flex flex-col justify-center items-center gap-4'>

      <div className='flex justify-center items-center gap-10'>
        <div>
      <img src={profileImage} alt="" className='h-60 w-60 rounded-full' />
        </div>
        <div className='flex flex-col text-xl gap-4'>
       <p>Name: {user.firstName} {user.lastName}</p>
       <p>Email/phone : {user.email || user.mobile}</p> 
        </div>
      </div>

      <button type='button' className='btn btn-secondary text-lg text-white w-fit mx-auto' 
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
        <img src="/src/assets/sunflower.png" alt="" className='h-30 w-30'/>
      </div>

      </div>
    </div>

  )
}

export default HomeUser