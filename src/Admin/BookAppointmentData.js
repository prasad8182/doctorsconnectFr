import axios from 'axios'
import React, { useEffect, useState } from 'react'
import bookstyles from './adminstyles.module.css'
import 'datatables/media/css/jquery.dataTables.min.css'
import 'jquery/dist/jquery.min.js'
import $ from 'jquery'
const BookAppointmentData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://doctorsconnect.onrender.com/bookings`)
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

  const deleteOneRecord = (bid) => {
    axios.delete(`https://doctorsconnect.onrender.com/bookings/${bid}`)
      .then((res) => {
        if(res.data.status === 'success'){
          alert(res.data.message)
        }
        else{
          alert('Unable to Delete Record')
        }
      })
      .catch((err)=>{
        console.log(err);
        
      })
  }

  return (
    <main>
      <section>
        <div className='container'>
          <div>
            <h4 className={`text-center py-4 ${bookstyles.bookHeading}`}>
              Book Appointment Data
            </h4>
          </div>
          <div className='row'>
            <div className={`col-lg-12 mx-auto table-responsive ${bookstyles.bookTableWrapper}`}>
              <table className={`table display table-bordered ${bookstyles.table}`} id='mytables'>
                <thead>
                  <tr>
                    <th>Treatment Name</th>
                    <th>Location</th>
                    <th>Doctor Name</th>
                    <th>Patient Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((book) => (
                    <tr key={book._id}>
                      <td>{book.tname}</td>
                      <td>{book.location}</td>
                      <td>{book.dname}</td>
                      <td>{book.patientname}</td>
                      <td>{book.phone}</td>
                      <td>{book.email}</td>
                      <td className={bookstyles.bookbuton}>
                        <button title="Edit">E</button>

                        <button title="Delete" onClick={() => deleteOneRecord(book._id)}>D</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default BookAppointmentData