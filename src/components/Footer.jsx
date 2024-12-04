import React from 'react'
import whiteFameEditedtrim from '../assets/whiteFameEditedtrim.png'
import thai_qr_payment from '../assets/thai_qr_payment.png'
import krungthai from '../assets/krungthai-logo.jpg'

const Footer = () => {
  return (
    <div>
        
        <div className=" bg-slate-500 h-[130px] flex justify-around items-center ">
      <div className="flex flex-col">
      <img src={whiteFameEditedtrim}
        className='h-[40px] w-[140px] '
        />
        <p className="font-bold">Contact Fame Fleur via :</p>
        <p>Line: @FameFameFleur</p> 
        <p> Facebook : Fame Fleur Flower </p>
      </div>
      <div className="flex gap-2">
          <p className="">We Accept : </p>
          <div className="flex flex-col gap-1">
              <img
                src={thai_qr_payment}
                alt="Thaiqr Logo"
                className=" w-full h-8"
              />
              <img
                src={krungthai}
                alt="Krungthai Logo"
                className=" w-full h-8 "
              />
          </div>
          <div className="flex flex-col gap-1">
              <img
                src="https://isranews.org/article/images/2022/Fei/1/logo_thaiscb.jpeg"
                alt="scb Logo"
                className=" w-full h-8 "
              />
              <img
                src="https://www.รถยกรถลาก6ล้อ10ล้อ.com/wp-content/uploads/2020/02/WFLExP4a6A.jpg"
                alt="Kasikorn Logo"
                className=" w-full h-8 "
              />
          </div>

      </div>
    </div>


        <div className="bg-slate-900 h-14 flex justify-center items-center ">
            <p className="text-white" >© 2024 Fame Fleur Co., Ltd. | All rights reserved.</p>
        </div>

     </div>
  )
}

export default Footer