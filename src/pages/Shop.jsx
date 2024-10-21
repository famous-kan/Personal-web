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
    <div className="">

      <div className="flex relative justify-end border">
          <div>
          <div className=" absolute top-0 left-[-150px] h-[300px] w-[300px] bg-orange-100 rounded-full m-4"></div>
          <div className=" absolute top-[110px] left-[50px] h-[200px] w-[200px] border-2 border-yellow-200 rounded-full m-4"></div>
          </div>

          <div className="absolute top-[100px] left-[300px] ">
          <div className=" z-20">
            <p className="text-3xl my-2">All Products</p>
            <p className="w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque deserunt mollitia eligendi iste ab, illo dolorem aliquam facilis, alias sed, consequuntur accusantium numquam pariatur voluptatem doloribus qui ut? Sunt!</p>
          </div>
          </div>

          <div className="flex items-end ">
            <img
              src={"https://www.loveyouflower.com/images/arrangement-img/arrangement2.webp"}
              alt="GFG Logo"
              className="w-[700px] h-[350px]"
              />
          </div>
      </div>


      <div className="flex flex-col justify-center mx-auto items-center ">
      
      <div className="flex my-12 items-center w-1/5 ">
        <SearchProduct />
            </div>
           
    


      <div className="flex flex-wrap gap-10 w-[1000px] my-2 ">
      {products.map((el, index) => {
            return (
              
              <div className="flex flex-col h-[420px] w-[300px] gap-1 bg-slate-700 text-white text-lg  justify-end items-center">
                 
                  <label className="swap swap-rotate  hover:opacity-80 ">
                  <input type="checkbox" className="hidden" />
                      
                      <img
                        src={el.image || "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"}
                        alt="GFG Logo"
                        className=" swap-off w-[240px] justify-center mx-auto "
                        />
                        <div className=" relative swap-on bg-slate-700 text-white  ">
                          <div className="flex justify-center mx-auto">
                          <img
                          src={el.image || "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"}
                          alt="GFG Logo"
                          className=" absolute w-[240px] opacity-30 "
                          />
                          <em className=" absolute  bg-slate-900 text-white p-2 text-center rounded-xl bottom-16 h-[230px] w-[200px] ">"{el.description}"</em>
                          </div>
                          </div>
                    </label>

                    {/* absolute z-20 left-6 bottom-0 flex justify-center mx-auto */}

                    <p>{el.title}</p>
                    <p>Price {el.price} Baht</p>
                    <div onClick={() => addtoCart(el.id)} className="btn w-wide m-2">Add to cart</div>
              </div>
            );
          })}
      </div>
      </div>
      <div>
      
      </div>

      <div className="join grid grid-cols-2 w-60 justify-center mx-auto my-8 ">
      <button onClick={() => hdlPageChange(-1)} className="border text-xl join-item btn btn-md">previous</button>
      <button onClick={() => hdlPageChange(+1)} className="border text-xl join-item btn btn-md ">next</button>
    </div>



  </div>
  )
}

export default Shop