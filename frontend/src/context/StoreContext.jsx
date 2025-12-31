import axios from "axios";
import { createContext, useEffect, useState } from "react";

//create one context name is StoreContext
export const StoreContext = createContext(null);

//create StoreContextProvider function
const StoreContextProvider = (props) => {

    // useState for ItemCount from the FoodItem.jsx , name is cartItem / setter function name is setCartItem
    const [cartItems,setCartItems] = useState({});

    // store the backend url
    const url = "http://localhost:4000"

    const [token,setToken] = useState("")

    // food list for get the list from backend
    const [food_list,setFoodList] = useState([])

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

    // logic of the get total amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // function for load the food item from backend to frontend
    const fetchFoodList = async () => {
        // call the API
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    // we will refresh the web page we will not logout
    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
            }
        }
        // load the data function call
        loadData();
    },[])

    // create variable name contextValue
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;