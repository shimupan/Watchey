import { useContext } from "react";

import { Link } from "react-router-dom"

import { IoClose } from "react-icons/io5"

import { Quantity } from ".."

import { cartState } from "./CartInventory";

export default function CartProducts( {product}:any ) {

    if(!product) return <div> Loading </div>

    let currTotal = (product.attributes.price * product.amount).toLocaleString();

    const { clearItem } = useContext(cartState);

    return (
        <div className="flex gap-x-8">
            <Link to={`product/${product.attributes.name}`} className="flex justify-center items-center">
                <img 
                className="h-[50] w-[70px]"
                src={`http://localhost:1337${product.attributes.img.data.attributes.url}`} 
                alt="product logo"
                />
            </Link>
            <div className="flex-1">
                <div className="flex gap-x-4 mb-3">
                    <Link to={`product/${product.attributes.name}`}>
                        {product.attributes.name.substring(0,30)}
                        {product.attributes.name.length < 30 ? "" : "..."}
                    </Link>
                    <div>
                        <IoClose 
                        className="cursor-pointer text-[24px] hover:text-red-600 transition-all"
                        onClick={() => {clearItem(product.id)}}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-x-12">
                    <div className="flex gap-x-4 mb-2">
                        <Quantity product={product}/>
                        <div className="text-accent text-xl">
                            ${currTotal}
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-accent">
                        ${product.attributes.price.toLocaleString()} each
                    </span>
                </div>
            </div>
        </div>
    )
}