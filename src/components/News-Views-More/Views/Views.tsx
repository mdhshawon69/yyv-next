'use client';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import './views.scss';
import useFetch from '@/shared/hooks/useFetch';

const Views = () => {
  const [isLoading, data] = useFetch('blogs/api');
  const views = data?.data?.filter((item: any) => item.type === 'views');

  return (
    <div>
      <div className="views-container">
        <div className="views-grid">
          <div className="views-grid-left">
            <div className="img-header">
              <img src={views?.[0]?.thumb_image} alt="" />
            </div>
            <div>
              <h2>views</h2>
            </div>
          </div>
          <div className="views-grid-right">
            {views?.map((item: any, i: number) => (
              <div className="views-grid-card" key={i}>
                <div className="card-header">
                  <h5>{item.title}</h5>
                </div>
                <div className="card-footer">
                  <Link href={`/news-views-more/views/${item.link}`}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Views;
