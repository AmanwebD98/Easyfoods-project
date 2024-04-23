import React from 'react'
import { TopPiks } from './Data/Data2'
const Ourfood = () => {
  return (
    <>
      <div>
        <h2 className='text-center text-3xl font-bold py-3 text-[#FAA300]'>Our Food</h2>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-6 gap-3'>
        {
          TopPiks.map((item, i) => {
            return <div key={i}>
              <div className='text-center text-[#FAA300] flex-col items-center  '>
                <div>
                 <img src={item.img} alt="" className='w-[200px] h-[200px] items-center rounded-lg object-cover ml-[82px]  '  />
                </div>
                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                  <p className='text-x1 font-semibold uppercase'>{item.title}</p>
                  <p className='text-x1 font-semibold uppercase'>{item.price}</p>
                  <button className='bg-black w-[100px] text-white rounded-md py-[10px] text-[15px] hover:text-[#fbc531]'>Add to cart</button>
                </div>
             </div>
            
            
            
            
            
            
            
            
            
            
            
            </div>
          })
        }
      </div>
      












































































      </>
  )
}

export default Ourfood
