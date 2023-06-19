import React, { useEffect, useState } from 'react'
import {oceamImg} from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function Cart() {
  const productData = useSelector(state => state.ecomm.productData)
  const userInfo = useSelector(state => state.ecomm.userInfo)
  const [paynow, setPayNow] = useState(false)
  const [totalAmnt, setTotalAmnt] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
      let price = 0
      productData.map(item => {
        price += item.price * item.quantity
        return price
      })
      setTotalAmnt(price);
    },[productData])

    const handleCheckOut = ()=>{
      if(userInfo){
        setPayNow(true)
      }else{
        toast.error("Please sign in to checkout")
      }
    }

    const payment = async (token)=>{
        await axios.post("http://localhost:8000/pay", {
          amount: totalAmnt * 100,
          token: token
        })
    }
  // console.log(productData);
  return (
    <>
      <div className="flex items-center justify-center max-w-screen my-10">
        <img className="w-full object-cover h-[300px]" src={oceamImg} alt="" />
      </div>
      
      <div className="flex max-w-screen-xl mx-auto py-20">
        <CartItem />
        {
          productData.length > 0 &&
          <div className="w-1/3 bg-[#dfdfdf] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-gray-600 pb-5"> 
            <h2 className='text-2xl'>Cart Total</h2>  
            <p className="flex items-center justify-between font-semibold">
              Subtotal: {" "}
              <span>${totalAmnt}</span>
            </p>
            <p className="flex items-start gap-4">
              Shipping: {" "}
              <span>Lorem ipsum dolor sit Lorem, ipsum dolor. amet consectetur adipisicing elit.nda  in nemo.</span>
            </p>
          </div>
          <p className="flex justify-between text-xl font-bold mt-5">
            Total: {" "}
            <span>${totalAmnt}</span>
          </p>
          <button onClick={handleCheckOut} className="bg-black text-white py-3 w-full mt-5">Proceed to checkout</button>

          {
            paynow &&
            <div className='flex w-full items-center my-10'>
              <StripeCheckout 
                label='Pay Now'
                stripeKey='pk_test_51MvatPGdlAMKyfMAdjhEEoeZI5WYQtU2Ajs1PnhafzNZKUp1ILKXAtEBHDB5yrfs9YVDVFxZ4n704Ww7rACkaBD900dNEFofm3'
                name='React Ecommerce'
                amount={totalAmnt * 100}
                description={`Your total payment is $${totalAmnt}`}
                email={userInfo.email}
                token={payment}
              />
            </div>
          }
        </div>
        }
      </div>
    </>
  )
}

export default Cart