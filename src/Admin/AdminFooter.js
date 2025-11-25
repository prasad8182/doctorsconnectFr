import React from 'react'
import styles from './adminstyles.module.css'


const AdminFooter = () => {
    return (
        <main>
            <div className={styles.adminfooter}>
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
        </main>
    )
}

export default AdminFooter