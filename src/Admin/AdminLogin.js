import React, { useContext, useState } from 'react'
import image from './adminlaginlogo.webp'
import styles from './adminstyles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { store } from '../App'

const AdminLogin = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError("")
    }

    const validForm = () => {
        if (!data.email || !data.email) {
            setError('Both Fields are required')
            return false
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            setError('Enter valid Email Address')
            return false
        }
        setError("")
        return true
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!validForm()) return

        axios.post(`https://doctorsconnect.onrender.com/login`, data)
            .then((res) => {
                if (res.data.message === "User not Found") {
                    setError(res.data.message)
                }
                else if (res.data.message === "Password Incorrect") {
                    setError(res.data.message)
                }
                else {
                    setToken(res.data.token)
                    const fullname = `${res.data.admin.firstname} ${res.data.admin.lastname}`
                    localStorage.setItem('adminname', fullname)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const cancleData = () =>{
        setData({email:'' , password:''})
        setError('')
    }

    if (token) {
        navigate('/admindashboard')
    }

    return (
        <main>
            <section className={`container-fluid ${styles.login}`}>
                <div className='container'>
                    <h3 className='text-center py-3'>ADMIN LOGIN</h3>
                    <div className='row py-3'>
                        <div className='col-lg-1'>

                        </div>
                        <div className={`col-lg-5 ${styles.loginlogo}`}>
                            <img src={image} className='img-fluid w-100' alt='' />
                        </div>
                        <div className={`col-lg-5 p-5 ${styles.loginform}`}>
                            <h5>Enter login Credentials</h5>
                            <form onSubmit={submitHandler}>
                                <input type='text' className='form-control mb-3' name='email' value={data.email} onChange={changeData} placeholder='Username' />
                                <input type='password' className='form-control mb-3' name='password' value={data.password} onChange={changeData} placeholder='Password' />
                                <div className={styles.loginbuttons}>
                                    <input type='button' value='Cancle' onClick={cancleData} />
                                    <input type='submit' className='mx-end' value='Login' />
                                </div>
                            </form>
                            <div className={styles.errormsg}>
                                <p>{error}</p>
                            </div>
                            <div className={styles.registerbuttons}>
                                <Link to='/forgetpassword'>
                                    <h5>Forget Password?</h5>
                                </Link>
                                <Link to='/adminregister'>
                                    <h5 className='text-success'>Create Account</h5>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-1'>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AdminLogin