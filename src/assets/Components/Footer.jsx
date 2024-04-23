import React from 'react'

const Footer = () => {
  return (
    <div>
          <div className='flex justify-around bg-black text-white w-full py-5'>
              <div><p className=' font-bold text-[30px] mb-3'>Easy<span className='text-[#FAA300]' >Foods</span></p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>© 2023 Bundl Technologies Pvt. Ltd</p>
              </div>
              <div className='cursor-pointer'>
                  <h1 className=' font-bold text-[25px] mb-3'>Company</h1>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>About</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Careers</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Teams</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Swiggy One</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Swiggy Instamart</p>
              </div>
              <div  className='cursor-pointer'>
                  <h1 className=' font-bold text-[25px] mb-3'>Contact us</h1>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Help & Support</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Partner with us</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Ride with us</p>
              </div>
              <div className='cursor-pointer'>
                  <h1 className=' font-bold text-[25px] mb-3'>Legal</h1>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Terms and Conditions</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Cookies Policy</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Privacy Policy</p>
                  
              </div>
              <div className='cursor-pointer'>
                  <h1 className=' font-bold text-[25px] mb-3'>We deliver to</h1>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Banglore</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Gurgaoo</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Delhi</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Hyderabad</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Mumbai</p>
                  <p className='text-[20px] mb-2 text-[gray] hover:text-white'>Pune</p>
              </div>
      </div>
    </div>
  )
}

export default Footer
