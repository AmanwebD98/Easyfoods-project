import React from 'react'

const Delivery = () => {
    return (
      <div>
    <div className='w-full'>
                <h3 className='text-[#FAA300] text-center font-bold text-[38px] pt-6'>Quick Delivery App</h3>
                <div className='grid grid-cols-2 w-[70%] mx-auto my-10 gap-10'><img src="https://hapteq.in/public/images/media/1688478776food-delivery-app.png" style={{ width: '520px' }} alt="" />
                    <div className='flex flex-col justify-center' >
                        <p className='font-bold text-[green] text-[30px]'>Get the App</p>
                        <h2 className=' py-2 font-bold text-5xl'>The Fastest Food Delivery In India</h2>
                        <button className='bg-black w-[200px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-yellow-400'>Get Started</button>
                    </div>
                </div>
    </div>
  </div> )
}

export default Delivery
