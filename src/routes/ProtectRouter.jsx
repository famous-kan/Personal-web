import React, { useEffect, useState } from 'react'
import useUserStore from '../stores/userStore'
import { Navigate } from "react-router-dom"
import axios from 'axios'

const ProtectRouter = ({element, allow}) => {
  const token = useUserStore((state) => state.token)
  const user = useUserStore((state) => state.user)
  const [isAllowed, setIsAllowed] = useState(null)
  
  useEffect(() => {
    checkRole()
  })
  
  const currentUser = (token) => axios.post('http://localhost:8000/auth/current-user',{},{
    headers:{
        Authorization: `Bearer ${token}`
    }
}) 


  const checkRole = async() => {
    try {
        const resp = await currentUser(token)
        if (resp.data.role !== "ADMIN"){
            setIsAllowed(false)
        }else if (resp.data.role === "ADMIN") {
            setIsAllowed(true)
        }
    } catch (err) {
        console.log(err)
        setIsAllowed(false)
    }
    }
    if(isAllowed === null){
    return <div>Loading...</div>
    }
    if(!isAllowed){
    return <Navigate to={'/unauthorization'} />
    }

    return (
    element
    )
}

export default ProtectRouter