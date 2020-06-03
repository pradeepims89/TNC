import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import home from '../component/home';
import Users from '../component/Users';
import product from '../component/product';
import Consume from '../component/contextConsume';
import RequestHttp from '../component/requestHttp';
import HttpPost from '../component/HttpPost';
import Update from '../component/Update';
import Delete from '../component/Delete';
import HookCounter from '../component/HookCounter';
import ModuleA from '../component/ModuleA';
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
            <Nav><Link to='/Consume' className="nav-link" >User Context</Link></Nav>
            <Nav><Link to='/HookCounter' className="nav-link" >React Hooks</Link></Nav>
            <Nav><Link to='/ModuleA' className="nav-link" >modules</Link></Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item >
              <Link to='/requestHttp' className="dropdown-item" >Http Get</Link>
              <NavDropdown.Divider />
              <Link to='/HttpPost' className="dropdown-item" >Http Post</Link>
              <NavDropdown.Divider />
              <Link to='/Update' className="dropdown-item" >Http Update</Link>
              <NavDropdown.Divider />
              <Link to='/Delete' className="dropdown-item" >Http Delete</Link>
             
                </NavDropdown.Item>
            
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
