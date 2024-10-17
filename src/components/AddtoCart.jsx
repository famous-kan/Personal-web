import React, { useEffect, useState } from "react";
import useCartStore from '../stores/cartStore'
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import useUserStore from "../stores/userStore";
import { toast } from "react-toastify";


const AddtoCart = () => {
    const getProductOnCart = useCartStore(state => state.getProductOnCart)
    const productOncart = useCartStore(state => state.productOncart)
    const cart = useCartStore(state => state.cart)
    const deleteProductOnCart = useCartStore(state => state.deleteProductOnCart)
    const updateProductOnCart = useCartStore(state => state.updateProductOnCart)
    const navigate = useNavigate()
    const token = useUserStore(state => state.token)

      
  useEffect(() => {
    getProductOnCart();
  }, [cart]);



    return (
    <div className="w-full">
        <div className='bg-slate-100 my-3 p-3 rounded-lg h-fit'>
            <p className="text-2xl"> Shopping Bag</p>
            <hr />
            <br />
            <div className="flex flex-col gap-2">
            {productOncart.map((item) => {
                return (
              
                  
                    <div className="flex justify-between items-center border-b-4 p-1">


                        <img src={item.image} className="w-24"/>
                        <span className="w-20  text-sm">{item.title}</span>
                    
                        <span className="w-20  text-sm">{item.price}</span>
                        <div className="flex items-center ">
                        <button className="border w-8 btn " onClick={()=> updateProductOnCart(-1,item.id)} >-</button>
                        <span className=" w-8 text-center text-sm ">{cart[item.id]}</span>
                        <button className="border w-8 btn "  onClick={()=> updateProductOnCart(+1,item.id)}>+</button>
                        </div>
                        <button className="w-8 h-8" onClick={() => deleteProductOnCart(item.id)  }> <MdOutlineDelete/></button>
                        
                    </div>
                   
                
                )
            })}
             <div className="flex gap-4 justify-between w-full ml-auto text-xl ">
              <p className="font-bold">Total :  </p>
              <em className="mx-8 font-bold">
              {productOncart.reduce((prv,cur) => {
              return prv + ((cur.price)*cart[cur.id])
             },0)} Baht</em>
             </div>


            </div>
        </div>
      
        <div className="flex btn btn-primary mx-auto w-3/4 text-xl" onClick={e=>{
          if(!token){
            navigate('/login')
            e.target.closest('dialog').close()
            toast.error('Please, login before checkout')
            return
          }
          navigate('/checkout')
          e.target.closest('dialog').close()
        }}>
        <button>Checkout</button>
        </div>    

        <div className="flex justify-center underline mx-auto w-3/4 text-sm m-4 ">
        <button onClick={e=>e.target.closest('dialog').close() }>Continue Shopping</button>
        </div>


               

    </div>
  )
}

export default AddtoCart