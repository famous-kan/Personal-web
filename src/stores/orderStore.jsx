import axios from "axios"
import { create } from "zustand"



const useOrderStore = create((set, get) => ({
    orders : [],
    allorders: [],

    getOrder : async(token) => {
        const result = await axios.get('http://localhost:8000/order', {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
        set({ orders: result.data })
    },
    getAllOrder : async(token) => {
        const result = await axios.get('http://localhost:8000/order/all', {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
        set({ allorders: result.data })
    },
    changeStatus : async(id,status,token) => {
        const result = await axios.patch('http://localhost:8000/order/all', {id: id, status: status}, {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
    }
}))


export default useOrderStore
