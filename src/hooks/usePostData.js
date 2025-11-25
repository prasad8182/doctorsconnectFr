import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const usePostData = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [response, setResponse] = useState(null)

    const postData = (bodyData) => {
        setLoading(true)
        axios.post(url, bodyData)
            .then((res) => {
                setResponse(res.data)
                setError(null)
            })
            .catch((err) => {
                console.log(err);
                setError(err)
            })
            .finally(()=>{
                setLoading(false)
            })
    }
    return { postData, response, error, loading }
}

export default usePostData