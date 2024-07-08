import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


 


const Hero = () => {

    const imgData =[
        
        {
            imgg :'https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1580'
        },
        {
            imgg :'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1580'
        },
        {
            imgg :'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1580'
        }
    ]

    const [slider, setSlider] = useState(0)

    const handlePlus = ()=>{
        setSlider( slider === imgData.length-1 ?(0):(slider+1) )
    };
    const handleMinus = ()=>{
        setSlider( slider === 0? (imgData.length-1): (slider-1))
    };

    

    useEffect (()=>{

     let interval= setInterval(()=>{
                handlePlus();
        },2000)
        return()=>{
            clearInterval(interval)
        }

    },[slider]);


  return (
   <div className=' mt-[100px]'>
    <div  className='w-[97%] mx-auto h-[80vh] my-5 relative '>
        <div>
        {
            imgData.map((item,i)=>(
                <div key={i} className={`${slider === i ?"block":"hidden"}`}>
                    <img src={item.imgg} alt="image" className='w-full h-[80vh] rounded-2xl object-cover' />
                </div>
            ))
        }
    {/* <img src={imgData[slider].imgg} alt="image" /> */}
    </div>
    <div className='w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div>
   <div>
   <p className=' absolute top-[50%] text-white left-0 text-center w-full font-semibold text-[20px] md:text-[30px] '>welcome to the world of Testy & Freshfood</p>
   </div>
    <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
        <FaChevronLeft  size={40}  className='cursor-pointer' onClick={handleMinus}/>
        <FaChevronRight  size={40}  className='cursor-pointer'onClick={handlePlus} />
        </div>
   </div>
   </div>
  )
}

export default Hero