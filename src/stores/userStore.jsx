import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const useUserStore = create(persist((set,get) => ({
    user: null,
    token: null,
    login: async(input) => {
        const rs = await axios.post('http://localhost:8000/auth/login', input)
        console.log(rs)
        set({
            token: rs.data.token, 
            user: rs.data.user})
        return rs.data
    },
    logout: () =>{
        localStorage.clear()
        set({user: null, token: null})
    },

}), {

    name: 'state',
    storage: createJSONStorage(() => localStorage)

}))

export default useUserStore