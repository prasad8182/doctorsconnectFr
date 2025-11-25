import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dtstyles from './adminstyles.module.css'
import 'datatables/media/css/jquery.dataTables.min.css'
import 'jquery/dist/jquery.min.js'
import $ from 'jquery'
import { Link } from 'react-router-dom'
const DeleteDoctors = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://doctorsconnect.onrender.com/doctor`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    setTimeout(() => {
      if (!$.fn.DataTable.isDataTable('#mytables')) {
        $('#mytables').DataTable({
          responsive: true,
          autoWidth: false,
          scrollX: false,
        });
      }
    }, 1000);
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://doctorsconnect.onrender.com/doctor/${id}`)
      .then((res) => {
        alert(res.data.message)
        setData(data.filter((item) => item._id !== id))
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <main>
      <section>
        <div className="container py-4">
          <h3 className="text-center mb-4">Treatment Data Table</h3>
          <div className="row">
            <div className="col-lg-10 mx-auto table-responsive">
              <table className='table display table-bordered' id='mytables'>
                <thead className="table-success">
                  <tr>
                    <th>Treatment Name</th>
                    <th>Locations</th>
                    <th>Doctor Name</th>
                    <th>Qualification</th>
                    <th>Specialization</th>
                    <th>Experience</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((doc) => (
                      <tr key={doc._id}>
                        <td className="fw-bold">{doc.tname}</td>
                        <td className="fw-bold">{doc.location}</td>
                        <td className="fw-bold">{doc.dname}</td>
                        <td className="fw-bold">{doc.dqulification}</td>
                        <td className="fw-bold">{doc.dspecialization}</td>
                        <td className="fw-bold">{doc.dexperience}</td>
                        <td className="fw-bold">{doc.contact}</td>
                        <td className="fw-bold">{doc.email}</td>
                        <td>
                          <div className={dtstyles.tablebutton}>
                            <Link to={`/editdoctor/${doc._id}`}>
                              <button className="btn btn-primary btn-sm">
                                Edit
                              </button>
                            </Link>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(doc._id)} >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-danger fw-semibold">
                        No treatments found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DeleteDoctors