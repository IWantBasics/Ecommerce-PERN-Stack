'use client'
import React, {createContext, useState, useContext, ReactNode} from 'react'

interface CartItem {
    image:string
    name:string;
    price:number;
    quantity:number;
    key:string;
}

interface CartContextType {
    cartCount: number
    addCartCount: (item:CartItem) => void
    removeCartCount: (key:string) => void
    cartItems: CartItem[]
    updateQuantity: (key:string, quantity:number) => void
}
const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [cartCount, setCartCount] = useState(0)

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addCartCount = (item: CartItem) => {
        setCartItems(prevItems => {
            const existingItems = prevItems.find(i => i.key === item.key)
            if (existingItems) {
                return prevItems.map(i => 
                    i.key === item.key ? {...i, quantity: i.quantity + 1} : i
                ) 
            }
            setCartCount(prevCount => prevCount + 1) 
            return [...prevItems, {...item, quantity: 1} ]
        })
        }
    const removeCartCount = (key:string) => {
        setCartItems(prevItems => {
           const itemsToRemove = prevItems.find(i => i.key === key)
           if (itemsToRemove) {
            setCartCount(prevCount => prevCount - itemsToRemove.quantity)
           }
           return prevItems.filter(item => item.key !== key)
        })

        const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    }

    const updateQuantity = (key:string, quantity:number) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item => item.key === key ? {...item, quantity} : item)
            const newCartCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(newCartCount);
            return updatedItems;
        })
    }
    return <>
    <CartContext.Provider value={{cartCount, addCartCount, removeCartCount, updateQuantity, cartItems}}>
        {children}
    </CartContext.Provider>
    </>
}

export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart hook must be used within a provider')
    } 
    return context
}