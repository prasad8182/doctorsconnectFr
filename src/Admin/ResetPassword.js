import React, { useState } from 'react'
import image from './resetpassword.jpg'
import styles from './adminstyles.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {
    const [data, setData] = useState({ password: "", confirmpassword: "" })
    const navigate = useNavigate()

    const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        const email = localStorage.getItem('resetEmail')

        if (!email) { return alert(`No Email Found`) }
        if (data.password !== data.confirmpassword){
            alert(`Password Do not Match`)
        }

        axios.post(`https://doctorsconnect.onrender.com/resetpassword`, {email:email,password:data.password})
        .then((res)=>{
            if(res.data.status === 'success'){
                alert(`Password Updated SuccesFully`)
                localStorage.removeItem('resetEmail')
                navigate('/adminlogin')
            }
            else{
                alert(res.data.message)
            }
        })
        .catch((err)=>{
            console.log(err);            
        })

    }

    return (
        <main>
            <section>
                <div className='container'>
                    <h3 className='text-center py-4'>Reset Password</h3>
                    <div className='row p-3'>
                        <div className='col-lg-1'></div>
                        <div className={`col-lg-5 ${styles.forgetimg}`}>
                            <img src={image} className='img-fluid w-75' alt='' />
                        </div>
                        <div className={`col-lg-4 ${styles.forgetform}`}>
                            <form onSubmit={submitHandler}>
                                <input type='password' name='password' value={data.password} onChange={changeData} className='form-control mb-3' placeholder='New Password' />
                                <input type='password' name='confirmpassword' value={data.confirmpassword} onChange={changeData} className='form-control mb-3' placeholder='Confirm Password' />
                                <input type='submit' value='Reset Password' />
                            </form>
                        </div>
                        <div className='col-lg-2'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ResetPassword