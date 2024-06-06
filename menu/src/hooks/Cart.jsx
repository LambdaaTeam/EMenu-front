import axios from 'axios'
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
    const restaurantId = localStorage.getItem('restaurant_id')
    const orderId = localStorage.getItem('order_id')
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

    const api = axios.create({
        baseURL: 'https://api.emenu.psykka.xyz/api/v1/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('client_token')
        },
    })

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

    const pushOrder = async () => {
        for await (let item of cart.items) {
            const packet = {
                id: item.id,
                quantity: item.quantity,
                product: item.id
            }

            api.post(`/restaurants/${restaurantId}/orders/${orderId}`, packet)
                .catch((error) => console.log(error))
        }
    }

    const toggleCart = () => setCart((prevCart) => ({ ...prevCart, displaying: !prevCart.displaying }))
    const setCartDisplaying = (displaying) => setCart((prevCart) => ({ ...prevCart, displaying }))
    const resetCart = () => setCart({ items: [], displaying: false })
    const cartTotal = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            toggleCart,
            setCartDisplaying,
            cartTotal,
            resetCart,
            pushOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}
