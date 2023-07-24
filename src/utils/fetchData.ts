import { useState, useEffect } from 'react';
import { config } from "../../config"
import axios from 'axios';

export const request = axios.create({
  baseURL: config.STRAPI_DEFAULT_LINK,
  headers: {
    Authorization: 'bearer ' + config.STRAPI_API_KEY,
  },
});

const fetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await request.get(url);
        setData(result.data.data);
      } catch(error: any) {
        setError(error);
      }
      setLoading(false);
    };
    getData();
  }, [url])

  return { data, loading, error }
};

export default fetchData;