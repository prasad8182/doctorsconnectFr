import React, { useContext, useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import { store } from '../App'
import axios from 'axios'

const AdminDashboard = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://doctorsconnect.onrender.com/admindashboard`,{
            headers: {
                "x-token": token,
            }
        })
        .then((res)=>{
            setData(res.data.message)
        })
        .catch((err)=>{
            console.log(err);            
        })
    })

    if(!token){
        navigate('/adminlogin')
    }

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        {/* <h6 className='mt-5 mb-0'>{data}-Dashboard</h6> */}
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <AdminHeader />
                        <Outlet />
                        <AdminFooter />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminDashboard