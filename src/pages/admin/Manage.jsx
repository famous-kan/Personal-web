import React, { useEffect } from 'react'
import useAuthStore from '../../stores/authStore'
import useUserStore from '../../stores/userStore'
import { toast } from 'react-toastify'

const Manage = () => {
  const getAlluser = useAuthStore(state => state.getAlluser)
  const member = useAuthStore(state => state.member)
  const token =useUserStore( state=> state.token)
  const updateRole = useAuthStore(state => state.updateRole)
  const user = useUserStore(state => state.user)
  const deleteUser = useAuthStore(state => state.deleteUser)
  
  
  
  useEffect(() => {
    getAlluser(token)

  },[])

   const hdlUpdateUser = async(e,id) => {
      const role = e.target.value 
      console.log(role)
      const update = await updateRole(id,role,token)
      toast.success("Update role successfully")
   }

  const hdlRemoveUser = async(id) => {
    const remove = await deleteUser(id,token)
    await getAlluser(token)
    toast.success("Delete successfully")
  }


  return (
    <div className=' flex flex-col'>
      <em className='text-white text-4xl my-3 flex items-center justify-center '>Manage</em> 

      <div><table className="table">
    <thead>
      <tr className='text-xl'>
        <th scope="col">No.</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      
    {
      member.map((el, index)=> {
        return(
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{el.email || el.mobile}</td>
            
            <td>

            {
              el.id === user.id 
              ? <p>CAN'T CHANGE (THIS IS YOUR ACCOUNT)</p>
              
              :  <select className="select select-bordered" onChange={(e)=>hdlUpdateUser(e,el.id)} defaultValue={el.role}>
          <option>ADMIN</option>
          <option>USER</option>
          </select>

            }

        
            </td>

            <td> 
            <button className="btn  btn-primary" onClick={() => hdlRemoveUser(el.id) }> Delete </button>
            </td>
          </tr>

      )
    }
    )}

    
  
    </tbody>
  </table></div>


    </div>
  )
}

export default Manage