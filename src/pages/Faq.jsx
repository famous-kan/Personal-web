import React from 'react'

const Faq = () => {
  return (
    <div>
        
        <div className='bg-red-100 w-full h-[150px] flex flex-col'>
            <em className='text-[40px] font-bold mx-[100px] my-4' >Frequently Asked Questions</em>
            <div className='mx-[100px] my-[-20px] text-gray-400'>22 Oct.2024</div>
        </div>

        <div className='flex flex-col gap-2 justify-center items-center mx-auto my-5 text-xl w-2/3'>
            <p>Frequently Asked Questions</p>

            <div className='divider w-2/3 flex mx-auto'></div>
            
            <div className='flex flex-col gap-4 w-full'>

                <details className="!collapse collapse-plus bg-base-200">
                    <summary className="collapse-title bg-rose-300 text-white">Do you deliver to other provinces?</summary>
                    <div className="collapse-content text-sm my-3 ">
                        <p>Yes, LoveYouFlower™ has branches that provide delivery to other provinces including Nonthaburi, Samut Prakan, Pathum Thani, and Phuket. Apart from fresh flowers, we also offer other products such as artificial flower baskets, gift boxes, and vases which are available for nationwide delivery. Deliveries typically take about 2 business days and might come with additional delivery fees.</p>
                    </div>
                </details>
                
                <details className="!collapse collapse-plus bg-base-200">
                    <summary className="collapse-title bg-rose-300 text-white">What are your operating hours? Do you offer 24-hour delivery?</summary>
                    <div className="collapse-content text-sm my-3 ">
                        <p>LoveYouFlower™ is open every day. We operate 24 hours daily. Customers can place their orders directly through our website anytime, around the clock. However, our delivery time is from 9 a.m. to 9 p.m.</p>
                    </div>
                </details>

                <details className="!collapse collapse-plus bg-base-200">
                    <summary className="collapse-title bg-rose-300 text-white">How long does the fastest delivery take?</summary>
                    <div className="collapse-content text-sm my-3 ">
                        <p>Once your order has been confirmed, our store can provide the fastest delivery within 2 - 4 hours, depending on the type of product, delivery area, and traffic conditions. As we don't have ready-made flower arrangements on hand, we freshly craft each order based on your specifications to ensure the freshest flowers/products are delivered to our customers.</p>
                    </div>
                </details>

                <details className="!collapse collapse-plus bg-base-200">
                    <summary className="collapse-title bg-rose-300 text-white">Is it possible to change the type of flowers, paper color, or flower color?</summary>
                    <div className="collapse-content text-sm my-3 ">
                        <p>Yes, you can personalize your orders by changing the color of paper, flowers, and ribbons based on your preferences and availability. However, the availability of certain flower colors or types might be season-dependent. Please note that changing the type of flowers may incur additional costs. If you wish to make changes, you can directly inquire with our staff.</p>
                    </div>
                </details>

                <details className="!collapse collapse-plus bg-base-200">
                    <summary className="collapse-title bg-rose-300 text-white">What is the minimum order amount to get free delivery?</summary>
                    <div className="collapse-content text-sm my-3 ">
                        <p>All products from LoveYouFlower™ come with free delivery within the specified areas (Bangkok and Nonthaburi) without any minimum purchase requirement. However, for locations outside these areas, additional delivery fees may apply.</p>
                    </div>
                </details>

            </div>
        </div>
        
        
        
        
        
    </div>
  )
}

export default Faq