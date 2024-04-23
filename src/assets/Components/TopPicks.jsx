import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TopPiks } from './Data/Data'


const TopPicks = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='w-[90%] mx-auto '>
              <h2 className='font-bold text-center pt-3 text-[45px]'>What's on your mind?</h2>
                <div className='py-20 '>

                    <Slider {...settings}>
                        {
                            TopPiks.map((item, i) => {
                                return <div key={i}>

                                    <div className='bg-[white] rounded-md'>
                                        <div className='flex justify-center items-center rounded-tl-xl'>
                                            <img src={item.img} className='w-[200px]  rounded-full h-[200px] object-cover  ' />
                                        </div>

                                        <div className=' flex flex-col justify-center items-center gap-2 p-4'>
                                      <p className='text-xl font-semibold uppercase'>{item.title}</p>
                                      <p className='text-xl font-semibold '> ₹{item.price}</p>
                                            <button className='bg-black w-[200px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-yellow-400'>Add to cart</button>
                                        </div>

                                    </div>

                                </div>
                            })
                        }
                    </Slider>

                </div>

            </div>

        </div>
    )

}
export default TopPicks