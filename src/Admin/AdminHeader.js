import React, { useEffect, useState } from 'react'
import styles from './adminstyles.module.css'

const AdminHeader = () => {
  const [username,setUsername] = useState('')
  
  useEffect(()=>{
    const name = localStorage.getItem('adminname')
    if(name){
      setUsername(name)
    }
  },[])
  return (
    <main>
        <section className={`container-fluid ${styles.adminheader}`}>
            <h4>Welcome to Admin Dashboard</h4>
            <p>Logged in as: <strong>{username}</strong></p>
        </section>
    </main>
  )
}

export default AdminHeader