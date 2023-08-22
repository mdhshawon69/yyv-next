'use client';

import React from 'react';
import JobItem from './JobItem/JobItem';
import './jobs.scss';
import useFetch from '@/shared/hooks/useFetch';

const Jobs = ({ data }: any) => {
  return (
    <div className="jobs-container">
      {data?.data?.map((item: any, i: number) => (
        <JobItem data={item} jobNumber={i} key={i} />
      ))}
    </div>
  );
};

export default Jobs;
