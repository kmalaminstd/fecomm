import React from 'react'
import { logo } from '../assets'
import { IoHome, IoLocation, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoPaypal, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'

function Footer() {
  return (
    <div className="w-[100%] bg-black py-10 text-[#949494] font-titleFont">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            <div className="flex flex-col gap-5">
                <img className="w-32" src={logo} alt="" />
                <p>reactbd.com</p>
                <div className="flex gap-3">
                    <IoLogoGithub className="hover:text-white duration-300 cursor-pointer" />
                    <IoLogoYoutube className="hover:text-white duration-300 cursor-pointer" />
                    <IoLogoFacebook className="hover:text-white duration-300 cursor-pointer" />
                    <IoLogoTwitter className="hover:text-white duration-300 cursor-pointer" />
                    <IoLogoInstagram className="hover:text-white duration-300 cursor-pointer" />
                </div>
            </div>
            <div>
               <h2 className="font-semibold text-white">Locate Us</h2> 
                <div className="mt-2 flex flex-col gap-3">
                    <p>MbdRuimOSET.oman</p>
                    <p>MbdRuimOSET.oman</p>
                    <p>MbdRuimOSET.oman</p>
                    <p>MbdRuimOSET.oman</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="font-semibold text-white mb-2">Profile</h2>
                <div className="flex flex-col gap-3">
                    <p className="flex gap-2 hover:text-white duration-300 cursor-pointer"><span> <FaRegUser /> </span> My account</p>
                    <p className="flex gap-2 hover:text-white duration-300 cursor-pointer"><span> <IoLogoPaypal /> </span> Checkout</p>
                    <p className="flex gap-2 hover:text-white duration-300 cursor-pointer"><span> <IoHome /> </span> Order Tracking</p>
                    <p className="flex gap-2 hover:text-white duration-300 cursor-pointer"><span> <IoLocation /> </span> Help & Support</p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <input className="bg-transparent w-[100%] border-gray-200 border-2 py-1 px-4" type="email" placeholder='Email' />
                <button className="bg-transparent w-[100%] border-gray-200 border-l-2 border-r-2 border-b-2 py-1 px-4 hover:bg-slate-500 duration-300 hover:text-black">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer