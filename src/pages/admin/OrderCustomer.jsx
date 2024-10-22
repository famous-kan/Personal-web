import React, { useEffect, useState } from 'react';
import useOrderStore from '../../stores/orderStore';
import useUserStore from '../../stores/userStore';

const OrderCustomer = () => {
    const getAllOrder = useOrderStore((state) => state.getAllOrder);
    const token = useUserStore((state) => state.token);
    const allorders = useOrderStore(state => state.allorders);
    const changeStatus = useOrderStore(state => state.changeStatus);
    const [openIndex, setOpenIndex] = useState(null);
    const [curStatus, setCurStatus] = useState({});

    useEffect(() => {
        getAllOrder(token);
    }, [getAllOrder, token]);

    const hdlChange = (e, index) => {
        setCurStatus(prev => ({ ...prev, [index]: e.target.value }));
    };

    const hdlSubmit = async (e, id,index) => {
        e.preventDefault();
        const res = await changeStatus(id, curStatus[index], token);
        getAllOrder(token);
        setCurStatus(prev => ({ ...prev, [index]: '' })); // Reset only the submitted status
        console.log(curStatus);
    };

    return (
        <div>
            <em className='flex justify-center p-3 text-center text-3xl text-white'>All Orders</em>
            <div className="flex flex-col gap-5">
                {allorders.map((order, index) => {
                    return (
                        <div key={order.id} className="!collapse bg-base-200">
                            <input
                                type="checkbox"
                                checked={openIndex === index}
                                onChange={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                            <div className="collapse-title text-xl font-medium">
                                Order no. {index + 1}
                            </div>
                            {openIndex === index && (
                                <div className="collapse-content">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 ">Product Name</th>
                                                <th scope="col" className="px-6 py-3">Qty</th>
                                                <th scope="col" className="px-6 py-3 ">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.productOnOrders.map((el) => (
                                                <tr className="bg-white dark:bg-gray-800" key={el.product.id}>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {el.product.title}
                                                    </th>
                                                    <td className="px-6 py-4">{el.count}</td>
                                                    <td className="px-6 py-4">{el.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="font-semibold text-gray-900">
                                                <th scope="row" className="px-6 py-3 text-base">Total</th>
                                                <td className="px-6 py-3">{order.productOnOrders.reduce((acc, { count }) => acc + count, 0)}</td>
                                                <td className="px-6 py-3">{order.cartTotal}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <p className='my-2 text-black'>Payment method: {order.payment_method.split("_").join(' ')}</p>
                                    <div className='flex gap-3 w-full'>
                                        <div className='flex gap-2'>
                                            <div>Delivery status:</div>
                                            <form className="flex h-[50px] gap-1" onSubmit={(e) => hdlSubmit(e, order.id,index)}>
                                                <select
                                                    onChange={(e) => hdlChange(e, index)}
                                                    value={curStatus[index] || order.status} // Default to order.status if curStatus is empty
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="" disabled>{order.status.split("_").join(' ').toLowerCase()}</option>
                                                    <option value="ORDER_RECIEVED">Order received</option>
                                                    <option value="ORDER_PREPARED">Order prepared</option>
                                                    <option value="ON_THE_WAY">On the way</option>
                                                    <option value="DELIVERED">Delivered</option>
                                                </select>
                                                <button className='btn h-[40px] btn-primary'> Save</button>
                                            </form>
                                        </div>
                                        <div className="divider divider-horizontal"></div>
                                        <div className='flex gap-3'>
                                            {order.imageTransaction && 
                                                <p className='flex gap-3'> Image Transaction: 
                                                    <img src={order.imageTransaction} alt="" className='h-[200px] w-[200px]'/>
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OrderCustomer;
