'use client';

import { useState, useEffect } from 'react';

const useFetch = (endPoint: string) => {
  const [data, setData] = useState<any>([]);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    const baseUrl = process.env.baseUrl;
    // const baseUrl = 'http://localhost:5000/';
    setIsPending(true);

    fetch(`${baseUrl + endPoint}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((resData) => {
        setIsPending(false);
        setData(resData);
      })
      .catch((err) => {
        setIsPending(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [isPending, data];
};

export default useFetch;
