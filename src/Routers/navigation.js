import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import home from '../component/home';
import Users from '../component/Users';
import product from '../component/product';
class Navigations extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
        <Link to='/home' className="navbar-brand" >Home </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav><Link to='/Users' className="nav-link" >Users</Link></Nav>
            <Nav><Link to='/product' className="nav-link" >Product</Link></Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Logout
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )

  }

}
export default Navigations;
