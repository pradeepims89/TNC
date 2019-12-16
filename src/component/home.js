import React from 'react';
import {Button ,ButtonToolbar,Navbar,NavDropdown ,Nav} from 'react-bootstrap'

class Home   extends React.Component{
    render()
    {
       return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
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
export default Home;
