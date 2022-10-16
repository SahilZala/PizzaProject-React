import React from "react";
import { Navbar , Container,Nav,Form } from "react-bootstrap";
import './style/customer-navbar-component.css';
import { useNavigate } from "react-router-dom";

export default function NavbarComponent(props){
    const navigate = useNavigate();

      return <Navbar className="customer-navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="customer-navbar-brand">{props.title}</Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
            
            </Nav>
            <Form className="d-flex">
                <Nav.Link className="customer-navbar-link" onClick={()=>navigate("/logout")}>Logout</Nav.Link>
            </Form>
        </Container>
      </Navbar>
}
