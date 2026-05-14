import { Card, Col } from "react-bootstrap";
import { Link } from "react-router";

function Product({ title, description, price, category, image, id }) {
    return (
        <Col xs={12} md={6} lg={4}>
            <Link className="text-decoration-none" to={`${id}`}>
            <Card className="product-card" data-bs-theme="dark">
                <Card.Header>
                    <Card.Title className="product-title">{title}</Card.Title>
                    <Card.Img src={image} className="product-img"></Card.Img>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="product-description">
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>
                        {price} &euro;
                    </Card.Text>
                    <Card.Text className="product-category">
                        {category}
                    </Card.Text>
                </Card.Footer>
            </Card>
            </Link>
        </Col>
    )
}

export default Product