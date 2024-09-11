'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CartProvider } from "./components/CartContext";
import LatestSeeds from "./components/LatestSeeds";
import { useState } from 'react';
import React from 'react';
import CartModal from "./components/CartModal";
import AuthForm from "./components/AuthForm";

export default function Home() {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartPosition, setCartPosition] = useState({ top: 0, left: 0 });

  const toggleAuthForm = () => {
    setIsAuthFormOpen(!isAuthFormOpen);
  };

  const openCart = () => {
    const bagIcon = document.querySelector('.bag-icon');
    if (bagIcon) {
      const rect = bagIcon.getBoundingClientRect();
      setCartPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
    }
    setIsCartOpen(true);
    console.log('Cart opened, isCartOpen:', true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <CartProvider>
        <Navbar onSignInClick={toggleAuthForm} onCartClick={openCart} />
        <Hero />
        <LatestSeeds />
        <CartModal isOpen={isCartOpen} onClose={closeCart} position={cartPosition} />
        {isAuthFormOpen && <AuthForm onClose={() => setIsAuthFormOpen(false)} />}
      </CartProvider>
    </>
  );
}