import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
      <input type='search' placeholder='search products'/>
    </div>
    <div>
      <Link to='featuredProducts'>Featured</Link>
      <Link to='newProducts'>New</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Products
