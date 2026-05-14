import { useState } from "react";
import { createContext } from "react"

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);
    const [maxPrice, setMaxPrice] = useState("");

    const toggleBudgetMode = () => {
        setBudgetMode(!budgetMode);
    }

    const value = {
        budgetMode,
        maxPrice, 
        toggleBudgetMode
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