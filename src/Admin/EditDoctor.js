import axios from 'axios';
import React, { useEffect, useState } from 'react';
import doctorstyles from './adminstyles.module.css';
import styles from './adminstyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditDoctor = () => {
  const [doctor, setDoctor] = useState({
    tname: "",
    location: "",
    dname: "",
    dqulification: "",
    dspecialization: "",
    dexperience: "",
    contact: "",
    email: ""
  });

  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Fetch doctor details
  useEffect(() => {
  axios.get(`http://localhost:4000/doctor/${id}`)
    .then((res) => {
      const doc = res.data?.doctor || res.data; // ✅ handle both
      if (doc && doc._id) {
        setDoctor(doc);
      } else {
        setError("Doctor not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      setError("Error fetching doctor details.");
    });
}, [id]);


  const changeData = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError('');
    axios.put(`http://localhost:4000/doctor/${id}`, doctor)
      .then((res) => {
        alert(res.data.message);
        navigate('/admindashboard/deletedoctor');
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to update doctor.");
      });
  };

  return (
    <main>
      <section className={styles.addTreatmentSection}>
        <div className="container">
          <div className={`col-lg-6 mx-auto p-5 shadow ${styles.formContainer}`}>
            <h4 className="text-center mb-4">Edit Doctor</h4>
            {error && <p className="text-center text-danger fw-bold">{error}</p>}
            <form onSubmit={submitHandler}>
              <div className='row'>
                <div className='col-lg-6'>
                  <input
                    list='treatmentList'
                    className='form-control mb-3'
                    placeholder='-- Treatment Name --'
                    name='tname'
                    value={doctor.tname || ""}
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
                    className='form-control mb-3'
                    placeholder='-- Location --'
                    name='location'
                    value={doctor.location || ""}
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

              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='dname' value={doctor.dname || ""} onChange={changeData} className='form-control mb-3' placeholder='Enter Doctor Name' />
                </div>
                <div className='col-lg-6'>
                  <input type='text' name='dqulification' value={doctor.dqulification || ""} onChange={changeData} className='form-control mb-3' placeholder='Qualification' />
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='dspecialization' value={doctor.dspecialization || ""} onChange={changeData} className='form-control mb-3' placeholder='Specialization' />
                </div>
                <div className='col-lg-6'>
                  <input type='text' name='dexperience' value={doctor.dexperience || ""} onChange={changeData} className='form-control mb-3' placeholder='Experience' />
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-6'>
                  <input type='text' name='contact' value={doctor.contact || ""} onChange={changeData} className='form-control mb-3' placeholder='Phone Number' />
                </div>
                <div className='col-lg-6'>
                  <input type='email' name='email' value={doctor.email || ""} onChange={changeData} className='form-control mb-3' placeholder='Email' />
                </div>
              </div>

              <div className='d-flex justify-content-end py-3'>
                <input type='submit' className={doctorstyles.submitBtn} value='Update Doctor' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditDoctor;
