import React from 'react';
class HttpPost extends React.Component {
  constructor(props) {
    super(props)
    {
      this.state = {
        userId: '',
        title: '',
        body: ''
      }
    }
  }
  handleOnnchange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const { userId, title, body}=this.state;
    return (
      <div>
        <form onClick={this.handleSubmit}> <br></br>
          <div className="from-group row" >
            <label className="col-sm-1 text-left" > User Id</label>
            <div className="col-sm-3">
              <input type="text" name="userId" className=" form-control"
               value={userId} onChange={this.handleOnnchange} ></input>
            </div>

          </div>
          <div className="from-group row" >
            <label className="col-sm-1 text-left"  >Title</label>
            <div className="col-sm-3">

              <input type="text"  value={title} name="title" 
              className=" form-control" onChange={this.handleOnnchange} ></input>
            </div>
          </div>
          <div className="from-group row" >
            <label className="col-sm-1 text-left" >Body</label>
            <div className="col-sm-3">
              <input type="text" name="body"  value={body}  
              className=" form-control"  onChange={this.handleOnnchange} ></input>
            </div>
          </div>
          <div className="from-group row" >
            <label className="col-sm-1 text-left" >

            </label>
            <div className="col-sm-3">

              <button type="submit" className="btn btn-primary" > Submit</button>
            </div>
          </div>
        </form>
      </div>
    )

  }

}
export default HttpPost;