import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './adminstyles.module.css';

const EditTreatment = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [tname, setTname] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://doctorsconnect.onrender.com/uploads/${id}`)
            .then((res) => {
                setTname(res.data.tname);
            })
            .catch((err) => console.error('Error loading treatment:', err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('tname', tname);
        if (image) formData.append('image', image);

        axios.put(`https://doctorsconnect.onrender.com/uploads/${id}`, formData)
            .then((res) => {
                alert(res.data.message);
                navigate('/admindashboard/deletetreatment'); // redirect after update
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
                                    type="file"
                                    className={`form-control ${styles.inputField}`}
                                    onChange={(e) => setImage(e.target.files[0])}
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
                                value="Update Treatment"
                            />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EditTreatment;
