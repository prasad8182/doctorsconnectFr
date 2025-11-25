import React, { useState } from 'react'
import styles from './innerstyles.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BookAppointment = () => {
    const { tname, location, dname } = useParams()
    const [data, setData] = useState({
        tname: tname || "",
        location: location || "",
        dname: dname || "",
        patientname: "",
        phone: "",
        email: "",
        textarea: ""
    })
    const changeData = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()

        axios.post(`http://localhost:4000/bookings`,data)
        .then((res)=>{
            if(res.data.status === 'success'){
                alert(res.data.message)
                setData('')
            }
            else{
                alert('Unable Book the Doctor Appointment')
            }
        })
    }

    return (
        <main>
            <section className={`${styles.bookhead}`}>
                <h1>Book Appointment Form</h1>
                <form onSubmit={submitHandler} className='col-lg-6 mx-auto shadow'>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            <input
                                list='treatmentList'
                                id='treatment'
                                name='tname'
                                value={data.tname}
                                onChange={changeData}
                                className='form-control'
                                placeholder='-- Choose a Treatment Name --'
                                required
                            />
                            <datalist id='treatmentList'>
                                <option value='Heart' />
                                <option value='Lungs' />
                                <option value='Kidney' />
                                <option value='Brain' />
                                <option value='Liver' />
                            </datalist>
                        </div>

                        {/* Location Input */}
                        <div className='col-lg-6 mb-3'>
                            <input
                                list='locationList'
                                id='location'
                                className='form-control'
                                name='location'
                                value={data.location}
                                onChange={changeData}
                                placeholder='-- Location --'
                                required
                            />
                            <datalist id='locationList'>
                                <option value='Banjara Hills' />
                                <option value='Jubilee Hills' />
                                <option value='Hitech City' />
                                <option value='Madhapur' />
                                <option value='Gachibowli' />
                                <option value='Kukatpally' />
                                <option value='Mehdipatnam' />
                                <option value='Kondapur' />
                                <option value='Miyapur' />
                            </datalist>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            <input list='doctorlist' name='dname'
                                value={data.dname}
                                onChange={changeData} className='form-control' placeholder='-- Doctor Name --' />
                            <datalist id='doctorlist' >
                                <option value='Renuka' />
                                <option value='Vamsi' />
                                <option value='Durga' />
                                <option value='Pavan Kumar' />
                                <option value='SaiNadh' />
                                <option value='PamarthiVenu' />
                                <option value='Revanth' />
                                <option value='Charan' />
                                <option value='Kiran' />
                            </datalist>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control mb-3' name='patientname' value={data.patientname} onChange={changeData} type='text' placeholder='Patient Name' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <input type='number' name='phone' value={data.phone} onChange={changeData} className='form-control mb-3' placeholder='Phone' />
                        </div>
                        <div className='col-lg-6'>
                            <input type='email' name='email' value={data.email} onChange={changeData} className='form-control mb-3' placeholder='Email Address' />
                        </div>
                    </div>
                    <textarea rows={5} cols={10} className='form-control mb-3' placeholder='Text Area' />
                    <div className={styles.bookButton}>
                        <input type='submit' value='Book Appointment' className='mx-end' />
                    </div>
                </form>
            </section>
        </main>
    )
}

export default BookAppointment