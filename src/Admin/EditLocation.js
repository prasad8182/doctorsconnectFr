import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './adminstyles.module.css';

const EditLocation = () => {
    const [data, setData] = useState({ tname: '', location: '' })
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://doctorsconnect.onrender.com/location/${id}`)
            .then((res) => {
                setData({ tname: res.data.tname, location: res.data.location });
            })
            .catch((err) => console.error('Error loading location:', err));
    }, [id]);


    const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setError('');

        axios.put(`https://doctorsconnect.onrender.com/location/${id}`, data)
            .then((res) => {
                alert(res.data.message);
                navigate('/admindashboard/deletelocation');
            })
            .catch((err) => {
                console.error(err);
                setError('Unable to update treatment. Please try again.');
            });
    };

    return (
        <main>
            <section className={styles.addTreatmentSection}>
                <div className="container">
                    <div className={`col-lg-6 mx-auto p-5 shadow ${styles.formContainer}`}>
                        <h4 className="text-center mb-4">Edit Treatment</h4>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${styles.inputField}`}
                                    placeholder="Treatment Name"
                                    name='tname'
                                    value={data.tname}
                                    onChange={changeData}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${styles.inputField}`}
                                    placeholder="Location"
                                    name='location'
                                    value={data.location}
                                    onChange={changeData}
                                    required
                                />
                            </div>

                            {error && <p className="text-danger text-center fw-medium">{error}</p>}

                            <input
                                type="submit"
                                className={`btn btn-info w-100 ${styles.submitBtn}`}
                                value="Update Treatment"
                            />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EditLocation;
