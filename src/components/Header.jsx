import React from 'react'
import {cartImg, logo, userImg} from '../assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const productData = useSelector((state) => state.ecomm.productData)
    const userInfo = useSelector(state => state.ecomm.userInfo)
    // console.log(userInfo.image);
  return (
    <>
        <div className="w-full border-b-[1px] h-20 border-b-gray-800 font-titleFont">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <Link to="/">
                        <img className="w-28" src={logo} alt="" />
                    </Link>
                </div>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-black font-bold text-base hover:underline hover:text-orange-400 underline-offset-2 cursor-pointer decoration-[1px] duration-300">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="text-black font-bold text-base hover:underline hover:text-orange-400 underline-offset-2 cursor-pointer decoration-[1px] duration-300">Pages</li>
                        <li className="text-black font-bold text-base hover:underline hover:text-orange-400 underline-offset-2 cursor-pointer decoration-[1px] duration-300">Shop</li>
                        <li className="text-black font-bold text-base hover:underline hover:text-orange-400 underline-offset-2 cursor-pointer decoration-[1px] duration-300">Element</li>
                        <li className="text-black font-bold text-base hover:underline hover:text-orange-400 underline-offset-2 cursor-pointer decoration-[1px] duration-300">Blog</li>
                    </ul>
                    <div className="relative">
                        <Link to="cart">
                            <img className="w-6" src={cartImg} alt="" />
                            <span className="absolute bg-black top-[-8px] right-[-10px] text-white rounded-full font-bold w-full h-full text-center">{productData.length}</span>
                        </Link>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-400 overflow-hidden">
                        <Link to="login">
                            <img src={userInfo ? userInfo.image : userImg} alt="" />
                        </Link>
                        
                    </div>
                         {
                            userInfo && 
                            <p className="font-bold ml-[-25px]">{userInfo.name}</p>
                        }
                </div>
            </div>

        </div>
    </>
  )
}

export default Header