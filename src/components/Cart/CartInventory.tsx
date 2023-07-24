import { useState, createContext, useEffect } from "react";

export const cartState = createContext();

export default function CartInventory( { children }:any ) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currCart, setCurrCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [price, setPrice] = useState(0);
 
    //total amt of items and total price of items
    useEffect(() => {

        let amt = 0;
        let total = 0;
        for(let i = 0; i < currCart.length; i++) {
            amt += currCart[i].amount;
            total += (currCart[i].amount * currCart[i].attributes.price);
        }

        setItemCount(amt);
        setPrice(total);

    }, [currCart, amount])

    console.log(currCart)
    console.log(itemCount)
    console.log(price)
    // methods
    const addItem = (item: object, id: number) => {
        
        setAmount(1);

        const currItemObj = {...item, amount: 1};

        for(let i = 0; i < currCart.length; i++){
            if(currCart[i].id === id){
                setAmount(amount + 1);
                currCart[i].amount++;
                return;
            }
        }

        setCurrCart([...currCart, currItemObj]);
        
        setMenuOpen(true);
    }
    
    const removeItem = (id: number) => {
        for(let i = 0; i < currCart.length; i++){
            
            if(currCart[i].id === id){
                setAmount(amount - 1);
                currCart[i].amount--;
                // if the amount becomes 0, remove from cart
                if(currCart[i].amount == 0) {
                    currCart.splice(i,1)
                    setCurrCart(currCart)
                }
                return;
            }
        }
    }

    const clearItem = (id: number) => {
        for(let i = 0; i < currCart.length; i++){
            
            if(currCart[i].id === id){
                setAmount(amount - 1);
                currCart.splice(i,1)
                setCurrCart(currCart)
                return;
            }
        }
    }

    const clearCart = () => {
        setCurrCart([]);
    }


    return (
        <cartState.Provider 
        value={{
            currCart,
            clearCart,
            menuOpen, 
            setMenuOpen, 
            addItem,
            removeItem, 
            clearItem,
            itemCount, 
            price}}>
            {children}
        </cartState.Provider>
    )
}