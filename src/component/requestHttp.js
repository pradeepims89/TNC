import React from 'react';
import Axios from 'axios';
class RequestHttp extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                DataList: [],
                error: ''
            }
        }
    }
    componentDidMount() {
        this.GetAllRecords();
    }
    GetAllRecords = () => {
        const apiEndPont = "https://jsonplaceholder.typicode.com/posts";
        Axios.get(apiEndPont)
            .then(response => {
                this.setState({
                    DataList: response.data
                })
            })
            .catch(error => {
                this.setState({
                    error: "Error in retriving data."
                })
            })

    }
    render() {
        const { DataList, error } = this.state
        return (
            <div >
                <br></br>
                <table class="table table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                           
                            <th scope="col">ID</th>
                            <th scope="col">title</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    {
                        DataList.length ?
                            DataList.map(obj =>
                                <tbody>
                                    <tr  key={obj.id} >
                                        <th scope="row">{obj.id}</th>
                                        <td>{obj.title}</td>
                                        <td>{obj.body}</td>
                                    </tr>
                                </tbody>
                                 )
                            : null
                    }
                </table>
            </div>
        )

    }

}
export default RequestHttp;