import React from 'react'
import { FiPlus } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";
interface SeedCardProps {
    image:string,
    name:string,
    description:string,
    price:string,
    rating:number,
}


const SeedCard: React.FC <SeedCardProps> = ({image, name, price, rating}) => {
    const FullStars = Math.floor(rating)
    const HalfStars = rating % 1 !== 0
  return (
    <>
    <div className="bg-white rounded-lg overflow-hidden shadow-md max-w-xl w-72 h-90 mb-4">
        <div className="relative">
            <img src={image} alt={name} className="w-full object-cover h-32"/>
            <button className="absolute rounded-full top-2 right-2 bg-white p-1 shadow hover:scale-110 transition-all">
                <GoHeartFill className="text-red-300"/>
            </button>
        </div>
        <div className="p-4 group cursor-pointer">
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex items-center mt-2 mb-3">
                <div className="flex text-yellow-500">
                    {Array.from({length: FullStars}, (_, index) => (
                        (<FaStar key={index}/>)
                    ))}
                    {HalfStars && <FaStarHalfAlt/>}
                </div>
            </div>
            <p className="text-sm group-hover:border-b-2 group-hover:border-black inline transition-all cursor-pointer">View Details</p>
            <div className="flex justify-between items-center mt-4">
                <h2 className="text-lg font-bold">${price}</h2>
            </div>
            
        </div>
        <div  className="flex items-center justify-center bg-orange-300 mx-4 py-2 rounded-md font-medium cursor-pointer mb-4 hover:scale-105 transition-all">
                <button>ADD TO BASKET</button>
            </div>
    </div>
    </>
  )
  
}

export default SeedCard