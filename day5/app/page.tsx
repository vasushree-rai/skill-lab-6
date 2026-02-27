"use client";
import Link from "next/link";
import ProductList from "@/components/ProductList";
import { Product } from "@/types/product";
import { products} from "@/features/products/data";
import { useCartStore } from "@/store/cartStore";

export default function Home() {
  const cart = useCartStore((state) => state.cart)
  const addTocart =useCartStore((state) => state.addToCart)
  return (
    <main className="min-h-screen bg-blue-100 p-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Zustand cart project
      </h1>
      <p className="mt-4 text-gray-700">
      cart items: {cart.length}
      </p>
      <ProductList
      products={products}
      onAdd={addTocart}/>
      <Link 
      href="/cart"
      className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        View Cart
      </Link>
    </main>
  )
}