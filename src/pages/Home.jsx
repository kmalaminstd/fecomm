import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from './Products'
import { productData } from '../api/api'
import { useLoaderData } from 'react-router-dom'

function Home() {
  const [products, setProducts] = useState(null)
  const data = useLoaderData()
  useEffect(()=>{
    setProducts(data)
  },[data])
//  console.log(products);
  return (
    <div>
        <Banner />
        <Products products={products} />        
    </div>
  )
}

export default Home