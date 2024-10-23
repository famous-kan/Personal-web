import axios from 'axios';
import React, { useState } from 'react'
import useUserStore from '../../stores/userStore';
import { toast } from 'react-toastify';
import useProductStore from '../../stores/productStore';

const initialState = {
    title: "",
    description: "",
    price: "",
    image: "",
  };

const EditProduct = (props) => {
    
    const [file, setFile] = useState(null)
    const [input, setInput] = useState(initialState);
    const token = useUserStore(state => state.token)
    const getAllProducts = useProductStore(state => state.getAllProducts)

    const hdlChange= e => {
        setInput(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const hdlUpdate = async(e,id) => {
        e.preventDefault()
        try {
            const body = new FormData()
            // console.log(!!input.title,!!input.description,!!input.price)
            if (input.title){ 
                body.append('title', input.title)
            }
            if (input.description) {
                body.append('description', input.description)
            }
            if (input.price) {
                body.append('price', input.price)
            }
            if(file){
                body.append('image', file)
            }
            console.log(`http://localhost:8000/product/${id}`)
            const result = await axios.patch(`http://localhost:8000/product/${id}`, body , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success('Edit data completely')
            
            getAllProducts(10,1,token)
        } catch (err) {
          console.log(err)
        }
      }
    

  return (
    <div>
        <form className='flex flex-col' onSubmit={(e) => hdlUpdate(e,props.id)}>
        Title :
        <input
          type="text"
          className="border"
          name="title"
          onChange={hdlChange}
        />
        <br />
        Description :
        <input
          type="text"
          className="border"
          name="description"
          onChange={hdlChange}
        />
        <br />
        Price :
        <input
          type="text"
          className="border"
          name="price"
          onChange={hdlChange}
        />
        <br />
        Image :
        <input
          type="file"
          id="myFile"
          name="image" 
          onChange={(e) => setFile(e.target.files[0])}
          />
        <button>Submit</button>
        </form>




    </div>
  )
}

export default EditProduct