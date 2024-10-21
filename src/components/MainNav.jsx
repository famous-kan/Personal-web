import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import AddtoCart from './AddtoCart';
import useCartStore from '../stores/cartStore';
import useUserStore from '../stores/userStore';
import { useNavigate } from "react-router-dom"


const MainNav = () => {
  const getProductOnCart = useCartStore(state => state.getProductOnCart)
  const productOncart = useCartStore(state => state.productOncart)
  const cart = useCartStore(state => state.cart)
  const token = useUserStore(state => state.token)
  const logout = useUserStore(state => state.logout)
  const user =useUserStore(state => state.user)
  const navigate = useNavigate()


  useEffect(() => {
    getProductOnCart();
  }, [cart]);

  const hdlLogout = () => {
    logout()
    navigate('/')
  }




  return (
    <div className='flex flex-col justify-between '>

    <div>
    <nav className='bg-slate-100'>
    <div className='bg-slate-700 text-white flex justify-center h-10 items-center'>Free Delivery in Bangkok for every products.</div>
     
     <div >
        <div className='relative bg-slate-900 h-[110px] flex items-center justify-center '>
              <div className='flex justify-center mx-auto'>
                  <Link to = {'/'}>
                  <img src="/src/assets/whiteFameEditedtrim.png" 
                  className='h-[90px] w-[320px] '
                  />
                  </Link>
              </div>

              <div className='absolute right-10 flex mx-10 gap-10'>
                  <div className='relative'>
                  {Object.keys(cart).length !== 0 
                  ?
                  (
                    <div className='z-10 absolute top-[-2px] right-[-4px] text-sm flex justify-center items-center  text-white w-5 h-5 rounded-full border bg-pink-600'>
                      {productOncart.reduce((prv,cur) => {
                        return prv + (cart[cur.id])
                      },0)}
                    </div>) 
                 
              
                  : <></>
                  }

                  <HiOutlineShoppingBag className='w-14 h-14 btn rounded-full '  onClick={() => document.getElementById('cart-modal').showModal()}/>
                
                  </div>
                     
                  
                  {
                      (token) 
                  
                      ?  
                      <details className="dropdown">
                        <summary className="btn m-1 h-14 w-14 rounded-full "><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path></g></svg></summary>
                          <ul className="menu  dropdown-content bg-base-100 rounded-box z-20 w-52 p-2 shadow">
                          {
                            user.role === "ADMIN"
                            ?
                            <li  onClick={() => navigate('/admin')}><a>Admin dashboard</a></li>
                            :
                            <li onClick={() => navigate('/user')}><a>Manage profile</a></li>

                          }

                          <li onClick={hdlLogout}><a>Logout</a></li>
                        </ul>
                        </details>
                      
                  
                      : <Link to = {'login'}> <div className=' btn rounded-full flex items-center px-5'>
                        <CiUser className='w-8 h-8' />
                          Login/Register
                        </div></Link>
                
                }
                  
              </div>


        </div>

        {/* <button type='button' className='btn btn-secondary text-lg text-white w-fit mx-auto' 
                 onClick={() => document.getElementById('register-modal').showModal()}
                 >Create new account</button> */}


        {/* <div className='flex justify-between h-12'> */}

            <div className='flex items-center gap-12 justify-center h-14'>
           
            <Link to = {'/'} className='w-40 h-full items-center transition justify-center flex ease-in-out delay-75 hover:bg-gray-700 hover:text-white' >Home</Link>
            <Link to = {'shop'} className='w-40 h-full items-center transition justify-center flex ease-in-out delay-75 hover:bg-gray-700 hover:text-white'>Products</Link>
            <Link to = {'shop'} className='w-40 h-full items-center transition justify-center flex ease-in-out delay-75 hover:bg-gray-700 hover:text-white'>FAQS</Link>
            <Link to = {'shop'} className='w-40 h-full items-center transition justify-center flex ease-in-out delay-75 hover:bg-gray-700 hover:text-white' >Why Us ?</Link>
            </div>
        {/* </div> */}
     </div>
    </nav>

      <dialog id="cart-modal" className="modal">
      <div className="modal-box">
          <button 
          type='button'
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={e=>e.target.closest('dialog').close()}
          >✕</button>
          {/* <Register /> */}
          <AddtoCart /> 
          
      </div>
      </dialog>
      </div>
</div>


  )
}

export default MainNav


