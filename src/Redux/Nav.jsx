import React from 'react'
import { Link } from "react-router-dom"
import { BiCart } from 'react-icons/bi'
import { useSelector } from 'react-redux'


const Nav = () => {

  const items = useSelector((state)=>state.cart)
  return (
    <>

      <div className="nav-items "  >
        
        <Link to="/"><h5 className='nav-list'>Home</h5></Link>
        
        <BiCart className='text-2xl m-2  mt-5 text-red-300' /><Link to="/cart"> <h5 className=' nav-list'> Cart </h5> </Link>
        
        <h5 className='nav-carts mt-3  ml-8'> Cart Items: {items.length} </h5>
      
          
      </div>

    </>


  )
}

export default Nav