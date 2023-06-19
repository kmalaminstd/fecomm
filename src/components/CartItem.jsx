import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdClose, MdArrowBack} from 'react-icons/md'
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/commerceSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function CartItem() {
    const productData = useSelector(state => state.ecomm.productData)
    // const [totalAmnt, setTotalAmnt] = useState("")
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   let price = 0
    //   productData.map(item => {
    //     price += item.price * item.quantity
    //     return price
    //   })
    //   setTotalAmnt(price);
    // },[productData])
  return (
    <>
        <div className="w-2/3">
            <div className="w-full">
                <h1 className="text-2xl">Shopping Cart</h1>
            </div>
            <div>
                {
                    productData.map(item => (
                        <div key={item._id} className="flex items-center gap-6 justify-between mt-6">
                          <div className="flex items-center gap-2">
                            <MdClose onClick={()=>dispatch(deleteItem(item._id)) & toast.error(`${item.title} is deleted`)} className="cursor-pointer" />
                            <img src={item.image} className="w-32 h-32 object-cover" alt="product image" />
                          </div>
                          <h2 className="w-45">{item.title}</h2>  
                          <p className="w-15">${item.price}</p>  
                                <div className="flex gap-5">
                                    <button 
                                    onClick={()=>dispatch(
                                      decrementQuantity({
                                        _id: item._id,
                                        title: item.title,
                                        image: item.image,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description
                                      })
                                    )}
                                     className="border-gray-200 border-[1px] px-2 cursor-pointer">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=>dispatch(
                                      incrementQuantity({
                                        _id: item._id,
                                        title: item.title,
                                        image: item.image,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description
                                      })
                                    )} className="border-gray-200 border-[1px] px-2 cursor-pointer">+</button>
                                </div>
                          <p className='px-3'>
                            {item.quantity * item.price}
                          </p>
                        </div>
                    ))
                }
            </div>
            <div className='mt-5 w-full flex justify-center flex-col'>
              {
                productData.length > 0 &&
                <>
                  <button onClick={()=>dispatch(resetCart()) & toast.error('Cart is empty')} className='bg-red-600 py-1 px-5 hover:text-white duration-300'>Reset Cart</button>
                  
                </>
              }
              {
                productData.length <= 0 && 
                <div>
                  <h3 className='text-2xl text-orange-600'>Shopping Cart is empty</h3>
                  <Link to="/">
                    <p className='flex gap-5 items-center'> <MdArrowBack /> go shopping </p>
                  </Link>
                </div>
              }
              
            </div>
        </div>
    </>
  )
}

export default CartItem