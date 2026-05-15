import { useState, useContext } from "react";
import { createContext } from "react"
import { ProductsContext } from "./ProductsContext";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    const { data } = useContext(ProductsContext);
    const [budgetMode, setBudgetMode] = useState(false);
    const priceArray = data.map(product => parseFloat(product.price));
    const maxPrice = Math.max(...priceArray);
    const minPrice = Math.min(...priceArray);
    const [maxUserPrice, setMaxUserPrice] = useState(maxPrice);
    const [minUserPrice, setMinUserPrice] = useState(minPrice);


    if (!isFinite(maxUserPrice) && isFinite(maxPrice)) {
        setMaxUserPrice(maxPrice);
    }
    if (!isFinite(minUserPrice) && isFinite(minPrice)) {
        setMinUserPrice(minPrice);
    }
    if (isFinite(maxUserPrice) && isFinite(minUserPrice) && maxUserPrice < minUserPrice) {
        setMinUserPrice(Math.max(minPrice, maxUserPrice - 10))
    }
    if (isFinite(maxUserPrice) && isFinite(minUserPrice) && minUserPrice > maxUserPrice) {
        setMaxUserPrice(Math.min(maxPrice, minUserPrice + 10));
    }

    const changeMaxUserPrice = (value) => {
        setMaxUserPrice(value);

    }
    const changeMinUserPrice = (value) => {
        setMinUserPrice(value);
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
        changeMaxUserPrice,
        minUserPrice,
        changeMinUserPrice
    }

    return (
        <BudgetContext value={value}>
            {children}
        </BudgetContext>
    )
}

export {
    BudgetContext,
    BudgetProvider
}