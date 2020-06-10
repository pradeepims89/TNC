import React from 'react';
import { Button, ButtonToolbar, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {connect} from 'react-redux'
class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props._UserName}</h2>
        <h4> This is the home page ok</h4>
      </div>
    )

  }

}
function MapStateToProps(state) {
  return (
    {
      _UserName: state.roorReduce.UserName
    }
  )
}
function MapDispatchProps(disPatch) {
  return (
    {
      
    }
  )
}
export default connect(MapStateToProps, MapDispatchProps)(Home);
