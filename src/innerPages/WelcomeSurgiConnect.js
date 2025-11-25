import React from "react";
import "./welcome.css";
import innerStyles from './innerstyles.module.css'

const WelcomeSurgiConnect = () => {
    const steps = [
        {
            num: "01",
            text: "Consultation to assess your condition.",
        },
        {
            num: "02",
            text: "Suggestion of all possible treatment/surgical options.",
        },
        {
            num: "03",
            text: "Admission and care under our expert team.",
        },
        {
            num: "04",
            text: "Post care consult and home care services.",
        },
    ];

    return (
        <section className="container">
            <div className="timeline">
                <div className='container p-4'>
                    <h2 className='text-center'>Welcom to <span className='text-danger'>SurgiConnect</span></h2>
                    <p className={innerStyles.centerParagraph}>
                        SurgiConnect is a comprehensive healthcare platform designed to bridge the gap between
                        patients and specialized surgeons across India. Our mission is to provide reliable,
                        transparent, and accessible surgical services, empowering patients
                        to make informed decisions.
                    </p>
                </div>
            </div>
            <div className="steps-container mt-0 mb-4">
                {steps.map((step) => (
                    <div key={step.num} className="step-box">
                        <div className="circle"></div>
                        <div className="triangle"></div>
                        <div className="box-content">
                            <h2>{step.num}</h2>
                            <p>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WelcomeSurgiConnect;
