'use client'
import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";
import { useCart } from './CartContext';

interface SeedCardProps {
    image: string,
    name: string,
    description: string,
    price: number,
    rating: number,
    itemKey: string
}

const SeedCard: React.FC<SeedCardProps> = ({ image, name, price, rating, itemKey }) => {
    const FullStars = Math.floor(rating)
    const HalfStars = rating % 1 !== 0

    const [quantity, setQuantity] = useState(0)
    const { addCartCount, removeCartCount } = useCart()

    const addQuantityCount = () => {
        setQuantity(prevCount => prevCount + 1)
        addCartCount({ image, name, price, quantity: 1, key: itemKey })
    }

    const removeQuantityCount = () => {
        if (quantity > 0) {
            setQuantity(prevCount => prevCount - 1)
            removeCartCount(itemKey)
        }
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md max-w-xl w-72 h-90 mb-4">
            <div className="relative">
                <img src={image} alt={name} className="w-full object-cover h-32 select-none"/>
                <button className="absolute rounded-full top-2 right-2 bg-white p-1 shadow hover:scale-110 transition-all">
                    <GoHeartFill className="text-red-300"/>
                </button>
            </div>
            <div className="p-4 group cursor-pointer">
                <h2 className="text-lg font-semibold">{name}</h2>
                <div className="flex items-center mt-2 mb-3">
                    <div className="flex text-yellow-500">
                        {Array.from({length: FullStars}, (_, index) => (
                            <FaStar key={index}/>
                        ))}
                        {HalfStars && <FaStarHalfAlt/>}
                    </div>
                </div>
                <p className="text-sm group-hover:border-b-2 group-hover:border-black inline transition-all cursor-pointer select-none">View Details</p>
                <div className="flex justify-between items-center mt-4">
                    <h2 className="text-lg font-bold">${price.toFixed(2)}</h2>
                </div>        
            </div>
       
            {quantity === 0 ? (
                <div className="flex items-center justify-center bg-orange-300 mx-4 py-2 rounded-md font-medium cursor-pointer mb-4 hover:scale-105 transition-all">
                    <button className="select-none" onClick={addQuantityCount}>ADD TO BASKET</button>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <button onClick={removeQuantityCount} className="bg-orange-300 px-6 py-3 text-black rounded-md mb-4 transition-transform ease-in-out active:scale-95"><FaMinus /></button>
                    <span className="mx-16 mb-4 select-none">{quantity}</span>  
                    <button onClick={addQuantityCount} className="bg-orange-300 px-6 py-3 text-black rounded-md mb-4 transition-all active:scale-95"><FaPlus /></button>
                </div>
            )}
        </div>
    )
}

export default SeedCard