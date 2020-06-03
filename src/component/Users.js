import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { FaUserCheck } from "react-icons/fa";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
class Users extends Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                txtn: ''
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            txtn: event.target.value
        });
    }

    handleSubmit = (e) => {

        const { txtn } = this.state;
        this.props.history.push('/product/' + txtn)
        e.preventDefault();


    }
    notify=()=>
    {
        toast('Basic notifications',{position: toast.POSITION.TOP_LEFT})
        toast.success('Basic notifications',{position: toast.POSITION.TOP_CENTER
        , autoClose:8000});
        toast.warn('Basic notifications',{position: toast.POSITION.TOP_RIGHT,
        autoClose:false});
        toast.error('Basic notifications',{position: toast.POSITION.BOTTOM_LEFT});
        toast('Basic notifications',{position: toast.POSITION.BOTTOM_CENTER});
        toast('Basic notifications',{position: toast.POSITION.BOTTOM_RIGHT});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h5>yhis is the user page</h5>
                    <input id="txt" value={this.state.txtn} name="txtn" onChange={(event) => this.handleChange(event)} ></input>
                    <Button onClick={this.notify}  ><FaUserCheck></FaUserCheck>Next</Button>
                </form>
            </div>
        )
    }
}
export default Users