import React, { useEffect, useState } from "react";
import useProductStore from '../stores/productStore'
import { CiDeliveryTruck } from "react-icons/ci";
import { GrCamera } from "react-icons/gr";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";
import CarouselFadeExample from "../components/Carousel";
const HomePage = () => {
  const [page, setPage] = useState(1)
  const getAllProducts = useProductStore(state => state.getAllProducts)
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    getAllProducts(10,page);
  }, []);

  const hdlPageChange = (n) => {
    console.log("hhhhhhhhhhhhhhhhhhhhh")
    try {
      if(page+n < 1){
        return 
      }
      if (n>0 && products.length < 10){
        return
      }
      setPage(prev => prev+n)
      getAllProducts(10,page+n)
    } catch (err) {
      return
    }
  }

  return (
    <div>

      <CarouselFadeExample />

      <div className="flex flex-col gap-3 my-5 justify-center items-center">
        <div className="text-3xl font-bold">
          Fame Fleur , No.1 Online Flower Shop & Flower Delivery
        </div>

        <div className="w-3/4">
        Since 2013, Fame Fleur™ has been the most trusted flower delivery in Bangkok. We've delivered our clients' feelings through almost 100,000 beautiful flower items across Bangkok. Every order is arranged and hand-tied by our professional florist and hand-delivered with special care.
        </div>
        <div className="w-3/4">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit suscipit quod deserunt provident omnis ex, necessitatibus incidunt sit, earum eaque rem. Molestiae repudiandae voluptatum similique quasi exercitationem optio veritatis, unde deserunt ipsam et hic. Nisi, voluptate rem dolorem optio eaque ad unde? Eum reiciendis dolorem quia harum, et expedita voluptates.
        </div>
      </div>

    <div className="flex gap-10 justify-center">

      <div className="flex flex-col justify-center items-center">
      <CiDeliveryTruck className="w-20 h-20" />
      <p>Same Day</p>
      <p>Flower Delivery </p>
      </div>
      <div className="flex flex-col justify-center items-center">
      <GrCamera className="w-14 h-14 my-3 mx-5" />
      <p>Doorstep Delivery</p>
      <p>with Photo Confirmation </p>
      </div>
      <div className="flex flex-col justify-center items-center">
      <FaRegFaceGrinStars className="w-14 h-14 my-3" />
      <p>Exclusive Offer</p>
      <p>for customer </p>
      </div>
    
    </div>
    <div className="divider"></div>
    <br />
    <div className=" flex flex-col gap-5 bg-slate-900 rounded-full w-3/4 justify-center mx-auto ">
      <p className="text-3xl mx-auto my-4 text-white">Treading Flowers</p>
      <div className="flex overflow-x-auto overflow-y-hidden space-x-8  w-3/4 bg-slate-900 p-2 rounded-2xl mx-auto">
       
        <div className="relative flex-shrink-0 rounded-full ">
          <img className="  w-[270px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2024/01/A-single-013.jpg" alt="" />
        <p className="absolute top-0 left-1 text-white z-20">Breezy Heart</p>
        <p className="absolute bottom-0 right-2 text-white z-20">3000 ฿</p>
        </div>
       
        <div className="relative flex-shrink-0 rounded-full">
          <img className="w-[270px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/09/gracekelly-single-bouquet.jpg" alt="" />
        <p className="absolute top-0 left-1 text-white z-20">All Of Me</p>
        <p  className="absolute bottom-0 right-2 text-white z-20">3500 ฿</p>
        </div>

        <div className=" relative flex-shrink-0 rounded-full ">
          <img className=" w-[270px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/09/beyondthesea-single-bouquet.jpg.webp" alt="" />
        <p  className="absolute top-0 left-1 text-white z-20">Deep Love</p>
        <p className="absolute bottom-0 right-2 text-white z-20">3700 ฿</p>
        </div>
        <div className=" relative flex-shrink-0 rounded-full  ">
          <img className=" w-[270px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/09/fleurdamour-single-bouquet.jpg" alt="" />
        <p  className="absolute top-0 left-1 text-white z-20">Sexy Love</p>
        <p className="absolute bottom-0 right-2 text-white z-20">2500 ฿</p>
        </div>
        <div className="relative flex-shrink-0 rounded-full  ">
          <img className=" w-[270px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2024/01/A-single-5.jpg.webp" alt="" />
        <p  className="absolute top-0 left-1 text-white z-20">Honey Bloom</p>
        <p className="absolute bottom-0 right-2 text-white z-20">3500 ฿</p>
        </div>
        
      </div>
      <br />
    </div>
    <Link to = {'shop'} className="my-4 flex btn btn-wide mx-auto bg-slate-700 text-white h-16 rounded-2xl text-lg " >See All Products</Link>

    <br />
    <div className="relative flex items-center ">
    <img
        src={"https://www.urbanflowers.co.th/wp-content/uploads/2022/11/dried-flowers.webp"}
        alt="GFG Logo"
        className=" w-full h-70 opacity-85"
      />
      <div className="absolute flex flex-col gap-3 m-20 w-1/2">
        <p className="text-white">Send flower delivery in Bangkok today! These long-lasting preserved bouquets make great gifts and are the perfect home decor for any space! With our dried flower arrangement range, you can treat someone (or yourself) to that 'new bouquet' feeling for longer.</p>
        <em className="text-2xl font-bold text-white">Sign Up for Free!</em>
        <Link to = {'login'} className="btn w-20 mx-10">Click !</Link>
      </div>
    </div>

    <div className=" bg-slate-500 h-[130px] flex justify-around items-center ">
      <div className="flex flex-col">
        <img src="/src/assets/whiteFameEditedtrim.png" 
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
                src="/src/assets/thai_qr_payment.png"
                alt="GFG Logo"
                className=" w-full h-8"
              />
              <img
                src="/src/assets/krungthai-logo.jpg"
                alt="GFG Logo"
                className=" w-full h-8 "
              />
          </div>
          <div className="flex flex-col gap-1">
              <img
                src="https://isranews.org/article/images/2022/Fei/1/logo_thaiscb.jpeg"
                alt="GFG Logo"
                className=" w-full h-8 "
              />
              <img
                src="https://www.รถยกรถลาก6ล้อ10ล้อ.com/wp-content/uploads/2020/02/WFLExP4a6A.jpg"
                alt="GFG Logo"
                className=" w-full h-8 "
              />
          </div>

      </div>
    </div>

    </div>
  )
}

export default HomePage