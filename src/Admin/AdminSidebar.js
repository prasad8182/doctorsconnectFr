import React from 'react'
import { Link } from 'react-router-dom'
import logo from './surgiConnect_logo.png'
import styles from './adminstyles.module.css'
const AdminSidebar = () => {
  return (
    <main>
        <ul className={styles.adminsidebar}>
        <div className={` ${styles.adminlogos}`}>
            <Link to='/admindashboard'>
                <img src={logo} className='img-fluid mb-3' />
            </Link>
        </div>
            <li>
                <Link to=''>Add Treatments</Link>
            </li>
            <li>
                <Link to='addlocation'>Add Locations</Link>
            </li>
            <li>
                <Link to='adddoctor'>Add Doctors</Link>
            </li>
            <li>
                <Link to='deletetreatment'>Delete/Edit Treatments</Link>
            </li>
            <li>
                <Link to='deletelocation'>Delete/Edit Locations</Link>
            </li>
            <li>
                <Link to='deletedoctor'>Delete/Edit Doctors</Link>
            </li>
            
            <li>
                <Link to='bookappointmentData'>Book AppointmentData</Link>
            </li>
            <li>
                <Link to='associatedhospital'>Associated Hospitals</Link>
            </li>
            <li>
                <Link to='deletehospital'>Delete Hospitals</Link>
            </li>
            <li>
                <Link to='addblog'>Add Blogs</Link>
            </li>
            <li>
                <Link to='deleteblog'>Delete Blogs</Link>
            </li>
        </ul>
    </main>
  )
}

export default AdminSidebar