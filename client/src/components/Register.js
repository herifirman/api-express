import React, { Component } from 'react'
import { register } from './Userfunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            nama_depan: '',
            nama_belakang: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            nama_depan: this.state.nama_depan,
            nama_belakang: this.state.nama_belakang,
            email: this.state.email,
            password: this.state.password
        }
        register(user).then(res => {
            if (res) {
                this.props.history.push('/login')
            }

        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                        <div className="form-group">
                            <label htmlFor="nama_depan">Nama Depan</label>
                            <input type="text"
                                className="form-control"
                                name="nama_depan"
                                placeholder="Enter Nama Depan"
                                value={this.state.nama_depan}
                                onChange={this.onChange}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="nama_belakang">Nama Belakang</label>
                            <input type="text"
                                className="form-control"
                                name="nama_belakang"
                                placeholder="Enter Nama Belakang"
                                value={this.state.nama_belakang}
                                onChange={this.onChange}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.epassword}
                                onChange={this.onChange}
                            />
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;