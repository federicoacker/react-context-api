import { useState, useContext, useEffect } from "react";
import { createContext } from "react"
import { ProductsContext } from "./ProductsContext";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    const {data} = useContext(ProductsContext);
    const [budgetMode, setBudgetMode] = useState(false);
    const [priceArray, setPriceArray] = useState([]);
    const [maxPrice, setMaxPrice] = useState(Math.max(...priceArray));
    const [minPrice, setMinPrice] = useState(Math.min(...priceArray));
    const [maxUserPrice, setMaxUserPrice] = useState(maxPrice);
    console.log(maxPrice,minPrice);
    useEffect(()=>{
        if(priceArray.length === 0){
            setPriceArray(data.map(product => parseFloat(product.price)));
        }
        if(!isFinite(maxPrice)){
            setMaxPrice(Math.max(...priceArray));
        }
        if(!isFinite(minPrice)){
            setMinPrice(Math.min(...priceArray));
        }
        if(!isFinite(maxUserPrice)){
            setMaxUserPrice(maxPrice);
        }
    },[data,priceArray]);

    const changeMaxUserPrice = (value) => {
        setMaxUserPrice(value);
    }
    const toggleBudgetMode = () => {
        setBudgetMode(!budgetMode);
    }

    const value = {
        budgetMode,
        toggleBudgetMode,
        maxPrice,
        minPrice,
        maxUserPrice,
        changeMaxUserPrice
    }

    return (
        <BudgetContext value={ value }>
            { children }
        </BudgetContext>
    )
}

export {
    BudgetContext,
    BudgetProvider
}