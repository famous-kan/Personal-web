import axios from "axios";
import { create } from "zustand";


const useAuthStore = create((set,get) => ({
    member : [],
    editUserdata : async() => {
        try {
            let {setUser} = useUserStore.getState()
            const editResult = await axios.patch(`http://localhost:8000/user/${id}`, body , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setUser(editResult.data)
            console.log(editResult)      
        } catch (error) {
            console.log(error)
        }
    },
    getAlluser : async(token) => {
        const result = await axios.get('http://localhost:8000/user/member', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(result)
        set({ member: result.data })
    },

    updateRole : async(id,role,token) => {
        const result = await axios.patch(`http://localhost:8000/user/member/${id}`,{role}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        // console.log(result)
    },
    deleteUser : async(id,token) => {
        const {getAlluser} = get()
        const result = await axios.delete(`http://localhost:8000/user/member/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(result)
        await getAlluser(token)
    }


}))

export default useAuthStore