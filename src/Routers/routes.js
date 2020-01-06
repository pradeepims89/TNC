import React from 'react';
import Home from '../component/home';
import Users from '../component/Users';
import product from '../component/product';
import Navigations from '../Routers/navigation';
import { Button, ButtonToolbar, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Routers extends React.Component {
    render() {
        return (
            <Router> 
                <Navigations></Navigations>
                <Route path='/Home' component={Home}></Route>
                <Route path='/Users' component={Users}></Route>
                <Route path='/product' component={product}></Route>
            </Router>

        )

    }
}
export default Routers;
