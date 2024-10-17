import React, { useEffect, useState } from "react";
import useProductStore from '../stores/productStore'
import { CiDeliveryTruck } from "react-icons/ci";
import { GrCamera } from "react-icons/gr";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { Link } from "react-router-dom";
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

      <img
        src={"/src/assets/flower2.jpg"}
        alt="GFG Logo"
        className=" w-3/4 h-80 flex justify-center mx-auto"
      />

      <div className="flex flex-col gap-3 my-5 justify-center items-center">
        <div className="text-3xl font-bold">
          Fame Fleur , No.1 Online Flower Shop & Flower Delivery
        </div>

        <div className="w-3/4">
        Since 2013, Love You Flower™ has been the most trusted flower delivery in Bangkok. We've delivered our clients' feelings through almost 100,000 beautiful flower items across Bangkok. Every order is arranged and hand-tied by our professional florist and hand-delivered with special care.
        </div>
        <div className="w-3/4">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit suscipit quod deserunt provident omnis ex, necessitatibus incidunt sit, earum eaque rem. Molestiae repudiandae voluptatum similique quasi exercitationem optio veritatis, unde deserunt ipsam et hic. Nisi, voluptate rem dolorem optio eaque ad unde? Eum reiciendis dolorem quia harum, et expedita voluptates.
        </div>
      </div>

    <div className="flex gap-10 justify-center">

      <div className="flex flex-col">
      <CiDeliveryTruck className="w-20 h-20" />
      <p>Same Day</p>
      <p>Flower Delivery </p>
      </div>
      <div className="flex flex-col">
      <GrCamera className="w-14 h-14 my-3 mx-5" />
      <p>Doorstep Delivery</p>
      <p>with Photo Confirmation </p>
      </div>
      <div className="flex flex-col">
      <FaRegFaceGrinStars className="w-14 h-14 my-3" />
      <p>Exclusive Offer</p>
      <p>for customer </p>
      </div>
    
    </div>
    <br />
    <div className=" flex flex-col gap-5">
      <p className="text-xl mx-20">Treading Flowers</p>
      <div className="flex overflow-x-auto space-x-8 w-3/4 bg-slate-500 p-2 rounded-2xl mx-auto">
        <div className="flex-shrink-0 rounded-full ">
          <img className=" w-[200px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/02/alwaysonmymindsinglebouquetneww.jpg" alt="" />
        <p>Title</p>
        <p>Description</p>
        <p>Price</p>
        </div>
        <div className="flex-shrink-0 rounded-full">
          <img className="w-[200px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/09/gracekelly-single-bouquet.jpg" alt="" />
        <p>Title</p>
        <p>Description</p>
        <p>Price</p>
        </div>
        <div className="flex-shrink-0 rounded-full ">
          <img className=" w-[200px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/09/beyondthesea-single-bouquet.jpg.webp" alt="" />
        <p>Title</p>
        <p>Description</p>
        <p>Price</p>
        </div>
        <div className="flex-shrink-0 rounded-full  ">
          <img className=" w-[200px] rounded-xl" src="https://www.urbanflowers.co.th/wp-content/uploads/2023/02/loveyourforeverbouquetx.jpg.webp" alt="" />
        <p>Title</p>
        <p>Description</p>
        <p>Price</p>
        </div>
        
      </div>
      <br />
    </div>
    <Link to = {'shop'} className='btn btn-primary flex justify-center w-2/5 mx-auto' >See All Products</Link>

    <br />
    <div className="relative flex justify-center items-center">
    <img
        src={"https://i.pinimg.com/originals/59/70/73/59707320d0ad320d34d55540cb039263.png"}
        alt="GFG Logo"
        className=" w-full h-60 opacity-75"
      />
      <div className="absolute top-20 flex justify-center flex-col gap-3">
        <p className="text-2xl bg-pink-200">Sign Up for Free</p>
        <Link to = {'login'} className="btn w-20 mx-auto">Click !</Link>
      </div>
    </div>

    <div className="border bg-pink-100 h-28 flex justify-around items-center ">
      <div className="flex flex-col">
        <p className="font-bold">Contact Fame Fleur via :</p>
        <p>Line: @FameFameFleur</p> 
        <p> Facebook : Fame Fleur Flower </p>
      </div>
      <div className="flex flex-col gap-1">
      <p className="">We Accept</p>
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
    </div>

    </div>
  )
}

export default HomePage