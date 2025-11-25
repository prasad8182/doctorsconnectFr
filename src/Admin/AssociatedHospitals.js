import React, { useState } from 'react';
import styles from './adminstyles.module.css';
import axios from 'axios';

const AssociatedHospitals = () => {
  const [image, setImage] = useState('')
  const [catname, setCatname] = useState('')

  const formdata = new FormData()
  const submitHandler = (e)=>{
    e.preventDefault()

    if(!image || !catname){
      alert(`Unable to post the Data`)
      return
    }
    formdata.append("image",image)
    formdata.append("catname",catname)
    axios.post(`https://doctorsconnect.onrender.com/hospital`,formdata)
    .then((res)=>{
      alert(`Product Added Successfully`)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <main className={styles.hospitalMain}>
      <section className={`${styles.hospitalSection} py-5`}>
        <div className='container'>
          <h4 className='text-center mb-4 fw-bold text-primary'>
            🏥 Add Associated Hospital
          </h4>

          <div className={`col-lg-8 mx-auto p-5 shadow-lg ${styles.hospitalCard}`}>
            <form onSubmit={submitHandler}>
              {/* Upload File */}
              <div className='mb-4'>
                <label className='form-label fw-semibold text-secondary'>
                  Upload Hospital Logo / Image
                </label>
                <input
                  type='file'
                  className={`form-control ${styles.inputField}`}
                  placeholder='Choose File'
                  onChange={(e)=>setImage(e.target.files[0])}
                />
              </div>

              {/* Hospital Name */}
              <div className='mb-4'>
                <label className='form-label fw-semibold text-secondary'>
                  Hospital Name
                </label>
                <input
                  type='text'
                  className={`form-control ${styles.inputField}`}
                  placeholder='Enter Hospital Name'
                  value={catname}
                  onChange={(e)=>setCatname(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className='d-flex justify-content-end gap-3 pt-3'>
                <button type='button' className={`btn ${styles.cancelBtn}`}>
                  Cancel
                </button>
                <button type='submit' className={`btn ${styles.submitBtn}`}>
                  Add Hospital
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssociatedHospitals;
