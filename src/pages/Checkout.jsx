import React, { useEffect, useState } from 'react'
import useCartStore from '../stores/cartStore'
import { MdOutlineDelete } from "react-icons/md";
import useCheckoutStore from "../stores/checkoutStore"
import { useNavigate } from "react-router-dom"
import useOrderStore from '../stores/orderStore';
import useUserStore from '../stores/userStore';


const Checkout = () => {
  const productOncart = useCartStore(state => state.productOncart)
  const cart = useCartStore(state => state.cart)
  const updateProductOnCart = useCartStore(state => state.updateProductOnCart)
  const createOrder = useCheckoutStore(state => state.createOrder)
  const cartDetail = useCheckoutStore(state => state.cartDetail)
  const hdlChange = useCheckoutStore(state => state.hdlChange)
  const hdlRadioChange = useCheckoutStore(state => state.hdlRadioChange)
  const input = useCheckoutStore(state => state.input)
  const hdlSubmit = useCheckoutStore(state => state.hdlSubmit)
  const checkInput = useCheckoutStore(state => state.checkInput)
  const navigate = useNavigate()
  const setFile = useCheckoutStore(state => state.setFile)
  // const getOrder = useOrderStore(state => state.getOrder)
  // const token = useUserStore(state => state.token)


  // useEffect( ()=> {

  //   getOrder(token)
  // },[])


  return (
    <div>
      <div className=' h-20 flex items-center justify-center bg-cyan-900 text-3xl text-white'>
        Purchase Information
      </div>

      <div className='flex '>

      <div className='flex flex-1 flex-col m-10 gap-3'>
          
          <div className='text-2xl mx-3'> 
            Billing details
          </div>
          
          <form className='flex flex-col gap-2' action="">

            <div className='flex gap-2'>
            <div className='w-full flex flex-col'>
            <p>First Name<span className='text-red-500'>*</span></p>
            <input className='border h-8'
             type="text" 
             onChange={hdlChange}
             name='firstName' value={input.firstName} />
             {checkInput.firstName ? <></>  : <p className='text-xs text-red-500'>Fill your firstname !</p>}

            </div>

            <div className='w-full flex flex-col'>
            <p>Last Name<span className='text-red-500'>*</span></p>
            <input className='border h-8 '
              type="text" 
              onChange={hdlChange}
              name='lastName' value={input.lastName} />
              {checkInput.lastName ? <></>  : <p className='text-xs text-red-500'>Fill your lastname !</p>}
            </div>
          
            </div>

            <div className='flex flex-col'>
              <p className='my-1'>Street address<span className='text-red-500'>*</span></p>
              <input className='border w-full h-8' 
              type="text" 
              onChange={hdlChange}
              name='street' value={input.street} 
              placeholder='House number, Street name ' />
              {checkInput.street ? <></>  : <p className='text-xs text-red-500'>Fill your street No.!</p>}
            </div>

            <div className='flex flex-col'>
              <p className='my-1'>Town/City<span className='text-red-500'>*</span></p>
              <input className='border w-full h-8' 
              type="text" 
              onChange={hdlChange}
              name='city' value={input.city} />
              {checkInput.city ? <></>  : <p className='text-xs text-red-500'>Fill your town/city!</p>}
            </div>

            <div className='flex flex-col'>
              <p className='my-1'>State/ Country<span className='text-red-500'>*</span></p>
              <input className='border w-full h-8' 
              type="text" 
              onChange={hdlChange}
              name='country' value={input.country} />
              {checkInput.country ? <></>  : <p className='text-xs text-red-500'>Fill your state/country!</p>}
            </div>
            <div className='flex flex-col'>
              <p className='my-1'>Postcode/ZIP<span className='text-red-500'>*</span></p>
              <input className='border w-full h-8' 
              type="text" 
              onChange={hdlChange}
              name='postcode' value={input.postcode} />
              {checkInput.postcode ? <></>  : <p className='text-xs text-red-500'>Fill your postcode/zip!</p>}
            </div>
            <div className='flex flex-col'>
              <p className='my-1'>Phone<span className='text-red-500'>*</span></p>
              <input className='border w-full h-8' 
              type="text" name='phone' 
              onChange={hdlChange}
              value={input.phone} />
              {checkInput.phone ? <></>  : <p className='text-xs text-red-500'>Fill your phone No.!</p>}
            </div>
            <div className='flex flex-col'>
              <p className='my-1'>Email<span className='text-red-500'>*</span></p>
              <input className='border w-full h-8'
               type="text" name='email' 
               onChange={hdlChange}
               value={input.email}/>
               {checkInput.email ? <></>  : <p className='text-xs text-red-500'>Fill your email!</p>}
            </div>


          </form>

      
      
      </div>
      
      <div className="flex flex-1 flex-col gap-2 w-3/4 p-3 justify-center mx-auto">
            
            <div className='text-2xl mx-3'>Your order</div>
            
            <div className='bg-slate-50 m-4 rounded-3xl '>
            {productOncart.map((item) => {
                return (
              
                <div className="flex justify-around items-center border-b-2 border-pink-100 p-1 gap-2 m-5">
                    
                    <div>
                    <img src={item.image} className="w-60"/>
                    </div>

                    <div> 

                    <span className="w-20 font-bold  ">{item.title}</span>
                    <div className='flex gap-3'>
                    <span>Price : </span>
                    <span className="w-20  ">{item.price}</span>
                    </div>
                    <div className='flex items-center gap-4'>
                      <span>Amount :</span>
                       <div className="flex items-center ">
                        <button className="border w-8 btn btn-sm " onClick={()=> updateProductOnCart(-1,item.id)} >-</button>
                        <span className=" w-8 text-center text-sm ">{cart[item.id]}</span>
                        <button className="border w-8 btn btn-sm  "  onClick={()=> updateProductOnCart(+1,item.id)}>+</button>
                        <button> <MdOutlineDelete className='w-8 h-8 mx-3 opacity-70'/></button>
                        </div>
                    </div>
                    </div>
                </div> 
                )
            })}
              <div className="flex gap-4 justify-between w-full ml-auto text-xl p-2">
              <p className="text-lg">Shipping  </p>
              <p className="mx-8 text-lg"> 0 Baht</p>
             </div>

              <div className="flex gap-4 justify-between w-full ml-auto text-xl p-2 ">
              <p className="font-bold">Total :  </p>
              <em className="mx-8 font-bold">
              {productOncart.reduce((prv,cur) => {
              return prv + ((cur.price)*cart[cur.id])
             },0)} Baht</em>
             </div>
            </div>



             <div className='m-8'>
              <p className ="mb-4 font-semibold text-gray-900 ">Payment Medthod</p>

              <div className='flex'>
              <ul className =" w-48 text-sm font-medium    ">
                 <li className=" w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input 
                        id="list-qr-code" 
                        type="radio" 
                        value="ONLINE_BANKING" 
                        onChange={hdlRadioChange}
                        name="paymentMedthod" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="list--qr-code" className="w-full py-3 ms-2 text-sm font-medium">Online Payment</label>
                    </div>
                  </li>

                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input 
                        id="list-bank" 
                        type="radio" value="CASH" 
                        name="paymentMedthod" 
                        onChange={hdlRadioChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="list-bank" className="w-full py-3 ms-2 text-sm font-medium ">Cash delivery</label>
                    </div>
                </li>
              </ul>
              </div>


              <div className='flex flex-col gap-3'>
              <details className="collapse bg-base-200">
                <summary className="collapse-title ">Qr Code</summary>
                <div className="collapse-content">
                  <p>PICTURE</p>
                </div>
              </details>
              <details className="collapse bg-base-200">
                <summary className="collapse-title">Bank Tranfer</summary>
                <div className="collapse-content">
                  <p>BANK KRUNGTHAI</p>
                </div>
              </details>
              </div>
                
                <div>
                  <p></p>
                        <input
                    type="file"
                    id="myFile"
                    name="image"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
              </div>


              </div >

             <div className='btn btn-success text-2xl text-white' onClick={async() => {
              const res = await hdlSubmit()
              if (res) {
                navigate('/complete')
              }
              }}>
              Place Order
              </div>

      </div>

          


    </div>

    </div>
  )
}

export default Checkout