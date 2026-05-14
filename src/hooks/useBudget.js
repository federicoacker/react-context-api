import { BudgetContext } from "../contexts/BudgetContext";
import { useContext } from "react";

function useBudget() {
    const budgetValues = useContext(BudgetContext);
    if(!budgetValues){
        throw new Error("Hai dimenticato di mettere BudgetProvider");
    }

    return budgetValues;
}

export default useBudget;