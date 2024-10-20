import { create } from "zustand";
import axios from "axios";


const useProductStore = create((set,get) => ({
    products: [],
    loading : false,

    getAllProducts : async(count = 10,page =1,token) => {
        set({loading: true})
        const result = await axios.get(`http://localhost:8000/product/${count}/${page}`, {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
        set({ products: result.data , loading: false})
        },
    searchFilter : async (arg) => {
        const result = await axios.post('http://localhost:8000/product/search/filters', arg)
        console.log(result)
        set({products : result.data})
        
    }
    
}))

export default useProductStore