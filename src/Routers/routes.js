import React from 'react';
import Home from '../component/home';
import Users from '../component/Users';
import product from '../component/product';
import Consume from '../component/contextConsume';
import Navigations from '../Routers/navigation';
import RequestHttp from '../component/requestHttp';
import HttpPost from '../component/HttpPost';
import Update from '../component/Update';
import Delete from '../component/Delete';
import HookCounter from '../component/HookCounter';
import ModuleA from '../component/ModuleA';
import { Button, ButtonToolbar, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();
class Routers extends React.Component {
    render() {
        return (
            <Router history={customHistory} >
                <Navigations></Navigations>
                <Route path='/Home' component={Home}></Route>
                <Route path='/Users' component={Users}></Route>
                <Route path='/product/:name' component={product}></Route>
                <Route path='/Consume' component={Consume}></Route>
                <Route path='/RequestHttp' component={RequestHttp}></Route>
                <Route path='/HttpPost' component={HttpPost}></Route>
                <Route path='/Update' component={Update}></Route>
                <Route path='/Update' component={Update}></Route>
                <Route path='/HookCounter' component={HookCounter}></Route>
                <Route path='/ModuleA' component={ModuleA}></Route>
                
            </Router>

        )

    }
}
export default Routers;
