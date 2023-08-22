'use client';

import React from 'react';
import Service from '../Service/Service';
import './allServices.scss';
import useFetch from '@/shared/hooks/useFetch';

const AllServices = () => {
  const [isLoading, data] = useFetch('projects/api');
  console.log(data);
  return (
    <div className="services-grid">
      {data?.data?.map((item: any, i: number) => (
        <div className={`${i % 2 === 0 && 'span_2'} `} key={i}>
          <Service data={item} />
        </div>
      ))}
    </div>
  );
};

export default AllServices;
