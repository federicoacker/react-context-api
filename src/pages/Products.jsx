import { Container, Row } from "react-bootstrap";
import Product from "../components/Product.jsx";
import useBudget from "../hooks/useBudget.js";
import useProducts from "../hooks/useProducts.js"


function Products() {
    const { data, loadingError, loaded } = useProducts();
    const { budgetMode, maxUserPrice } = useBudget();
    let finalProducts = data;

    if(budgetMode){
        finalProducts = data.filter((product) => product.price <= maxUserPrice);
    }

    return (
        <Container className="py-5">
            <Row className="row-gap-2">
                {
                    (loaded && !loadingError) &&
                    finalProducts.map(product => <Product key={product.id} {...product} />)
                }
            </Row>
        </Container>
    )
}

export default Products