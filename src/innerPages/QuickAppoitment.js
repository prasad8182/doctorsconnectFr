import React from 'react'
import styles from './quickappoint.module.css'
const QuickAppoitment = () => {
    return (
        <main>
            <section>
                <div className={styles.quickappoint}>
                    <h2>Quick AppoitmenT With Expert Doctors Near You</h2>
                    <div className="container">
                        <form className="row g-3 p-5">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <input type="text" className="form-control inputs" placeholder="Name" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <input type="email" className="form-control inputs" placeholder="Email" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <input type="text" className="form-control inputs" placeholder="Phone" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <input type="submit" className="form-control inputs" value='Quick Appointment' />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default QuickAppoitment