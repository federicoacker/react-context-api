import { Card, Container } from "react-bootstrap"
function ProductMoreInfo({ title, image, description, price, category }) {
    return (
        <Container className="flex-grow-1">
            <Card className="product-card w-75 mx-auto" data-bs-theme="dark">
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
        </Container>
    )
}

export default ProductMoreInfo