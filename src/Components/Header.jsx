import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({count}) => {
    const [sideNav ,setSideNav] = useState(false);
    

     
  return (
    <div className=' fixed z-50 top-0 left-0  w-full bg-white'>
    <div className=' flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b relative  '>
        <div>
            <Link to="/">
            <p className='cursor-pointer'>Yamii <span className='text-[#fbc531]'>Food</span></p>
            </Link>
        </div>
        <div >
       
            
            <ul className='sm:flex gap-5 hidden cursor-pointer '>
                <Link to='/' >
                    <li className='hover:text-[#fbc531]'>Home</li>
                    </Link>

                <Link to ='/AboutUs'>
                    <li className='hover:text-[#fbc531]'>About us</li>
                    </Link>

                <Link to ='/ourfood'>
                    <li className='hover:text-[#fbc531]'>Our Food</li>
                    </Link>

                <Link to='/signIn'>
                    <li className='hover:text-[#fbc531]'>Sign in</li>
                    </Link>
                
            </ul>

        </div>

        {
            sideNav?<div className='bg-[#f5f6fa] w-[300px] absolute   top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10 '>
            <RxCross2 size={25} className=' absolute top-[5px] right-3  cursor-pointer'
            onClick={()=>{setSideNav(!sideNav)}} />
            
                <ul className='flex gap-[20px] cursor-pointer flex-col'>
                <Link to='/' >
                    <li className='hover:text-[#fbc531]'  onClick={()=>{setSideNav(!sideNav)}} >Home</li>
                    </Link>

                <Link to ='/AboutUs'>
                    <li className='hover:text-[#fbc531]'  onClick={()=>{setSideNav(!sideNav)}} >About us</li>
                    </Link>

                <Link to ='/ourfood'>
                    <li className='hover:text-[#fbc531]'  onClick={()=>{setSideNav(!sideNav)}} >Our Food</li>
                    </Link>

                <Link to='/signIn'>
                    <li className='hover:text-[#fbc531]'  onClick={()=>{setSideNav(!sideNav)}} >Sign in</li>
                    </Link>
                
                </ul>
                
            </div>:""
        }
        <div className='flex gap-5'>
            <p><GiHamburgerMenu size={25} className=' cursor-pointer block sm:hidden'
               onClick={()=>setSideNav(!sideNav)}
            />

            </p>
            <p>
                {count}
                <FaCartShopping size={25} className=' cursor-pointer '/>
            </p>
        </div>
    </div>
    </div>
  )
}

export default Header





// {/* <div className='bg-[#f5f6fa] w-[300px] absolute   top-0 right-0 text-center h-[100vh] flex items-center justify-center  '>
// <RxCross2 size={25} className=' absolute top-[5px] right-3  cursor-pointer' />

//     <ul className='sm:flex gap-12 hidden cursor-pointer flex-col'>
//         <li className='hover:text-[#fbc531]'>Home</li>
//         <li className='hover:text-[#fbc531]'>About us</li>
//         <li className='hover:text-[#fbc531]'>Offers</li>
//         <li className='hover:text-[#fbc531]'>Sign in</li>
//     </ul>
    
// </div> */}