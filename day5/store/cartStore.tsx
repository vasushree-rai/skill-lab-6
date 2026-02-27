import { create } from "zustand"
import { Product } from "@/types/product"

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (product: Product) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeItem: (productId: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  // Add item or increase quantity
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      }
    }),

  // Increase manually
  increaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // Decrease one only
  decreaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  // Remove completely
  removeItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== productId
      ),
    })),
}))