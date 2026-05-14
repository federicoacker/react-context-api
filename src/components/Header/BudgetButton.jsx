
import useBudget from "../../hooks/useBudget"

function BudgetButton() {
    const { budgetMode, toggleBudgetMode } = useBudget();
    return (
        <button className={`btn my-3 ${(budgetMode) ? "btn-warning" : "btn-primary"}`} onClick={() => { 
            toggleBudgetMode(); }}>
            <i className="bi bi-cash-coin"></i>
        </button>
    )
}

export default BudgetButton