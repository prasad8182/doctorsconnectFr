import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((res) => {

        // Case 1: backend returns array
        if (Array.isArray(res.data)) {
          setData(res.data);
        }

        // Case 2: backend returns { status, data: [...] }
        else if (Array.isArray(res.data.data)) {
          setData(res.data.data);
        }

        // Anything else → empty array
        else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setData([]);
      });
  }, [url]);

  return data;
};

export default useFetchData;
