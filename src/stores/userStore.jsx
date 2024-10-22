import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import useCartStore from "./cartStore";



const useUserStore = create(persist((set,get) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    token: null,
    profileImage : null,
    // test: null,


    setprofileImage: (image) => set({ profileImage: image }),
    login: async(input) => {
        const rs = await axios.post('http://localhost:8000/auth/login', input)
        console.log(rs)
        // const curProfile = rs.data.user.profileImage || "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"

        if(!rs.data.user.profileImage){
            set({profileImage:"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"})
        }else {
            set({profileImage:rs.data.user.profileImage })
        }
        // console.log(get().test)
        //console.log(curProfile)
        set({
            token: rs.data.token, 
            user: rs.data.user,
        })
        console.log(get().profileImage)
        
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