import { createContext, useContext, useState } from 'react'
import propTypes from 'prop-types'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({name, price, image})

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
 Provider.propTypes = {
    children: propTypes.any,
 }.isRequired;
