import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        nama_depan: newUser.nama_depan,
        nama_belakang: newUser.nama_belakang,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res =>{
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err =>{
        console.log(err)
    })
}