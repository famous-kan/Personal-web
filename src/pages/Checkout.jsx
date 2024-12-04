import React, { useEffect, useState } from 'react'
import useCartStore from '../stores/cartStore'
import { MdOutlineDelete } from "react-icons/md";
import useCheckoutStore from "../stores/checkoutStore"
import { useNavigate } from "react-router-dom"
import qr from '../assets/qr.jpg'


const Checkout = () => {
  const productOncart = useCartStore(state => state.productOncart)
  const cart = useCartStore(state => state.cart)
  const updateProductOnCart = useCartStore(state => state.updateProductOnCart)
  const deleteProductOnCart = useCartStore(state => state.deleteProductOnCart)
  const createOrder = useCheckoutStore(state => state.createOrder)
  const cartDetail = useCheckoutStore(state => state.cartDetail)
  const hdlChange = useCheckoutStore(state => state.hdlChange)
  const hdlRadioChange = useCheckoutStore(state => state.hdlRadioChange)
  const input = useCheckoutStore(state => state.input)
  const hdlSubmit = useCheckoutStore(state => state.hdlSubmit)
  const checkInput = useCheckoutStore(state => state.checkInput)
  const navigate = useNavigate()
  const setFile = useCheckoutStore(state => state.setFile)
  const [visible, setvisible] = useState(false)
  const tranType = useCheckoutStore(state => state.tranType)

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
                        <button onClick={() => deleteProductOnCart(item.id)} > <MdOutlineDelete className='w-8 h-8 mx-3 opacity-70'/></button>
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


              <div className='divider'></div>

             <div className='m-2'>
              <p className ="mb-4 font-semibold text-gray-900  text-xl">Payment Medthod :</p>
              <div className='flex p-2'>
              <ul className=' flex flex-col gap-3'>

                   <li className=" w-[90px] ">
                    <div className=" flex rounded-xl items-center">
                    <div className='flex gap-1 items-center mx-1'>
                        <input 
                        type="radio" 
                        value="CASH" 
                        onChange={hdlRadioChange}
                        onClick={() => setvisible(false)}
                        checked={tranType==="CASH"}
                        name="paymentMedthod" 
                        className="w-5 h-5 flex radio-primary"  />
                        <div className="text-xl font-medium "> Cash </div>
                    </div>
                    </div>
                  </li>
                   <li className=" w-[180px] ">
                      <div className=" flex flex-col gap-4 rounded-xl items-start p-1">
                        <div className='flex gap-1 items-center'>
                        <input 
                        id="list-qr-code" 
                        type="radio" 
                        value="ONLINE_BANKING" 
                        // checked={tranType==="ONLINE_BANKING" }
                        onChange={hdlRadioChange}
                        onClick={() => setvisible(true)}
                        name="paymentMedthod" 
                        className="w-5 h-5 flex  radio-primary" />
                        <div className=" text-xl "> Online Banking </div>
                        </div>
                        { visible && 

                            <div className=' flex '>

                                  <div className='flex flex-col gap-4  mx-4'>
                                  <div className='flex flex-col font-semibold min-w-[200px]'>
                                  <img src="https://i.pinimg.com/474x/00/24/29/002429e4b28532ce5273cafa10be61c2.jpg" className='w-[25px]' alt="" />
                                  <p>KBANK Kasikorn Bank Company </p>
                                  <p>Account No. 123-2-34567-1</p>
                                  </div>
                                  <div className='flex flex-col font-semibold'>
                                  <img src="https://i0.wp.com/www.kanjanabaramee.org/wp-content/uploads/2017/07/logo_ktb1.png?fit=225%2C225&ssl=1"  className='w-[25px]' alt="" />
                                  <p>KTB Krungthai company </p>
                                  <p>Account No. 123-2-34567-1</p>
                                  </div>
                                  <div className='flex flex-col font-semibold'>
                                  <img src="https://companieslogo.com/img/orig/SCB.BK-478d8e61.png?t=1720244493" className='w-[25px]' alt="" />
                                  <p>SCB Siam Commercial Bank </p>
                                  <p>Account No. 123-2-34567-1</p>
                                  </div>
                                  </div>
                         
                              <div className="divider divider-horizontal">OR</div>
   
                                  <div className='flex w-[300px] flex-col'>
                                  <img src={qr} className=' h-[300px] m-2' alt="qrCode" />
                                  
                                  </div>
            
                            </div>

                            }
                      
                        </div>
                  </li>

             
              </ul>
              </div>
                
                <div>
                  <p>Upload transaction slip:</p>
                        <input
                    type="file"
                    id="myFile"
                    name="image"
                    className=' mx-2 my-3 file-input file-input-bordered file-input-primary w-full max-w-xs'
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