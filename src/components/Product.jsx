import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {MdOutlineStar} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/commerceSlice'
import { toast } from 'react-toastify'


function Product() {
    const [details, setDetails] = useState({})
    let [baseQty, setBaseQty] = useState(1)
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        setDetails(location.state.item);
    },[])
    // const productData = useSelector((state) => state.ecomm.productData)
    // console.log(productData);
  return (
    <>
        <div className="max-w-screen-xl mx-auto my-10 flex gap-10 ">
            <div className="w-2/5 relative">
                <img className="w-full h-[550px] object-cover " src={details.image} alt="Product Image" />
                <div className="absolute top-20 right-0">
                    {
                        details.isNew && <p className='bg-black text-white px-10 text-center w-24'>Sale</p>
                    }
                </div>
            </div>
            <div className="flex gap-12 flex-col justify-center">
                    <div>
                        <h2 className="text-4xl font-semibold font-titleFont">{details.title}</h2>
                        <div className="flex gap-5 items-center mt-2">
                            <p className="line-through text-gray-500">${details.oldPrice}</p>
                            <p className="text-gray-700 text-xl font-semibold">${details.price}</p>
                        </div>
                        <div className="flex gap-1 items-center mt-5">
                            <div className='flex gap-1'>
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                            </div>
                            <p className="text-gray-400">(1 Customer Review)</p>
                        </div>
                        <div className="mt-10">
                            <p>{details.description}</p>
                        </div>

                        <div className="flex mt-8 gap-10 items-center">
                            <div className="flex gap-5 border-gray-200 border-[1px] py-3 px-5">
                                <p>Quantity</p>
                                <div className="flex gap-5">
                                    <button onClick={()=>setBaseQty(baseQty ===1 ? baseQty = 1 : baseQty - 1)} className="border-gray-200 border-[1px] px-2 cursor-pointer">-</button>
                                    <span>{baseQty}</span>
                                    <button onClick={()=>setBaseQty(baseQty + 1)} className="border-gray-200 border-[1px] px-2 cursor-pointer">+</button>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=>dispatch(
                                    addToCart({
                                        _id: details._id,
                                        title: details.title,
                                        image: details.image,
                                        price: details.price,
                                        quantity: baseQty,
                                        description: details.description
                                    })
                                ) & toast.success(`${details.title} is added`)} className="bg-black text-white px-8 py-2">Add to cart</button>
                            </div>
                            
                            
                        </div>
                            <div className="mt-10">
                                <p className="flex "> Category: {details.category}</p>
                            </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Product