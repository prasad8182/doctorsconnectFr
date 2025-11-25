import React, { useState } from 'react';
import styles from './adminstyles.module.css';
import axios from 'axios';
const AddLocations = () => {
  const [data, setData] = useState({ tname: '', location: '' })
  const [error, setError] = useState('')


  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError('')
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const tname = data.tname.trim()
    const location = data.location.trim()

    if (!tname || !location) {
      setError("Please Fill all the fields")
      return
    }
    axios.get(`http://localhost:4000/locationname/${tname}`)
      .then((res) => {
        const exists = res.data.some((loc) =>
          loc.location.trim().toLowerCase() === location.toLowerCase()
        )
        if (exists) {
          setError('This location already exists for the selected treatment.')
        }
        else {
          axios.post(`http://localhost:4000/location`, data)
            .then((res) => {
              if (res.data.status === "success") {
                alert(res.data.message)
                setData({ tname: "", location: "" })
              }
              else {
                alert(`unable to add Location`)
              }
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
      .catch((err) => {
        console.log(err);
      });


  }


  return (
    <main>
      <section className={styles.addLocationSection}>
        <div className='container'>
          <h4 className='text-center my-4'>Add Location</h4>
          <div className={`col-lg-6 mx-auto p-4 shadow ${styles.formContainer}`}>
            <form onSubmit={submitHandler}>
              <input
                list='locationList'
                id='location'
                className={`form-control mb-3 ${styles.inputField}`}
                placeholder='-- Treatment Name --'
                name='tname'
                value={data.tname}
                onChange={changeData}
                required
              />
              <datalist id='locationList'>
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

              <input
                type='text'
                className={`form-control mb-3 ${styles.inputField}`}
                placeholder='Location'
                name='location'
                value={data.location}
                onChange={changeData}
              />
              <input
                type='submit'
                className={`btn btn-info w-100 ${styles.submitBtn}`}
                value='Add Location'
              />
            </form>
            {error && (
              <p className="text-center mt-3 fw-bold text-danger">{error}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddLocations;
