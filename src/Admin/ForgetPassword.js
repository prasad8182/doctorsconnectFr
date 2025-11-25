import React, { useState } from 'react';
import image from './forgetpassword.jpg';
import axios from 'axios';
import styles from './forgetpasswordstyles.module.css';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [data, setData] = useState({ email: '' });
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const sendMail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/sendotp', data)
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('OTP sent successfully!');
                    setStep(2);
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Error sending OTP');
            });
    };

    const verifyOtp = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/verifyotp', {
            email: data.email,
            otp: otp
        })
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('OTP verified successfully!');
                    localStorage.setItem('resetEmail', data.email);
                    navigate('/resetpassword');
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Error verifying OTP');
            });
    };

    return (
        <main>
            <section className={styles.resetSection}>
                <div className="container">
                    <h3 className="text-center py-4">Forget Password</h3>
                    <div className="row p-3">
                        <div className="col-lg-1"></div>

                        <div className={`col-lg-5 ${styles.resetImageBox}`}>
                            <img src={image} className="img-fluid w-75" alt="Forget Password" />
                        </div>

                        <div className={`col-lg-4 ${styles.resetFormBox}`}>
                            {step === 1 ? (
                                <form onSubmit={sendMail}>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        className="form-control mb-3"
                                        placeholder="Enter Registered Email Address"
                                        required
                                    />
                                    <input
                                        type="submit"
                                        value="Send OTP"
                                        className={`w-100 ${styles.resetSubmitBtn}`}
                                    />
                                </form>
                            ) : (
                                <form onSubmit={verifyOtp}>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="form-control mb-3"
                                        placeholder="Enter OTP"
                                        required
                                    />
                                    <input
                                        type="submit"
                                        value="Verify OTP"
                                        className={`w-100 ${styles.resetVerifyBtn}`}
                                    />
                                </form>
                            )}
                        </div>

                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForgetPassword;
