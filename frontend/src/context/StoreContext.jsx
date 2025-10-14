import { createContext } from "react";
import { food_list } from "../assets/assets";

//create one context name is StoreContext
export const StoreContext = createContext(null);

//create StoreContextProvider function
const StoreContextProvider = (props) => {

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