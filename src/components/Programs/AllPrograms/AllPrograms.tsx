'use client';

import React from 'react';
import SingleProgram from '../SingleProgram/SingleProgram';
import './allPrograms.scss';
import useFetch from '@/shared/hooks/useFetch';

const AllPrograms = () => {
  const [isLoading, data] = useFetch('programs/api');
  const programs = data?.data?.filter(
    (item: any) => item.type === 'programs_page'
  );
  return (
    <div className="mainContainerPrograms">
      <div className="gridContainer">
        {programs?.map((item: any, i: number) => (
          <div key={i} className={i % 3 === 0 ? 'fullGrid' : ''}>
            <SingleProgram programData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPrograms;
