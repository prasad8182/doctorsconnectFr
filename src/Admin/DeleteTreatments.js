import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'datatables/media/css/jquery.dataTables.min.css'
import {Link} from 'react-router-dom'
import dtstyles from './adminstyles.module.css'
import DataTables from 'datatables/media/js/jquery.dataTables.min.js'
import 'jquery/dist/jquery.min.js'
import $ from 'jquery'

const DeleteTreatments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://doctorsconnect.onrender.com/uploads')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error fetching treatments:', err));

    setTimeout(() => {
      if (!$.fn.DataTable.isDataTable('#mytables')) {
        $('#mytables').DataTable({
          responsive: true,
          autoWidth: false,
          scrollX: false,
        });
      }
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this treatment?')) {
      axios
        .delete(`https://doctorsconnect.onrender.com/uploads/${id}`)
        .then((res) => {
          alert(res.data.message);
          setData(data.filter((item) => item._id !== id));
        })
        .catch((err) => {
          console.error('Error deleting record:', err);
        });
    }
  };

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
                    <th>Image</th>
                    <th>Treatment Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((treat) => (
                      <tr key={treat._id}>
                        <td>
                          <img
                            src={`https://doctorsconnect.onrender.com/uploads/${treat.path}`}
                            alt={treat.tname}
                            width="100"
                            height="80"
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                          />
                        </td>
                        <td className="fw-bold">{treat.tname}</td>
                        <td>
                          <div className={dtstyles.tablebutton}>
                            <Link to={`/edittreatment/${treat._id}`}>
                              <button className="btn btn-primary btn-sm">
                                Edit
                              </button>
                            </Link>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(treat._id)} >
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
  );
};

export default DeleteTreatments;
