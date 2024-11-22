import axios from "axios";
import { create } from "zustand";
import useCartStore from "./cartStore";
import useUserStore from "./userStore";
import useProductStore from "./productStore";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'


const useCheckoutStore = create((set, get) => ({

    tranType : "",

    checkInput : {
        firstName : true,
        lastName : true,
        street : true,
        city : true,
        country : true,
        postcode : true,
        phone : true,
        email : true,
        paymentMedthod : true
    },
    
    input : {
        firstName : '',
        lastName : '',
        street : '',
        city : '',
        country : '',
        postcode : '',
        phone : '',
        email : ''
    },

    cartDetail: {
        address: '',
        paymentMedthod: '',
    },

    file: null,
    setFile : (image) => set({file : image}),
    URL : import.meta.env.VITE_API_URL,

    createOrder: async (token) => {
        let user = useUserStore.getState().user
        let productOncart = useCartStore.getState().productOncart
        let cart = useCartStore.getState().cart
        const {URL} = get()

        const { tranType,file, cartDetail ,input } = get();
        const havefile = !!file

        const total = productOncart.reduce((prv, cur) => {
            console.log(prv,cur.price,cart[cur.id])
            return prv + (cur.price * cart[cur.id]);
        }, 0);

        set(state => ({
            cartDetail : {...state.cartDetail , address : JSON.stringify(input),paymentMedthod:tranType}
        }))
        // console.log(tranType)
        // console.log(cartDetail)
        const body = new FormData;
        body.append('address', JSON.stringify(input));
        body.append('paymentMethod', tranType);
        body.append('total', +total);
        if(tranType === "ONLINE_BANKING"){
           if(!havefile){
            return
           } 
        }
        body.append('image', file);
        body.append('userId', user.id);

        console.log(body)

        try {
            const res = await axios.post(`${URL}/order`, body , {
                headers : {Authorization : `Bearer ${token}`}
            })
            const orderId = res.data.id
            let arrObj = []
            for (let item of productOncart){
                let newObj = {count:0,price:0}
                let count = cart[item.id]
                let price = item.price
                newObj.count = count
                newObj.price = price
                newObj.productId = item.id
                arrObj.push(newObj)
            }
            const cartBody = {shoppingCart : arrObj,orderId:orderId}
            console.log(cartBody)
            const resProductOnCart = await axios.post(`${URL}/order/product`,cartBody)
            console.log(resProductOnCart)
            set({ cart: {}, productOncart: [] }); 

        } catch (error) {
            console.log("Error creating order:", error);
  
        }
    },
    hdlChange : async (e) => {
        const input = get().input
        set(state => ({
            input : {...state.input, [e.target.name]: e.target.value}
        }))
       
    },
    hdlRadioChange : (e) => {
      
        console.log(e.target.value)
        const tranType = get().tranType
        set({tranType : e.target.value})
        console.log(tranType)
    },
    hdlSubmit : async(e) => {
        const {createOrder,input,file} = get()
        const {token} = useUserStore.getState()
        const havefile = !!file
        try {
            const {checkInput,tranType} = get()
            const isAllSubmit = Object.entries(input).reduce((prv,cur) => {
                set(state => ({
                    checkInput : {...state.checkInput , [cur[0]] : !!cur[1].trim()}
                }))
                checkInput[cur[0]] = !!cur[1].trim()
                return prv && cur[1].trim()
            },true)
            set(state => ({
                checkInput : {...state.checkInput , paymentMedthod : !!tranType}
            }))
            // checkInput.paymentMedthod = !!tranType

            console.log(checkInput)
            if (!tranType || !isAllSubmit){
                return
            }
            if(tranType === "ONLINE_BANKING"){
                if(!havefile){
                    toast.error("Attched your slip before place an order")
                 return
                } 
             }
            const res = await createOrder(token)
            useCartStore.setState({ cart: {} });
            set({ input: 
                {
                    firstName : '',
                    lastName : '',
                    street : '',
                    city : '',
                    country : '',
                    postcode : '',
                    phone : '',
                    email : ''
                },
                checkInput: 
                {
                    firstName : true,
                    lastName : true,
                    street : true,
                    city : true,
                    country : true,
                    postcode : true,
                    phone : true,
                    email : true,
                    paymentMedthod : true
                },
            }); 
            return true
        } catch (err) {
            console.log(err)
            return false
        }

    },
}));

export default useCheckoutStore;
