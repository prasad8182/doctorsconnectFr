import React from 'react'
import styles from './whychooseus.module.css'
import image1 from './whychooseAssests/w1.png'
import image2 from './whychooseAssests/w2.png'
import image3 from './whychooseAssests/w3.png'
import image4 from './whychooseAssests/w4.png'
const WhyChooseUS = () => {
    const steps = [
        {
            path: image1,
            text: 'Highly qualified surgeons'
        },
        {
            path: image2,
            text: 'Cost effective surgeries'
        },
        {
            path: image3,
            text: 'NABH hospitals only'
        },
        {
            path: image4,
            text: 'Patient Centric Approach'
        }
    ]
    return (
        <main className={styles.whychooseus}>
            <section className={`container-fluid`}>
                <div className={styles.whychoose}>
                    <h2>Why <span>Choose US ?</span></h2>
                </div>
                
            </section>
            <section className='container'>
                <div className={styles.tank}>
                    {
                        steps.map((step) => (
                            <div className={styles.boxs}>
                                <div className={styles.circle}></div>
                                <div className={styles.triangle}> </div>
                                <div className={styles.boxcontent}>
                                    <img src={step.path} className='img-fluid' />
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </main>
    )
}

export default WhyChooseUS