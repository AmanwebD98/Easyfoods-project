import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
    const [sideNav, setsideNav] = useState(false)
    console.log(sideNav)
  return (
    <div  className='flex justify-between py-[20px] text-[18px] font-semibold border-b relative' >
          <div>
              <p className='cursor-pointer ml-5'>Easy<span className='text-[#FAA300]'>Foods</span></p>
      </div>
          <div >
             
        <ul className='sm:flex gap-4 cursor-pointer hidden   '>
          <Link to='/home'><li className='hover:text-[#FAA300]'  >Home</li></Link>
            <Link to='/aboutus'><li className='hover:text-[#FAA300]'  >About Us</li></Link>    
             <Link to='/ourfood'><li className='hover:text-[#FAA300]'  >Our Food</li></Link>   
               <Link to='/signin'><li  className='hover:text-[#FAA300]' >Sign In</li></Link> 
                
              </ul>



              {
                  sideNav?<div className='bg-[#f5f6fa] w-[300px] absolute top-[5px] right-0 text-center h-[100vh] flex items-center justify-center'>
              <RxCross1 size={25}  className='absolute top-3 right-3'onClick={() => {
                  setsideNav(!sideNav)
              }}  />
            <ul className=' flex gap-12 cursor-pointer flex-col '>
              <Link></Link>
                <li className='hover:text-[#FAA300]' >Home</li>
                <li className='hover:text-[#FAA300]'  >About Us</li>
                <li className='hover:text-[#FAA300]'  >Our Food</li>
                <li className='hover:text-[#FAA300]' >Sign In</li>
              </ul>
              
      </div>:''
            
            
            
        
            
            
                }  
      </div>
          <div className='flex gap-4'>
              <p className='cursor-pointer block sm:hidden' onClick={() => {
                  setsideNav(!sideNav)
              }}><GiHamburgerMenu size={30}  /></p>
           <p className='cursor-pointer mr-5'><HiMiniShoppingCart size={30} /></p>   
      </div>
    </div>
  )
}

export default Header


      