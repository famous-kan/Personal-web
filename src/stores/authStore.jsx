import axios from "axios";
import { create } from "zustand";


const useAuthStore = create((set,get) => ({
    member : [],
    URL : import.meta.env.VITE_API_URL,
    editUserdata : async() => {
        const {URL} = get()
        try {
            let {setUser} = useUserStore.getState()
            const editResult = await axios.patch(`${URL}/user/${id}`, body , {
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
        const {URL} = get()
        const result = await axios.get(`${URL}/user/member`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(result)
        set({ member: result.data })
    },

    updateRole : async(id,role,token) => {
        const {URL} = get()
        const result = await axios.patch(`${URL}/user/member/${id}`,{role}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        // console.log(result)
    },
    deleteUser : async(id,token) => {
        const {URL} = get()
        const {getAlluser} = get()
        const result = await axios.delete(`${URL}/user/member/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(result)
        await getAlluser(token)
    }


}))

export default useAuthStore