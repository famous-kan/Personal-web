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
    
}))

export default useProductStore