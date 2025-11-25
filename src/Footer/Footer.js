import React from 'react'
import footerStyles from './footer.module.css'

const Footer = () => {
    return (
        <footer className='container-fluid p-0'>
            <div className={footerStyles.footers}>
                <div className='container'>
                    <div className='row p-4'>
                        <div className='col-lg-4'>
                            <h5 className='mb-3'>TREATMENTS</h5>
                            <p>🧠 Neurosurgery (Brain & Nerves)</p>
                            <p>❤️ Cardiac (Heart) Surgeries</p>
                            <p>🦴 Orthopedic (Bones & Joints)</p>
                            <p>👁️ Ophthalmic (Eye)</p>
                        </div>
                        <div className='col-lg-4'>
                            <h5 className='mb-3'>REACH US</h5>
                            <h6>Phone:</h6>
                            <p>+91 98765 43210</p>
                            <h6>Email:</h6>
                            <p>support@surgiconnect.com</p>
                        </div>
                        <div className='col-lg-4'>
                            <h5 className='mb-3'>CORPORATE OFFICE</h5>
                            <p>🏢 <strong>Enut Technologies</strong></p>
                            <p>📌 Vittalrao Nagar, Madhapur</p>
                            <p>📍 Hyderabad, Telangana, India</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-fluid p-0'>
                <div className={footerStyles.footers2}>
                    <div className='container'>
                        <div className='row p-3'>
                            <div className='col-lg-6'>
                                <p>&copy; Copyrights 2022 SurgiConnect All rights reserved.</p>
                            </div>
                            <div className='col-lg-6'>
                                <p>Designed AND Developped By <span>@NsPrasad</span> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer