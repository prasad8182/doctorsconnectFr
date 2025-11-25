import React, { useState } from 'react'
import styles from './adminstyles.module.css'
import image from './adminRegister1.webp'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const AdminRegister = () => {
  const [data, setData] = useState({ firstname: '', lastname: '', email: '', phone: '', password: '', confirmpassword: '', address: '', designation: '' })
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const validateForm = () => {
    if (!data.firstname || !data.lastname || !data.email || !data.phone || !data.password || !data.confirmpassword || !data.address || !data.designation) {
      setError(`All Feilds are required`)
      return false
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
    setError('Enter a valid email address');
    return false;
  }
  if (!/^[0-9]{10}$/.test(data.phone)) {
    setError('Phone number must be exactly 10 digits');
    return false;
  }
    if (data.password.length > 16 || data.password.length < 6){
      setError('Password Should be in given Length')
      return false
    }
    if(data.password !== data.confirmpassword){
      setError('Password is not matched')
      return false
    }
    
    setError('')
    return true
  }

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    
    if(!validateForm()) return

    axios.post(`http://localhost:4000/register`, data)
      .then((res) => {
        alert(res.data.message)
        navigate('/adminlogin')
      })
  }

  return (
    <main>
      <section className={`container-fluid ${styles.login}`}>
        <div className='container'>
          <h3 className='text-center py-3'>ADMIN REGISTER</h3>
          <div className='row py-3'>
            <div className='col-lg-1'>

            </div>
            <div className={`col-lg-4 ${styles.loginlogo}`}>
              <img src={image} className='img-fluid w-100' alt='adminregister' />
            </div>
            <div className={`col-lg-6 p-3 ${styles.loginform}`}>
              <form onSubmit={submitHandler}>
                <div className='row'>
                  <div className='col-lg-6'>
                    <input type='text' className='form-control mb-3' name='firstname' value={data.firstname} onChange={changeData} placeholder='First Name' />
                  </div>
                  <div className='col-lg-6'>
                    <input type='text' className='form-control mb-3' name='lastname' value={data.lastname} onChange={changeData} placeholder='Last Name' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <input type='email' className='form-control mb-3' name='email' value={data.email} onChange={changeData} placeholder='Email Address' />
                  </div>
                  <div className='col-lg-6'>
                    <input type='text' className='form-control mb-3' name='phone' value={data.phone} onChange={changeData} placeholder='Phone Number' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <input type='password' className='form-control mb-3' name='password' value={data.password} onChange={changeData} placeholder='Enter Password' />
                  </div>
                  <div className='col-lg-6'>
                    <input type='password' className='form-control mb-3' name='confirmpassword' value={data.confirmpassword} onChange={changeData} placeholder='Confirm Password' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <input type='text' className='form-control mb-3' name='address' value={data.address} onChange={changeData} placeholder='Enter Address' />
                  </div>
                  <div className='col-lg-6'>
                    <input type='text' className='form-control mb-3' name='designation' value={data.designation} onChange={changeData} placeholder='Designation' />
                  </div>
                </div>
                <p className='text-center text-danger p-2'>{error}</p>
                <div className='row m-0'>
                  <div className='col-lg-6'>

                </div>
                <div className='col-lg-6'>
                  <div className={styles.regbuttons}>
                  <Link to='/adminlogin'>
                    <button type='button'>Cancel</button>
                  </Link>


                  <button type='submit' className='btn btn-primary px-4'>Register</button>

                </div>
                </div>

                </div>
              </form>
            </div>


            <div className='col-lg-1'>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default AdminRegister