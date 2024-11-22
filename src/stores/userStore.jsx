import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import useCartStore from "./cartStore";




const useUserStore = create(persist((set,get) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    token: null,
    profileImage : null,
    setprofileImage: (image) => set({ profileImage: image }),


    login: async(input) => {
        const URL = import.meta.env.VITE_API_URL
        const rs = await axios.post(`${URL}/auth/login`, input)
        console.log(rs)
        if(!rs.data.user.profileImage){
            set({profileImage: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"})
        }else {
            set({profileImage: rs.data.user.profileImage })
        }
        set({
            token: rs.data.token, 
            user: rs.data.user,
        })
        return rs.data
    },
    logout: () =>{
        localStorage.clear()
        useCartStore.setState({ cart: {} });
        set({user: null, token: null, profileImage: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"})
    },

}), {

    name: 'state',
    storage: createJSONStorage(() => localStorage)

}))

export default useUserStore