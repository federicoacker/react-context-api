import { Form } from "react-bootstrap";
import useBudget from "../../hooks/useBudget";

function BudgetRange() {
    const { maxPrice, minPrice, changeMaxUserPrice, maxUserPrice, budgetMode } = useBudget();

    return (
        budgetMode &&
        <div className="border border-light rounded px-3 py-2">
            <Form.Label>Budget</Form.Label>
            <div className="d-flex">
                <p className="text-white">{minPrice} &euro;</p>
                <div className="flex-grow-1 mx-2">
                    <input type="number" className="form-control text-center" value={maxUserPrice} onChange={(event) => {changeMaxUserPrice(event.target.value)}}/>
                    <Form.Range value={maxUserPrice} min={minPrice} max={maxPrice} step="1" onChange={(event) => { changeMaxUserPrice(event.target.value) }} />
                </div>
                <p className="text-white">{maxPrice} &euro;</p>
            </div>
        </div>
    )
}

export default BudgetRange