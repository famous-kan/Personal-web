import { create } from "zustand";


const useAuthStore = create((set,get) => ({

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
    }


}))