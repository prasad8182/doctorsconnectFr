import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

const HomeBlogs = () => {
  // Fetch all blogs
  const data = useFetchData('https://doctorsconnect.onrender.com/blogupload');

  // Take only first 4 blogs
  const limitedBlogs = data.slice(0, 4);

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Latest Health Blogs</h2>

      <div className="row">
        {limitedBlogs.length > 0 ? (
          limitedBlogs.map((blog, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={`https://doctorsconnect.onrender.com${blog.path}`}
                  alt={blog.title}
                  className="card-img-top"
                  style={{
                    height: '180px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="fw-bold text-primary">{blog.title}</h6>
                  <p className="text-muted small mb-2">{blog.author}</p>
                  <p className="text-secondary" style={{ fontSize: '14px' }}>
                    {blog.description.slice(0, 80)}...
                  </p>
                  <Link to={`/blogalone/${blog.title}`} className="btn btn-outline-primary btn-sm mt-auto">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No blogs found.</p>
        )}
      </div>

      {/* Link to all blogs page */}
      <div className="text-center mt-3">
        <Link to="/blogs">
          <button className="btn btn-primary">View All Blogs</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeBlogs;
