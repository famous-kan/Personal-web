import React, { useEffect, useState } from 'react'
import useProductStore from '../stores/productStore';

const SearchProduct = () => {
    const getAllProducts = useProductStore(state => state.getAllProducts)
    const products = useProductStore((state) => state.products);
    const searchFilter =useProductStore(state => state.searchFilter)
    
    const [text, setText]  = useState('')

    useEffect(() => {

        const delay = setTimeout(() => {
            searchFilter({query : text})
            if(!text){
                getAllProducts()
            }
        },300)

        return () => clearTimeout(delay)

    },[text])


  return (
    <div className='flex items-center'>
        <input type="text"
        onChange={e => setText(e.target.value)} 
        className="grow rounded-xl h-8" 
        placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
        
        </div>
  )
}

export default SearchProduct