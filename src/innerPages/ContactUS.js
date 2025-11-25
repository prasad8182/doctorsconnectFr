import React, { useState } from 'react'
import styles from './innerstyles.module.css'
import axios from 'axios'

const ContactUS = () => {
  const [data,setData] = useState({name:'',email:'',phone:'',subject:'',message:''})

  const changeData=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post(`https://doctorsconnect.onrender.com/contactus`,data)
    .then((res)=>{
      alert(res.data.message)
      setData({ name: '', email: '', phone: '', subject: '', message: '' })
    })
    .catch((err)=>{
      console.log(err);      
    })
  }

  return (
    <main>
      <section className={`container ${styles.contactUs}`}>
        <h1>Contact US</h1>
        <div className='row'>
          <div className={`col-lg-7 ${styles.contactform}`}>
            <form onSubmit={submitHandler}>
              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='name' value={data.name} onChange={changeData} className='form-control mb-3' placeholder='Name' />
                </div>
                <div className='col-lg-6'>
                  <input type='email' name='email' value={data.email} onChange={changeData} className='form-control mb-3' placeholder='Email Address' />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <input type='number' name='phone' value={data.phone} onChange={changeData} className='form-control mb-3' placeholder='Phone' />
                </div>
                <div className='col-lg-6'>
                  <input type='text' name='subject' value={data.subject} onChange={changeData} className='form-control mb-3' placeholder='Subject' />
                </div>
              </div>
              <textarea rows={5} cols={10} name='message' value={data.message} onChange={changeData} className='form-control mb-3' placeholder='Text Area' />
              <div className={styles.bookButton}>
                <button className='mx-end'>
                  Contact Us
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-1'>

          </div>
          <div className={`col-md-4 ${styles.contactinfo}`}>
            <h5><strong>Sigma Tech</strong></h5>
            <p>House No 40,3rd Floor</p>
            <p>VittalRao Nagar,Madhapur</p>
            <p>Hitech City,MainRoad</p>
            <p>Hyderabad ,Telangana</p>
            <p>+91 9390290650</p>
            <p>info@sigmatech.com</p>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='row pb-4'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.325578214136!2d78.38214187414258!3d17.444124301170177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1757855586613!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }}
            allowfullscreen="" loading="lazy" title="Google Maps location of our office" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
  )
}

export default ContactUS