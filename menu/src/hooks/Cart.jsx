import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    // TODO: add to localstorage
    const [cart, setCart] = useState({
        displaying: false,
        items: []
    })
    const addItem = (item) => setCart({ ...cart, items: [...cart.items, item]})
    const removeItem = (id) => setCart({ ...cart, items: cart.items.filter(i => i.id !== id) })
    const toggleCart = () => setCart({ ...cart, displaying: !cart.displaying })
  
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, toggleCart }}>
            {children}
        </CartContext.Provider>
    )
}