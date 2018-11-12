import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            nama_depan: '',
            nama_belakang: '',
            email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            nama_depan: decode.nama_depan,
            nama_belakang: decode.nama_belakang,
            email: decode.email
        })
    }
    render(){
        return(
            <div className="container">
            <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Profile</h1>
            </div>
            <table className="table col-md-6 mx-auto">
            <tbody>
                <tr>
                    <td>Nama Depan</td>
                    <td>{this.state.nama_depan}</td>
                </tr>
                <tr>
                    <td>Nama Belakang</td>
                    <td>{this.state.nama_belakang}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
        )
    }
}

export default Profile;