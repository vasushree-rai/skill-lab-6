"use client"

import { useCartStore } from "@/store/cartStore"

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCartStore()

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">
        Your Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-gray-500">
          Your cart is empty 🛒
        </p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 rounded-xl shadow-md mb-4 flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">
              {item.name}
            </h2>

            <p className="text-gray-500">
              ₹{item.price} each
            </p>

            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                −
              </button>

              <span className="font-medium text-lg">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">
              ₹{item.price * item.quantity}
            </p>

            <button
              onClick={() => removeItem(item.id)}
              className="mt-2 text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          <p className="text-lg font-semibold">
            Total: ₹{totalPrice}
          </p>

          <div className="flex gap-4 mt-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Checkout
            </button>

            <button
              onClick={() => useCartStore.getState().cart.length > 0 && useCartStore.getState().removeItem(useCartStore.getState().cart[0].id)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  )
}