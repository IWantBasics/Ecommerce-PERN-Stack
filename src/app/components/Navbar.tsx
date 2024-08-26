import React from 'react'
import { GiPowderBag } from "react-icons/gi";
import { GoHeartFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
        <nav className="container mx-auto flex justify-between items-center px-20 py-6">
            <h1 className="text-4xl font-bold" style={{color:'#d1efb5'}}>Plant.</h1>
        <div className="flex justify-center relative group">
            <input className="w-64 px-3 py-2 border-4 border-[#D1EFB5]  border-2 rounded-full outline-none text-left text-gray-500" type="text" placeholder="What are you looking for?"/>
            <div className="absolute inset-y-0 right-4 flex items-center justify-center">
            <div className="hover:bg-gray-300 hover:rounded-full group-hover:scale-110 p-1 transition-all duration-500">
            <FaSearch className="text-[#D1EFB5]"/>
            </div>
            </div>
        </div>
        <div className="flex items-center space-x-9">
            <button className="border border-4 border-[#D1EFB5] rounded-full px-4 py-2 font-medium">Shop</button>
            <div>
            <GiPowderBag className="w-8 h-8 cursor-pointer text-orange-300"/>
            </div>
            <div>
            <GoHeartFill className="w-8 h-8 cursor-pointer text-red-300"/>
            </div>
            <button className="border border-4 border-[#D1EFB5] rounded-full px-4 py-2 font-medium">Sign in</button>
        </div>
        </nav>
    </>
  )
}

export default Navbar