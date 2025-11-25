import React, { useState } from 'react';
import styles from './adminstyles.module.css';
import axios from 'axios';

const AddTreatments = () => {
  const [image, setImage] = useState('');
  const [tname, setTname] = useState('');
  const [error, setError] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();

    setError('')
    if (!image) {
      setError(`Please Upload the image`)
      return
    }
    if (!tname.trim()) {
      setError(`Please enter the TreatMent Name`)
      return
    }

    const formdata = new FormData();
    formdata.append('image', image);
    formdata.append('tname', tname);

    axios.post(`http://localhost:4000/uploads`, formdata)
      .then((res) => {
        if (res.data.status === "failed") {
          setError(res.data.message);
        } else if (res.data.status === "success") {
          alert(res.data.message);
        
          setTname('');
          e.target.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to add treatment. Please try again.');
      });
  };

  return (
    <main>
      <section className={styles.addTreatmentSection}>
        <div className="container">
          <div className={`col-lg-6 mx-auto p-5 shadow ${styles.formContainer}`}>
            <h4 className="text-center mb-4">Add Treatment</h4>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  type="file"
                  className={`form-control ${styles.inputField}`}
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${styles.inputField}`}
                  placeholder="Treatment Name"
                  value={tname}
                  onChange={(e) => setTname(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-danger text-center fw-medium">{error}</p>}
              <input
                type="submit"
                className={`btn btn-info w-100 ${styles.submitBtn}`}
                value="Add Treatment"
              />
            </form>
          

          </div>
        </div>
      </section>
    </main>
  );
};

export default AddTreatments;
