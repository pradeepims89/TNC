import React, { Component } from 'react';
class Product extends Component {

    render() {

        let details = {
            1: {
                userName: 'pradeep Kumar',
                email: 'pradeep.kumar@gmail.com',
                mobile: 134324
            },
            2: {
                userName: 'sanntosh Yadav',
                email: 'sanntosh.Yadav@gmail.com',
                mobile: 13432423213
            },
            3: {
                userName: 'Krishana Kant',
                email: 'krishana.kant@gmail.com',
                mobile: 1343241313
            }
        }
        let requiredUser = details[this.props.match.params.name]
        return (
            <div>
                <h5>This is product page.</h5>
                <h6>Name:{requiredUser.userName}</h6>
                <h6>email:{requiredUser.email}</h6>
                <h6>mobile:{requiredUser.mobile}</h6>
            </div>
        )
    }
}
export default Product