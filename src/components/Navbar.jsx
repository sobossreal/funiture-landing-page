import React from 'react'
import logo from "../assets/navlogo.png"
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className='bg-white w-full h-[100px] flex items-center px-[60px] justify-between shadow'>
            <div><img src={logo} alt="" /></div>
            <div className='flex justify-between w-[400px]'>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>

        <div className='flex w-[250px] justify-between'>
        <FaUser className='p-2 hover:rounded-full hover:bg-orange-400 text-4xl cursor-pointer' />
        <FaSearch  className='p-2 hover:rounded-full hover:bg-orange-400 text-4xl cursor-pointer' />
        <FaHeart className='p-2 hover:rounded-full hover:bg-orange-400 text-4xl cursor-pointer' />
        <FaShoppingCart  className='p-2 hover:rounded-full hover:bg-orange-400 text-4xl cursor-pointer' />

        </div>
        </nav>
    </div>
  )
}

export default Navbar