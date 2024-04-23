import React, { useEffect, useState } from 'react'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// import { s } from 'vite/dist/node/types.d-AKzkD8vd';


const Hero = () => {
    const imgData = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpeg'
    
        },{
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpeg'
        },
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpeg'
        },
        {
            url:"https://images.unsplash.com/photo-1568716508386-cda5cdec6827?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url:"https://images.unsplash.com/photo-1572830191837-0b705965d1a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url:"https://images.unsplash.com/photo-1545729869-e4f40b34394d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            url:"https://images.unsplash.com/photo-1591271956190-d084c9870334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url:"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
        url:"https://images.unsplash.com/photo-1553621043-f607bfbf6640?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    const[Slider,setSlider] = useState(0)
  
    const handleplus = () => {
     setSlider(Slider===imgData.length-1?0:Slider+1)
 }
const handleMinus = () => {
     setSlider(Slider===0?imgData.length-1:Slider-1)
 }
    useEffect(() => {
       const sliderClear = setInterval(() => {
         handleplus()
       }, 2000)
        return()=> clearInterval(sliderClear)
        
 },[Slider])

  return (
      <div>
         
          <div className='w-[90%] mx-auto h-[80vh] my-5'>
              {
                  imgData.map((item,i) => (
                      <div key={i} className={`${Slider===i?"block":"hidden"}`}>
                       <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover  ' />   
                      </div >
                  ))
              }
          <div>
              
      </div>
          </div>
          
          <div className='w-full mx-auto h-[80vkh] absolute top-12 left-0 mt-11 right-0 bg-black opacity-50 object-fill text-white '></div>
          <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
             <div className='absolute w-full text-center font-serif text-[38px] text-white  '> <p> Welcome to the World of Testy & Fresh Food</p></div>
              <  FaChevronLeft size={35} className='cursor-pointer' onClick={handleMinus} />
              <FaChevronRight size={35} className='cursor-pointer'  onClick={handleplus} />
       </div>




    </div>
  )
}

export default Hero
