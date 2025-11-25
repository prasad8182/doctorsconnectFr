import React from 'react'
import dstyles from './innerstyles.module.css'
import useFetchData from '../hooks/useFetchData'
import { Link, useParams } from 'react-router-dom'

const Doctors = () => {
  const { tname, location } = useParams()
  const data = useFetchData(`http://localhost:4000/doctor/${tname}/${location}`)


  return (
    <main className={dstyles.doctorMain}>
      <section className={dstyles.doctorSection}>
        <div className='container'>
          <h2 className={`${dstyles.heading} text-center mb-5`}>
            {tname} / {location}
          </h2>

          <div className='row g-4'>
            {data.length > 0 ? (
              data.map((doc) => (
                <div className='col-lg-4 col-md-6' key={doc._id}>
                  <div className={dstyles.doctorCard}>
                    <div className={dstyles.cardHeader}>
                      <h4>{doc.dname}</h4>
                      <p className={dstyles.special}>{doc.dspecialization}</p>
                    </div>

                    <div className={dstyles.cardBody}>
                      <p><strong>Qualification:</strong> {doc.dqulification}</p>
                      <p><strong>Experience:</strong> {doc.dexperience}</p>
                      <p><strong>Location:</strong> {doc.location}</p>
                    </div>

                    <div className='text-center mt-3'>
                      <Link to={`/bookappoint/${doc.tname}/${doc.location}/${doc.dname}`}>
                        <button className={dstyles.bookBtn}>Book Appointment</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center text-muted py-5'>
                No doctors available right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Doctors
