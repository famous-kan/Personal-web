import axios from "axios";
import { create } from "zustand";
import {createJSONStorage, persist} from 'zustand/middleware'




const useCartStore = create (persist((set,get) => ({
    cart : {},
    setCart : (newVal) => set(prv => ({cart : newVal})),
    productOncart : [],
    addtoCart: (productId) => {
        const cart = get().cart;
        const quantity = cart[productId] || 0;

        set(state => ({
            cart: { ...state.cart, [productId]: quantity + 1 }
        }));
    },
    getProductOnCart: async() => {
        const array = Object.keys(get().cart)
        const body = {productId : array}
        console.log(body)
        const result = await axios.post(`http://localhost:8000/cart/id`, body)
        console.log(result)
        set({productOncart : result.data})
        
    }, 
    deleteProductOnCart : (id) => {
        const cart = get().cart
        let updatedCart = {...cart}
        delete updatedCart[id]
        console.log(updatedCart)
        set({cart : updatedCart})
    },
    updateProductOnCart : (n,productId) =>{
        const cart = get().cart
        const quantity = cart[productId]
        if (quantity+n < 1){
            return
        }
        set(state => ({
            cart: { ...state.cart, [productId]: quantity + n }
        }));
    },


}),{
    name : 'cart',
    storage: createJSONStorage(() => localStorage)
}))

export default useCartStore
