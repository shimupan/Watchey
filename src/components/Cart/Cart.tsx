import { IoClose, IoArrowForward, IoCartOutline } from "react-icons/io5";
import { useContext } from "react";

import { loadStripe } from "@stripe/stripe-js"
import { request } from "../../utils/fetchData"

import { cartState } from "./CartInventory";
import { CartProducts } from "..";

export default function Cart() {

    const { setMenuOpen, currCart, price, clearCart } = useContext(cartState);

    const stripePromise = loadStripe(
        "pk_test_51NX3uLK25yCojh4UISiafTFUUVjzvaoye5b0yMuKPu7cugWPyE0JvdEHCL7R1fO6E5r6fvRZjWSPZsyEodp5YbcF00zxGHIE0f"
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await request.post("/payments", {
                currCart,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full h-full px-4 text-white">
            <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
                <div className="text-4xl w-20 h-[98px] flex justify-start items-center">
                    <IoClose className="cursor-pointer" onClick={() => {setMenuOpen(false)}} />
                </div>
                <div className="flex flex-col gap-y-10 px-2">
                    {currCart.map(item => {
                        return (
                            <CartProducts product={item} key={item.id}/>
                        )
                    })}
                </div>
            </div>
            {currCart.length > 0 && (
                <div className="px-5 py-10 flex flex-col">
                    <div className="flex justify-between text-lg">
                        <div>Subtotal</div>
                        <div>${price.toLocaleString()}</div>
                    </div>
                    <div className="flex justify-between text-xl">
                        <div>Total</div>
                        <div>${price.toLocaleString()}</div>
                    </div>
                </div>
            )}
            <div className="px-6">
                {currCart.length > 0 ? 
                    <div className="flex justify-between gap-x-4">
                        <button 
                        className="btn btn-accent hover:bg-accent-hover text-primary"
                        onClick={clearCart}
                        >Clear Cart</button>
                        <button 
                        className="btn btn-accent hover:bg-accent-hover text-primary flex-1"
                        onClick={handlePayment}
                        >
                            Checkout
                            <IoArrowForward className="text-lg"/>
                        </button>
                    </div> 
                    : 
                    <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col">
                        <div className="text-2xl">Cart is Empty!</div>    
                        <IoCartOutline className="text-6xl"/>
                    </div>
                }
            </div>
        </div>
    )
}