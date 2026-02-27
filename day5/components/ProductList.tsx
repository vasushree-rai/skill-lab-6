"use client";
import {Product } from "@/types/product";

interface Props {
    products: Product[] 
    onAdd: (product: Product) => void
}

export default function ProductList({ products, onAdd }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-900">Price: ${product.price}</p>
                    <button onClick={() => onAdd(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}