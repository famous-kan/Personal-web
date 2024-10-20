import React, { useEffect, useState } from 'react'
import useOrderStore from '../../stores/orderStore';
import useUserStore from '../../stores/userStore';

const OrderCustomer = () => {
    const getAllOrder = useOrderStore((state) => state.getAllOrder);
    const token = useUserStore((state) => state.token);
    const allorders =useOrderStore(state => state.allorders)
    const [openIndex, setOpenIndex] = useState(null);
    const changeStatus = useOrderStore(state=> state.changeStatus)
    const [curStatus, setCurStatus] = useState('')


    console.log(allorders)

    useEffect(() => {
      getAllOrder(token);
      }, []);
    
const hdlChange = (e) => {
  setCurStatus(e.target.value)
  console.log(curStatus)
}

const hdlSubmit = async(e,id) => {
  e.preventDefault()
  const res = await changeStatus(id,curStatus,token)
  console.log(res)
  getAllOrder(token)
  setCurStatus('')
}


  return (
    <div>
        <div>All Orders </div>

        <div className="flex flex-col gap-5">
        {allorders.map((order, index) => (
          <div key={order.id} className="collapse bg-base-200">
            <input
              type="checkbox"
              checked={openIndex === index}
              onChange={() => setOpenIndex(openIndex === index ? null : index)}
            />
            <div className="collapse-title text-xl font-medium">
              Order no. {index+1}
            </div>
            {openIndex === index && (
              <div className="collapse-content">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 ">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.productOnOrders.map((el,index) => (
                      <tr className="bg-white dark:bg-gray-800">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {el.product.title}
                        </th>
                        <td className="px-6 py-4">{el.count}</td>
                        <td className="px-6 py-4">{el.price}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="font-semibold text-gray-900">
                      <th scope="row" className="px-6 py-3 text-base">
                        Total
                      </th>
                      <td className="px-6 py-3">{order.productOnOrders.reduce((acc, { count }) => acc + count, 0)}</td>
                      <td className="px-6 py-3">{order.cartTotal}</td>
                    </tr>
                  </tfoot>
                </table>
                <div className='flex gap-3'>
                  {/* <div>{order.status}</div> */}   
                  <div>Delivery status:</div>
                  <form className="" onSubmit={(e) => hdlSubmit(e,order.id)}>
                  <select 
                      onChange={hdlChange} 
                      value={curStatus || order.status} // Default to order.status if curStatus is empty
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">                      
                      <option value="" disabled>{order.status.split("_").join(' ').toLowerCase()}</option>
                      <option name="recieved" value="ORDER_RECIEVED">Order recieved</option>
                      <option name="prepared" value="ORDER_PREPARED">Order prepared</option>
                      <option name="way" value="ON_THE_WAY">On the way</option>
                      <option name="delivered" value="DELIVERED">Delivered</option>
                    </select>
                    <button className='btn'> Save</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>



    </div>
  )
}

export default OrderCustomer