import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

const BlogAlone = () => {
  const { title } = useParams();
  const blog = useFetchData(`http://localhost:4000/blogupload/${title}`);

  return (
    <main>
      <section>
        <div className='container py-4'>
          <div className='row'>

            {/* Blog Details Section */}
            <div className='col-lg-9'>
              {blog && blog.data ? (
                <div className='card border-0 shadow-sm p-4'>
                  <img
                    src={`http://localhost:4000${blog.data.path}`}
                    alt={blog.data.title}
                    className='img-fluid rounded mb-3'
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <h2 className='fw-bold text-primary mb-3'>{blog.data.title}</h2>
                  <p className='text-muted'><strong>Author:</strong> {blog.data.author}</p>
                  <p className='fst-italic text-secondary'>{blog.data.comment}</p>
                  <p className='mt-3'>{blog.data.description}</p>
                  <p><strong>{blog.data.content}</strong></p>
                </div>
              ) : (
                <p className='text-danger'>Loading or no blog found...</p>
              )}
            </div>

            {/* Sidebar */}
            <div className='col-lg-3'>
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
  );
};

export default BlogAlone;
