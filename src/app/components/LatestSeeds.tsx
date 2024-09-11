import React from 'react'
import { items } from './ItemData'
import SeedCard from './SeedCard'

const latest5seeds = 8
const showlatestseeds = Object.keys(items).slice(0, latest5seeds)

const LatestSeeds: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium mb-4 px-40">Newly Added Seeds</h1>
        <div className="flex flex-wrap justify-center gap-5 px-20">
          {showlatestseeds.map(key => {
            const item = items[key]
            return (
              <SeedCard
                key={key}
                image={item.image}
                name={item.name}
                description={item.description}
                price={parseFloat(item.price)} // Ensure price is a number
                rating={item.rating}
                itemKey={key} // Pass the key as itemKey
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LatestSeeds