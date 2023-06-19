import React from 'react'
import ProductCard from '../components/ProductCard'

function Products({products}) {

  return (
    <div className="py-10">
        <div className="flex items-center justify-center flex-col gap-5 text-center">
            <h1 className="bg-black text-white px-8 py-2">Shopping EveryDay</h1>
            <span className="w-20 h-[3px] bg-black"></span>
            <p className="max-w-[700px] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facere sed, esse dolor rerum asperiores dolorum sequi vitae beatae aliquam illum sint cupiditate voluptate? Velit enim corporis, error quas eaque quibusdam animi </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
          {
            products && 
            products.data.map((item)=> <ProductCard key={item._id} item={item} />)
          }
        </div>
        
         
    </div>
  )
}

export default Products