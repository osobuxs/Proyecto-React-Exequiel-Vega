import React from "react";
import "./NavBar.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import CartWidget from '../CartWidget';

function NavBar(props) {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MARKETPLACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="margenL">Catalogo</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <Nav.Link href="#action3"><CartWidget></CartWidget></Nav.Link>
            {/* <NavDropdown title="L" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Carrito</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Mayoristas
            </Nav.Link> */}
          </Nav>
          
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Busque su producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavBar;
