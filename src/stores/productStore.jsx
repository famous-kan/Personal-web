import { create } from "zustand";
import axios from "axios";


const useProductStore = create((set,get) => ({
    products: [],
    loading : false,
    URL : import.meta.env.VITE_API_URL,

    getAllProducts : async(count = 9,page =1,token) => {
        set({loading: true})
        const {URL} = get()
        const result = await axios.get(`${URL}/product/${count}/${page}`, {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
        set({ products: result.data , loading: false})
        },
    searchFilter : async (arg) => {
        const {URL} = get()
        const result = await axios.post(`${URL}/product/search/filters`, arg)
        console.log(result)
        set({products : result.data})
        
    }
    
}))

export default useProductStore