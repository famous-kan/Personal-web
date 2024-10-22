import useOrderStore from "../../stores/orderStore";
import useUserStore from "../../stores/userStore";
import React, { useEffect, useState } from "react";

const Status = () => {
  const getOrder = useOrderStore((state) => state.getOrder);
  const token = useUserStore((state) => state.token);
  const orders = useOrderStore((state) => state.orders);
  const [openIndex, setOpenIndex] = useState(null);
  const changeStatus = useOrderStore(state => state.orders)

  useEffect(() => {
    getOrder(token);
  }, []);


  return (
    <div>

      <em className="flex justify-center m-3 text-3xl ">History</em>
  
      
    
      <div className="flex flex-col gap-5 w-2/3 mx-auto">
        {orders.map((order, index) => {
          console.log(orders)
          return(
          <div key={order.id} className="!collapse bg-base-200">
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
                <div className="flex gap-4">
                  <div>Delivery status:</div>
                  <div className="font-bold">{order.status.split("_").join(' ').toLowerCase()}</div>
                </div>
              </div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
};

export default Status;
