import { useState } from "react";
import { createContext } from "react"

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);
    return (
        <BudgetContext value={budgetMode}>
            { children }
        </BudgetContext>
    )
}

export {
    BudgetContext,
    BudgetProvider
}