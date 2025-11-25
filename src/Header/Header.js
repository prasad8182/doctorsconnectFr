import React from 'react'
import logo from './surgiConnect_logo.png'
import {Link} from 'react-router-dom'
import image from './adminloginlogos.png'
import headerStyles from './header.module.css'
const Header = () => {
  return (
    <header className={headerStyles.headers}>
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              <img src={logo} className='img-fluid w-50 h-50' alt='logo' />
            </Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'><span className='navbar-toggler-icon'></span></button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/treatments'>Treatments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/bookappoint'>BookAppointments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blogs'>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactus'>ContactUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/adminlogin'>
                                  <img src={image} className='img-fluid h-25 m-0'/>
                                </Link>
                            </li>
                        </ul>
                  </div>
          </div>
        </nav>
    </header>
  )
}

export default Header
