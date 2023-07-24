import { useContext, useState } from "react"
import { cartState } from "./CartInventory"

export default function Quantity( {product}:any ) {
    const { removeItem, addItem } = useContext(cartState);
    return (
        <div className="flex text-[1.2rem]">
            <button 
            className="w-8 mr-2 mb-1 bg-gray-700 circle"
            onClick={() => {
                addItem(product, product.id)
            }}
            >
                +
            </button>
            <div className="">
                {product.amount}
            </div>
            <button 
            className="rounded-full w-8 ml-2 mb-1 bg-gray-700 circle"
            onClick={() => {
                removeItem(product.id)
            }}
            >
                -
            </button>
        </div>
    )
}