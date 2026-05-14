import { Form } from "react-bootstrap";
import useBudget from "../../hooks/useBudget";

function BudgetRange() {
    const {maxPrice} = useBudget();
  return (
    <>
    <Form.Label>Budget</Form.Label>
    <Form.Range value={maxPrice} min={0}/>
    </>
  )
}

export default BudgetRange