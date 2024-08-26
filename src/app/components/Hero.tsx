import React from 'react'
const Hero = () => {
  return (
    <>
    <div className="p-10 w-full flex justify-center">
        <div className="pt-32 py-8 mb-9 justify-left items-center rounded-3xl p-24 bg-center bg-cover bg-right-bottom " style={{backgroundImage:`url(https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, height:`60vh`, width:`80vw`, whiteSpace:`pre-line`}}>
            <h1 className="text-white text-4xl font-semibold mb-4"><span className="block leading-relaxed">Grow Your</span> <span>Dream Garden Here</span></h1>
            <div className="space-y-5">
            <p className="text-white mx-auto leading-relaxed text-white">Explore our diverse collection of premium seeds, carefully selected to help you cultivate the garden of your dreams. Our mission is to inspire your green thumb and nurture your passion for gardening, one seed at a time.</p>
            <button className="rounded-full px-6 py-3 bg-[#D1EFB5]" >View Shop</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero