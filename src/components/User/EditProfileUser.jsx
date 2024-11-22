import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import useUserStore from '../../stores/userStore'

const EditProfileUser = () => {
    const token = useUserStore((state) => state.token);
    const setUser = useUserStore(state => state.setUser)
    const setprofileImage = useUserStore(state => state.setprofileImage)
    const user = useUserStore(state => state.user)
    const profileImage = useUserStore(state => state.profileImage)
    const [file, setFile] = useState(null)
    const [input,SetInput] = useState({
        newIdentity : '',
        newFirst : '',
        newLast : '',
        newPassword : '',
        newConfirmPassword: ''
    })
    
    useEffect(() => {
        setprofileImage(profileImage)
    },[user,profileImage])

    const URL = import.meta.env.VITE_API_URL

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

            const body = new FormData
            if (!!input.newIdentity) body.append('newIdentity',input.newIdentity)
            if (!!input.newFirst) body.append('newFirst',input.newFirst)
            if (!!input.newLast) body.append('newLast',input.newLast)
            if (!!input.newPassword) body.append('newPassword',input.newPassword)
            if (!!input.newConfirmPassword) body.append('newConfirmPassword',input.newConfirmPassword)
            if (!!file) body.append('image',file)

            if(input.newPassword !== input.newConfirmPassword){
                return toast.error('Password is not matched')
            }
            const result = await axios.patch(`${URL}/user`, body , {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            SetInput({
                newIdentity : '',
                newFirst : '',
                newLast : '',
                newPassword : '',
                newConfirmPassword: '' 
            })
            // console.log(result)
            setUser(result.data.editUser)
            setprofileImage(result.data.editUser.profileImage || "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg")
            e.target.closest('dialog').close()
            setErrMsg({message: '', isError: false})
            toast.success('Update successfully')
        } catch (err) {
            console.log(err)
            toast.error(err.response?.data?.message)
            setErrMsg({message : err.response?.data?.err, isError: true})
        }
    }


  return (
    <div>

        <div className='flex flex-col justify-center items-center bg-teal-100 m-2 rounded-md'>
            <em className='text-3xl my-2'>Update profile</em>
            <form className= 'm-1 gap-3 flex flex-col w-3/5' onSubmit={hdlSubmit}>
                <input type="text" placeholder='Email or Phone' className='input input-bordered '
                    name='newIdentity'
                    value={input.newIdentity}
                    onChange={hdlChange} />
                <input type="text" placeholder='First name' className='input input-bordered '
                        name='newFirst'
                        value={input.newFirst}
                        onChange={hdlChange} />
                <input type="text" placeholder='Last name' className='input input-bordered '
                        name='newLast'
                        value={input.newLast}
                        onChange={hdlChange} />
                <input type="password" placeholder='password' className='input input-bordered '
                        name='newPassword'
                        value={input.newPassword}
                        onChange={hdlChange} />
                <input type="password" placeholder='confirm password' className='input input-bordered '
                        name='newConfirmPassword'
                        value={input.newConfirmPassword}
                        onChange={hdlChange} />
                    
                    Image :
                    <input
                    type="file"
                    id="myFile"
                    name="image"
                    className='file-input file-input-bordered w-full max-w-xs'
                    onChange={(e) => setFile(e.target.files[0])}
                    ></input>

                    { 
                            errMsg.isError ? 
                            <p>{errMsg.message}</p>
                            
                            : <></>

                    }
                    <button className=' m-2 btn text-xl '>Update</button>

            </form>
        </div>
    </div>
  )
}
export default EditProfileUser