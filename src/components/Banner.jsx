import React, { useState } from 'react'
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { slider1, slider2, slider3 } from '../assets';

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        slider1,
        slider2,
        slider3,
    ]

    const prevSlider = ()=>{
        setCurrentSlide( currentSlide === 0 ? 2 : (prev)=> prev -1)
    }

    const nextSlide = ()=>{
        setCurrentSlide( currentSlide === 2 ? 0 : (prev)=> prev+1)
    }

    // console.log( currentSlide);
  return (
    <div className="w-full h-auto  overflow-x-hidden">
        <div className="relative w-screen h-[650px]">
            <div style={{transform: `translateX(-${currentSlide*100}vw)`}} className="flex w-[300vw] h-full transition-transform duration-1000">
                <img 
                    className="w-screen h-full object-cover"
                    src={data[0]} alt="" 
                    loading="priority"
                />
                <img 
                    className="w-screen h-full object-cover"
                    src={data[1]} alt="" 
                    loading="priority"
                />
                <img 
                    className="w-screen h-full object-cover"
                    src={data[2]} alt="" 
                    loading="priority"
                />
            </div>
            <div className="absolute bottom-[100px] left-[50%] translate-x-[-50%] flex gap-5">
                <button onClick={prevSlider} className="text-3xl hover:bg-slate-400 hover:text-white duration-300 border-2 p-3 cursor-pointer">
                    <IoArrowBack />
                </button>
                <button onClick={nextSlide} className="text-3xl hover:bg-slate-400 hover:text-white duration-300 border-2 p-3 cursor-pointer">
                    <IoArrowForward />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner