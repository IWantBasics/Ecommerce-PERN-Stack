import React from 'react';
import { useCart } from './CartContext';
import { IoMdCloseCircle } from "react-icons/io";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: { top: number, left: number };
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, position }) => {
  const { cartItems, removeCartCount, updateQuantity, cartCount } = useCart();
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0;
  const totalCost = deliveryFee + subtotal;

  return (
    <div className="fixed z-50 bg-white rounded-lg shadow-lg w-80 p-4" style={{ top: `${position.top}px`, left: `calc(${position.left}px - 8%)` }}>
      <div className="flex justify-center items-center border-b pb-3">
        <h2 className="text-2xl font-semibold text-orange-300">You have ({cartCount} items)</h2>
      </div>
      {cartItems.length === 0 ? (
        <h2 className="text-gray-700 mt-4">Cart is empty</h2>
      ) : (
        <>
          <div className="mt-4 space-y-4 max-h-60 overflow-y-auto">
            {cartItems.map(item => (
              <div key={item.key} className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-black">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="px-1 text-xs bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span className="text-xs">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="px-1 text-xs bg-gray-200 rounded hover:bg-gray-300">+</button>
                  </div>
                </div>
                <button onClick={() => removeCartCount(item.key)} className="text-xs text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="text-sm text-gray-700">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-sm text-gray-700">Delivery Fee: ${deliveryFee.toFixed(2)}</p>
            <p className="text-base font-semibold text-orange-300">Total: ${totalCost.toFixed(2)}</p>
          </div>
        </>
      )}
      <button onClick={onClose} className="mt-4 w-full py-2 bg-orange-300 text-white text-sm rounded hover:bg-orange-400">
        Close
      </button>
    </div>
  );
};

export default CartModal;