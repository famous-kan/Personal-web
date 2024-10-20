import React, { useEffect, useState } from "react";
import useProductStore from '../stores/productStore'
import useCartStore from "../stores/cartStore";
import SearchProduct from "../components/SearchProduct";

const Shop = () => {
  const [page, setPage] = useState(1)
  const getAllProducts = useProductStore(state => state.getAllProducts)
  const products = useProductStore((state) => state.products);
  const cart = useCartStore((state) => state.cart)
  const addtoCart = useCartStore(state => state.addtoCart)

  useEffect(() => {
    getAllProducts(9,page);
  }, []);

  const hdlPageChange = (n) => {
    try {
      if(page+n < 1){
        return 
      }
      if (n>0 && products.length < 9){
        return
      }
      setPage(prev => prev+n)
      getAllProducts(9,page+n)
    } catch (err) {
      return
    }
  }



  return (
    <div className="my-2">

      <div className="flex w-3/4 justify-center mx-auto gap-2 items-center">
        <div className="">
          <p className="text-3xl">All Products</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque deserunt mollitia eligendi iste ab, illo dolorem aliquam facilis, alias sed, consequuntur accusantium numquam pariatur voluptatem doloribus qui ut? Sunt!</p>
        </div>
        <img
          src={"https://i.pinimg.com/originals/57/c5/0d/57c50defb2072e77ef03b6535bbd9dad.jpg"}
          alt="GFG Logo"
           className="w-full h-80 rounded-xl shadow-2xl "
        />
      </div>


      <div className="bg-slate-500 flex flex-col justify-center mx-auto items-center my-2">
      
      <div className="flex my-4 items-center w-1/5 ">
        <SearchProduct />
            </div>
           
    


      <div className="flex flex-wrap gap-10 w-[1000px] my-2">
      {products.map((el, index) => {
            return (
              
              <div className="flex flex-col h-80 w-[300px] gap-2 bg-red-200 justify-center items-center">
                  <img
                    src={el.image || "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"}
                    alt="GFG Logo"
                    width="100"
                    height="100"
                  />
                    <p>{el.title}</p>
                    <p>{el.description}</p>
                    <p>Price {el.price} Baht</p>
                    <div onClick={() => addtoCart(el.id)} className="btn w-1/2">Add to cart</div>
              </div>
            );
          })}
      </div>
      </div>
      <div>
      
      </div>

      <div className="flex gap-3 justify-center mx-auto">
      <button onClick={() => hdlPageChange(-1)} className="btn btn-md">previous</button>
      <button onClick={() => hdlPageChange(+1)} className="btn btn-md ">next</button>
    </div>


  </div>
  )
}

export default Shop