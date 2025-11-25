import React, { useState } from 'react'
import axios from 'axios'
import styles from './adminstyles.module.css'

const AddBlogs = () => {
    const [data, setData] = useState({
        title: '',
        author: '',
        comment: '',
        description: '',
        content: ''
    })
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState("")

    // handle text input
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // handle file input
    const fileHandler = (e) => {
        setImage(e.target.files[0])
    }

    // submit handler
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', data.title)
        formData.append('author', data.author)
        formData.append('comment', data.comment)
        formData.append('description', data.description)
        formData.append('content', data.content)

        axios.post('https://doctorsconnect.onrender.com/blogupload', formData)
            .then(res => {
                alert(res.data.message)
                if (res.data.status === 'success') {
                    setData({
                        title: '',
                        author: '',
                        comment: '',
                        description: '',
                        content: ''
                    })
                    setImage(null)
                    setMessage(res.data.message)
                }
            })
            .catch(err => {
                console.error(err)
                alert("Error uploading blog")
            })
    }

    return (
        <main className={styles.addBlogMain}>
            <section className='py-4'>
                <div className='container'>
                    <div className={styles.blogCard}>
                        <h3 className='text-center mb-4 text-primary fw-bold'>Add New Blog</h3>
                        <form onSubmit={submitHandler}>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <label className={styles.label}>Upload Image</label>
                                    <input type='file' name='image' onChange={fileHandler} className={`form-control mb-3 ${styles.input}`} />
                                </div>
                                <div className='col-lg-6'>
                                    <label className={styles.label}>Blog Title</label>
                                    <input type='text' name='title' value={data.title} onChange={changeHandler} className={`form-control mb-3 ${styles.input}`} placeholder='Enter Title' />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <label className={styles.label}>Author</label>
                                    <input type='text' name='author' value={data.author} onChange={changeHandler} className={`form-control mb-3 ${styles.input}`} placeholder='Author Name' />
                                </div>
                                <div className='col-lg-6'>
                                    <label className={styles.label}>Comment</label>
                                    <input type='text' name='comment' value={data.comment} onChange={changeHandler} className={`form-control mb-3 ${styles.input}`} placeholder='Short Comment' />
                                </div>
                            </div>

                            <label className={styles.label}>Description</label>
                            <textarea name='description' value={data.description} onChange={changeHandler} className={`form-control mb-3 ${styles.textarea}`} rows={5} placeholder='Write a short description...' />

                            <label className={styles.label}>Content</label>
                            <textarea name='content' value={data.content} onChange={changeHandler} className={`form-control mb-4 ${styles.textarea}`} rows={7} placeholder='Write full blog content...' />

                            <div className='text-center'>
                                <input type='submit' value='Add Blog' className={styles.blogBtn} />
                            </div>

                            {message && <p className='text-center mt-3 fw-semibold text-success'>{message}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AddBlogs
