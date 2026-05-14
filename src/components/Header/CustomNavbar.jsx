import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router";

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className="brand-logo">
                    <Link to="/" className="text-decoration-none">
                        <img src="\./imgs/Logo.png" className="img-fluid rounded-circle"></img>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="site-navbar" />
                <Navbar.Collapse id="site-navbar">
                    <Nav className="me-auto">
                        <NavLink to="/"
                            className=
                            {({ isActive, isPending }) =>
                                isActive ? "navlink-active-class text-decoration-none px-2" :
                                    isPending ? "navlink-pending-class text-decoration-none px-2" :
                                        "text-decoration-none px-2"
                            }>
                            Home
                        </NavLink>
                        <NavLink to="about-us"
                            className=
                            {({ isActive, isPending }) =>
                                isActive ? "navlink-active-class text-decoration-none px-2" :
                                    isPending ? "navlink-pending-class text-decoration-none px-2" :
                                        "text-decoration-none px-2"
                            }>
                            Chi Siamo?
                        </NavLink>
                        <NavLink to="products"
                            className=
                            {({ isActive, isPending }) =>
                                isActive ? "navlink-active-class text-decoration-none px-2" :
                                    isPending ? "navlink-pending-class text-decoration-none px-2" :
                                        "text-decoration-none px-2"
                            }>
                            I Nostri Prodotti
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar