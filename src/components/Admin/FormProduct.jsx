import React, { useEffect, useState } from "react";
import useUserStore from "../../stores/userStore";
import useProductStore from "../../stores/productStore";
import axios from "axios";
import { toast } from "react-toastify";
import EditProduct from "./EditProduct";

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
      <form onSubmit={hdlSubmit} className="flex flex-col w-3/4 mx-auto ">
        <h1 className="text-2xl">Add product</h1>
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
          type="file"
          id="myFile"
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
        ></input>
        <br />
        <button className="btn btn-primary">Update</button>
        <hr />
        <br />
        <table className="border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, index) => {
              return (
                <tr key={el.id}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <img
                      src={el.image || "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"}
                      alt="GFG Logo"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>{el.title}</td>
                  <td>{el.description}</td>
                  <td>{el.price}</td>

                  <td> 
            <button type='button' className='btn btn-secondary'
             onClick={() => {
             setEditProduct(el.id)
             document.getElementById('edit-modal').showModal()
            }}
                 >Edit</button>
            </td>
                  <td> 
            <button className="btn btn-xs text-white btn-primary" onClick={() => hdlRemoveProduct(el.id) }> Delete </button>
            </td>
                </tr>
                
              );
            })}
          </tbody>
        </table>
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
