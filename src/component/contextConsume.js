import React from 'react';
import {UserConsumer} from './userContext'
class Consume extends React.Component {

    render() {
        return (
            <UserConsumer>
                {
                    a=>
                    {
                    return <div>I am {a}</div>
                    }
                } 
                
             </UserConsumer>
        )
    }
}
export default  Consume;