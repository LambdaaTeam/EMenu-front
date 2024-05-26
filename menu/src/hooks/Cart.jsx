import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], displaying: false })

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        if (cart) {
            setCart(JSON.parse(cart))
        }
    }, [])

    useEffect(() => {
        if (cart.items.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    const addItem = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.items.find(i => i.id === item.id)
            if (existingItem) {
                const updatedItems = prevCart.items.map(i => {
                    if (i.id === item.id) {
                        return { ...i, quantity: i.quantity + 1 }
                    }
                    return i
                })
                return { ...prevCart, items: updatedItems }
            }

            const newItem = { ...item, quantity: 1 }
            return { ...prevCart, items: [...prevCart.items, newItem] }
        })
    }

    const removeItem = (id) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.items.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        return [...acc, { ...item, quantity: item.quantity - 1 }]
                    }
                    return acc
                }
                return [...acc, item]
            }, [])
            return { ...prevCart, items: updatedItems }
        })
    }

    const toggleCart = () => setCart((prevCart) => ({ ...prevCart, displaying: !prevCart.displaying }))
    const setCartDisplaying = (displaying) => setCart((prevCart) => ({ ...prevCart, displaying }))
    const cartTotal = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            toggleCart,
            setCartDisplaying,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
