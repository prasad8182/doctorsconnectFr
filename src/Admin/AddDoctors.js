import React, { useState } from 'react'
import doctorstyles from './adminstyles.module.css'
import axios from 'axios'

const AddDoctors = () => {
  const [doctor, setDoctor] = useState({ tname: "", location: "", dname: "", dqulification: "", dspecialization: "", dexperience: "", contact: "", email: "" })
  const [error, setError] = useState('')

  const changeData = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')

    const { tname, location, dname, dqulification, dspecialization, dexperience, contact, email } = doctor

    if (!tname || !location || !dname || !dqulification || !dspecialization || !dexperience || !contact || !email) {
      setError(' Please fill in all fields before submitting.')
      return
    }
    axios.post(`http://localhost:4000/doctor`, doctor)
      .then((res) => {
        if (res.data.status === 'success') {
          alert(res.data.message)
          setDoctor({ tname: "", location: "", dname: "", dqulification: "", dspecialization: "", dexperience: "", contact: "", email: "" })
          setError('')
        }
        else if (res.data.status === 'failed') {
          setError(res.data.message)
        }
        else {
          setError('Something Went Wrong. Try again')
        }
      })
      .catch((err) => {
        console.error(err)
        setError('❌ Server error while adding doctor.')
      })
  }

  return (
    <main className={doctorstyles.main}>
      <section className={doctorstyles.section}>
        <div className='container'>
          <h4 className={doctorstyles.heading}>Add Doctor</h4>

          <div className={`${doctorstyles.formCard} col-lg-8 mx-auto`}>
            <form onSubmit={submitHandler}>
              {/* Treatment + Location */}
              <div className='row'>
                <div className='col-lg-6'>
                  <input
                    list='treatmentList'
                    id='location'
                    className={`form-control mb-3`}
                    placeholder='-- Treatment Name --'
                    name='tname'
                    value={doctor.tname}
                    onChange={changeData}
                    required
                  />
                  <datalist id='treatmentList'>
                    <option value='General Surgery' />
                    <option value='Lifestyle Disorders' />
                    <option value='Cardiology' />
                    <option value='Cardiac Surgeries' />
                    <option value='Critical Care' />
                    <option value='Neuro Surgery' />
                    <option value='Organ Transplant' />
                    <option value='Orthopeadics' />
                    <option value='Gastroenterloogy' />
                    <option value='Bariatrics' />
                    <option value='Urology' />
                    <option value='Vascular' />
                    <option value='Plastic Surgery' />
                    <option value='Infertility' />
                    <option value='Obstetrics and Gynecology' />
                    <option value='ENT' />
                    <option value='Ophthalmology' />
                  </datalist>
                </div>
                <div className='col-lg-6'>
                  <input
                    list='locationList'
                    id='location'
                    className={`form-control mb-3`}
                    placeholder='-- Location --'
                    name='location'
                    value={doctor.location}
                    onChange={changeData}
                    required
                  />
                  <datalist id='locationList'>
                    <option value='Madhapur' />
                    <option value='Hitech City' />
                    <option value='Kondapur' />
                    <option value='Gachibowli' />
                    <option value='Jubleehills' />
                    <option value='Miyapur' />
                    <option value='Ameerpet' />
                    <option value='SR Nagar' />
                    <option value='Moosapet' />
                    <option value='Suncity' />
                    <option value='Mehendhipatam' />
                    <option value='Prakash Nagar' />
                    <option value='Raidurg' />
                    <option value='Kukatpalli' />
                  </datalist>
                </div>
              </div>

              {/* Doctor Name + Qualification */}
              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='dname' value={doctor.dname} onChange={changeData} className='form-control mb-3' placeholder='Enter Doctor Name' />
                </div>
                <div className='col-lg-6'>
                  <input type='text' name='dqulification' value={doctor.dqulification} onChange={changeData} className='form-control mb-3' placeholder='Qualification' />
                </div>
              </div>

              {/* Specialization + Experience */}
              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='dspecialization' value={doctor.dspecialization} onChange={changeData} className='form-control mb-3' placeholder='Specialization' />
                </div>
                <div className='col-lg-6'>
                  <input type='text' name='dexperience' value={doctor.dexperience} onChange={changeData} className='form-control mb-3' placeholder='Experience' />
                </div>
              </div>

              {/* Phone + Email */}
              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='contact' value={doctor.contact} onChange={changeData} className='form-control mb-3' placeholder='Phone Number' />
                </div>
                <div className='col-lg-6'>
                  <input type='email' name='email' value={doctor.email} onChange={changeData} className='form-control mb-3' placeholder='Email' />
                </div>
              </div>

              {error && <p className='text-center text-bg-danger fw-bold py-2'>{error}</p>}
              

              <div className='row'>
                <div className='col-lg-12 d-flex justify-content-end py-3'>
                  <input type='submit' className={doctorstyles.submitBtn} value='Add Doctor' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AddDoctors
