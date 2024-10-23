import React, { useEffect, useState } from "react";
import useUserStore from "../../stores/userStore";
import useProductStore from "../../stores/productStore";
import axios from "axios";
import { toast } from "react-toastify";
import EditProduct from "./EditProduct";
import { MdDelete } from "react-icons/md";

const initialState = {
  title: "",
  description: "",
  price: "",
  image: "",
};

const FormProduct = () => {
  const token = useUserStore((state) => state.token);
  const [input, setInput] = useState(initialState);
  const [file, setFile] = useState(null)
  const [page, setPage] = useState(1)
  const [editProduct, setEditProduct] = useState(0)
  const getAllProducts  = useProductStore((state) => state.getAllProducts);
  const products = useProductStore((state) => state.products);
  useEffect(() => {
    getAllProducts(10,page, token);
  }, []);
  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlPageChange = (n) => {
    try {
      if(page+n < 1){
        return 
      }
      if (n>0 && products.length < 10){
        return
      }
      setPage(prev => prev+n)
      getAllProducts(10,page+n, token)
    } catch (err) {
      return
    }
  }

  const hdlRemoveProduct = async(id)=>{
    try {
      const result = await axios.delete(`http://localhost:8000/product/${id}` , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result)
      getAllProducts(10, page, token)
      toast.success(`Removed Completely`)
    } catch (err) {
      console.log(err)
    }
  }


  

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = new FormData()
      body.append('title', input.title)
      body.append('description', input.description)
      body.append('price', input.price)
      if(file){
        body.append('image', file)
      }
      
      const result = await axios.post("http://localhost:8000/product", body , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllProducts(10, page, token)
      toast.success(`เพิ่มข้อมูลดอก ${result.data.product.title} สำเร็จ`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
   
    <div className="container mx-auto p-4 bg-white shadow-md">
      <form onSubmit={hdlSubmit} className="flex flex-col mx-auto gap-1 ">
        <div className="flex flex-col w-2/3 justify-center mx-auto">
        <em className="text-3xl text-center my-3">Add product</em>
        Title :{" "}
        <input
          type="text"
          className="border"
          value={input.title}
          name="title"
          onChange={hdlChange}
        />
        <br />
        Description :{" "}
        <input
          type="text"
          className="border"
          name="description"
          value={input.description}
          onChange={hdlChange}
        />
        <br />
        Price :
        <input
          type="text"
          className="border"
          name="price"
          value={input.price}
          onChange={hdlChange}
        />
        <br />
        Image :
        <input
        className="file-input file-input-bordered w-full max-w-xs"
          type="file"
          id="myFile"
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
        ></input>
        <br />
        <button className="btn btn-primary text-xl my-2">Add</button>
        </div>
        <hr />
        <br />

        <div className=" w-full">
        <table className="w-full">
          <thead>
            <tr className=" bg-teal-950 text-white">
              <th className="w-[30px] h-10 text-center" scope="col">#</th>
              <th className="w-[300px] text-center" scope="col">Image</th>
              <th className="w-[200px] text-center" scope="col">Title</th>
              <th className="w-[400px] text-center" scope="col">Description</th>
              <th className="w-[80px] text-center" scope="col">Price</th>
              <th className="w-[100px] text-center" scope="col">Edit</th>
              <th className="w-[100px] text-center" scope="col">Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map((el, index) => {
              return (
                <tr key={el.id}>
                  <th className="text-center text-xl" scope="row">{index+1}.</th>
                  <td>
                    <img
                      src={el.image || "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"}
                      alt="GFG Logo"
                      className="w-[200px] mx-auto"
                    />
                
                  </td>
                  <td className="text-center text-xl">{el.title}</td>
                  <td className="">{el.description}</td>
                  <td className="text-center font-bold ">{el.price}</td>

                  <td className=" "> 
                    
            <button type='button' className='btn btn-outline w-[60px] mx-4 '
             onClick={() => {
             setEditProduct(el.id)
             document.getElementById('edit-modal').showModal()
            }}
                 >Edit</button>
            </td>
                  <td> 
            <button className="btn  text-white bg-red-500  w-[70px] mx-4" onClick={() => hdlRemoveProduct(el.id) }><MdDelete className="w-[30px] h-[30px]" /></button>
            </td>
                </tr>
                
              );
            })}
          </tbody>
        </table>
        </div>

      </form>
      <div className="flex gap-3">
        <button onClick={() => hdlPageChange(-1)} className="btn">previous</button>
        <button onClick={() => hdlPageChange(+1)} className="btn">next</button>
      </div>
    </div>

    <dialog id="edit-modal" className="modal">
        <div className="modal-box">
            <button 
            type='button'
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={e=>e.target.closest('dialog').close()}
            >✕ </button>
          <EditProduct id={editProduct}/>
        </div>
    </dialog>
    


    </>

  );
};

export default FormProduct;
