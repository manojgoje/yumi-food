import React from 'react'

const Delivery = () => {
  return (
   <>
   <div className=' w-full py-16 px-4 '>
    <h3 className=' text-[#fbc531] font-bold text-2xl text-center'>Quick Delivery App</h3>
    <div className=' grid grid-cols-2 w-[70%] mx-auto my-10 gap-10'>
    <img className='w-[550px]' src='https://img.freepik.com/free-vector/flat-design-delivery-concept_23-2149147990.jpg?size=626&ext=jpg&ga=GA1.1.390424810.1710836199&semt=ais'/>
        <div className='flex flex-col justify-center'>
            <p className='font-bold text-[green] text-[20px] md:text-[20px ]'>Get The App</p>
            <h2 className=' sm:text-2xl md:text-3xl lg:text-5xl py-2 font-bold'  >The Fastest Food Delivery in india </h2>
            <button className='bg-black sm:w-[100px] md:w-[200px] text-white rounded-md my-6 py-[15px] md:text-[20px] sm:text-[10px] font-semibold hover:text-[#fbc531]'>Get Satrted </button>
        </div>
    </div>
   </div>
   </>
   
    
  )
}

export default Delivery