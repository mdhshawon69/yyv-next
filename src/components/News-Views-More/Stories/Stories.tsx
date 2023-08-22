/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import './stories.scss';
import Link from 'next/link';
import useFetch from '@/shared/hooks/useFetch';

const Stories = () => {
  const [isLoading, stories] = useFetch('blogs/api');
  const data = stories?.data?.filter((item: any) => item.type === 'stories');

  return (
    <div>
      <div className="stories-container">
        <div className="stories-grid">
          <div className="stories-grid-left">
            <div className="img-header">
              <img src={data?.[0]?.thumb_image} alt="" />
            </div>
            <div>
              <h2>stories</h2>
            </div>
          </div>
          <div className="stories-grid-right">
            {data?.map((item: any, i: number) => (
              <div className="stories-grid-card" key={i}>
                <div className="card-header">
                  <h5>{item.title}</h5>
                </div>
                <div className="card-footer">
                  <Link href={`/news-views-more/${item.link}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
