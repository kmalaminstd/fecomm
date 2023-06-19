import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/commerceSlice'
import { toast } from 'react-toastify'

function ProductCard({item}) {
  const navigate = useNavigate()
  const _id = item.title
  const idString = (_id)=>{
    return _id.toLowerCase().split(" ").join("")
  }
  const rootId = idString(_id)
  const handleDetails = ()=>{
    navigate(`product/${rootId}`,{
      state: {
        item
      }
    })
  }

  const dispatch = useDispatch()

  return (
    <>
      <div className="group relative">
        <div onClick={handleDetails} className="w-full h-96 overflow-hidden cursor-pointer">
          <img className="w-full h-full object-cover group-hover:scale-110 duration-300" src={item.image} alt="" />
        </div>
        <div className="w-full border-[1px] py-4 px-2">
          <div className="flex items-center justify-between ">
            <div>
              <h2 className="font-bold text-base font-titleFont">
                {
                  item.title.substring(0, 15)
                }
              </h2>
            </div>
            <div className='relative flex gap-2 overflow-hidden'>
                <div className="flex w-28 relative text-sm justify-end group-hover:translate-x-24 duration-500 transition-transform">
                  <p className="line-through text-gray-500">${item.oldPrice}</p>
                  <p className="font-semibold">${item.price}</p>
                  
                </div>
                <p onClick={()=>dispatch(
                  addToCart({
                    _id: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                    description: item.description
                  }) 
                ) & toast.success(`${item.title} is added`)} className="absolute w-[115px] text-gray-500 hover:text-gray-900 flex items-center transform gap-1 top-0 z-20  cursor-pointer -translate-x-32 group-hover:translate-x-0 transition-transform">
                  add to cart
                    <span>
                      <BsArrowRight />
                    </span>
                  </p>
            </div>                
          </div>
                <div>
                  <p>{item.category}</p>
                </div>
                <div>
                  
                    {
                      item.isNew && <p className="bg-black text-white w-24 text-center px-2 absolute top-3 right-0">Sale</p>
                    }
                  
                </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard