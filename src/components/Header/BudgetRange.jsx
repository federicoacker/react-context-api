import { Form } from "react-bootstrap";
import useBudget from "../../hooks/useBudget";

function BudgetRange() {
    const { maxPrice, minPrice, changeMaxUserPrice, maxUserPrice, budgetMode, minUserPrice, changeMinUserPrice } = useBudget();

    return (
        budgetMode &&
        <div className="border border-light rounded px-3 py-2">
            <Form.Label>Budget</Form.Label>
            <div className="d-flex">
                <p className="text-white d-flex align-items-center">{minPrice} &euro;</p>
                <div className="flex-grow-1 mx-2">
                    <div className="d-flex flex-column align-items-center">
                        <label className="form-label" htmlFor="maxPrice">Prezzo Massimo</label>
                        <input
                            id="maxPrice"
                            type="number"
                            className="form-control text-center"
                            value={maxUserPrice}
                            onChange={(event) => { changeMaxUserPrice(event.target.value) }}
                        />
                    </div>
                    <Form.Range value={maxUserPrice} min={minPrice} max={maxPrice} step="1" onChange={(event) => { changeMaxUserPrice(event.target.value) }} />
                    <Form.Range value={minUserPrice} min={minPrice} max={maxPrice} step="1" onChange={(event) => { changeMinUserPrice(event.target.value) }} />
                    <div className="d-flex flex-column align-items-center">
                        <input
                            id="minPrice"
                            type="number"
                            className="form-control text-center"
                            value={minUserPrice}
                            onChange={(event) => { changeMinUserPrice(event.target.value) }}
                        />
                        <label className="form-label" htmlFor="minPrice">Prezzo Minimo</label>
                    </div>
                </div>
                <p className="text-white d-flex align-items-center">{maxPrice} &euro;</p>
            </div>
        </div>
    )
}

export default BudgetRange