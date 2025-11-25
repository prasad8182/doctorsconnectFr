import React from 'react'
import useFetchData from '../hooks/useFetchData'
import { Link, useParams } from 'react-router-dom'

const Blogs = () => {

  const data = useFetchData('https://doctorsconnect.onrender.com/blogupload')

  return (
    <main>
      <section>
        <div className='container py-4'>
          <div className='row'>

            {/* Blog List Section */}
            <div className='col-lg-8'>
              <div className='row'>
                {data.length > 0 ? (
                  data.map((blog, index) => (
                    <div key={index} className='col-md-12 mb-4'>
                      <div className='card shadow-sm border-0 p-3'>
                        <div className='row g-3 align-items-center'>

                          {/* 🖼️ Blog Image */}
                          <div className='col-md-3'>
                            <img
                              src={`https://doctorsconnect.onrender.com${blog.path}`}
                              alt={blog.title}
                              className='img-fluid rounded'
                              style={{
                                height: '180px',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '10px'
                              }}
                            />
                          </div>

                          {/* 📝 Blog Details */}
                          <div className='col-md-9'>
                            <h4 className='text-primary fw-bold mb-2'>{blog.title}</h4>
                            <p className='text-muted mb-1'>
                              <strong>Author:</strong> {blog.author}
                            </p>
                            <p className='text-secondary fst-italic mb-2'>{blog.comment}</p>
                            <p className='mb-3'>{blog.description}</p>
                            <Link to={`/blogalone/${blog.title}`}>
                              <button className='btn btn-outline-primary btn-sm'>
                                Read More
                              </button>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className='text-center text-danger'>No blogs found.</p>
                )}
              </div>
            </div>


            {/* Sidebar Section */}
            <div className='col-lg-4 p-4'>
              <h5 className='fw-bold'>Recent Posts</h5>
              <p>Signs of hypertension and When to See a Doctor</p>
              <p>Diabetes symptoms and causes</p>
              <p>Worried about hernia growing and becoming dangerous?</p>
              <p>Looking for advanced treatment for varicose veins?</p>
              <p>5 Ways To Manage Diabetes This Summer</p>
              <p>Summer health tips to feel amazing all season long</p>
              <p>Top Health Tips That Boost Weight Loss</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Blogs
