import { useContext } from "react"
import { BudgetContext } from "../../contexts/BudgetContext"

function BudgetButton() {
    const {budgetMode, toggleBudgetMode} = useContext(BudgetContext);
  return (
    <button className={`btn my-3 ${(budgetMode) ? "btn-warning" : "btn-primary"}`} onClick={() => { toggleBudgetMode() }}>
        <i className="bi bi-cash-coin"></i>
    </button>
  )
}

export default BudgetButton