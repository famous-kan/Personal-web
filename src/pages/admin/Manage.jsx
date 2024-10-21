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
    // await getAlluser(token)
    toast.success("Delete successfully")
  }


  return (
    <div>
      <p>Manage</p> 

      <div><table className="table">
    <thead>
      <tr>
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
              ? <></>
              
              :  <select className="select select-primary select-xs" onChange={(e)=>hdlUpdateUser(e,el.id)} defaultValue={el.role}>
          <option>ADMIN</option>
          <option>USER</option>
          </select>

            }

        
            </td>

            <td> 
            <button className="btn btn-xs text-white btn-primary" onClick={() => hdlRemoveUser(el.id) }> Delete </button>
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