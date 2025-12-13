import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

//create one context name is StoreContext
export const StoreContext = createContext(null);

//create StoreContextProvider function
const StoreContextProvider = (props) => {

    // useState for ItemCount from the FoodItem.jsx , name is cartItem / setter function name is setCartItem
    const [cartItems,setCartItems] = useState({});

    // functionality for add to cart
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))  // add item first time this happen
        }
        else{
            // if item allready have and cuantity is 1 we will increa item key
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    // functionality for remove from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // create variable name contextValue
    const contextValue = {
        food_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;