import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const useUserStore = create(persist((set,get) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    token: null,
    profileImage : "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg", 
    setprofileImage: (image) => set({ profileImage: image }),
    login: async(input) => {
        const rs = await axios.post('http://localhost:8000/auth/login', input)
        console.log(rs)
        const curProfile = rs.data.user.profileImage || "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
        console.log(rs)
        set({
            token: rs.data.token, 
            user: rs.data.user,
            profileImage: curProfile, // Update profileImage from user
        })
        console.log(get().user)
        return rs.data
    },
    logout: () =>{
        localStorage.clear()
        set({user: null, token: null, profileImage: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"})
    },

}), {

    name: 'state',
    storage: createJSONStorage(() => localStorage)

}))

export default useUserStore