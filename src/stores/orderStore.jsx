import axios from "axios"
import { create } from "zustand"



const useOrderStore = create((set, get) => ({
    orders : [],
    allorders: [],
    curStatus : {},
    URL : import.meta.env.VITE_API_URL,

    getOrder : async(token) => {
        const {URL} = get()
        const result = await axios.get(`${URL}/order`, {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
        set({ orders: result.data })
    },
    getAllOrder : async(token) => {
        const {URL} = get()
        const result = await axios.get(`${URL}/order/all`, {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
        set({ allorders: result.data })

        const curStatusUpdates = {};
        result.data.forEach((el, index) => {
            curStatusUpdates[index] = el.status;
        });
        set((state) => ({ curStatus: { ...state.curStatus, ...curStatusUpdates } }));
        const {curStatus} = get()
        console.log(curStatus)
    },
    changeStatus : async(id,status,token) => {
        const {URL} = get()
        const result = await axios.patch(`${URL}/order/all`, {id: id, status: status}, {
            headers : {Authorization : `Bearer ${token}`}
        })
        console.log(result)
    }
}))


export default useOrderStore
