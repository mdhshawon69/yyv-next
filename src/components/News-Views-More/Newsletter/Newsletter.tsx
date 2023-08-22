/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

'use client';

import React from 'react';
import Link from 'next/link';
import './newsletter.scss';
import useFetch from '@/shared/hooks/useFetch';
import { usePathname } from 'next/navigation';

const Newsletter = () => {
  const [isLoading, data] = useFetch('blogs/api');
  const newsletters = data?.data?.filter(
    (item: any) => item.type === 'newsletter'
  );

  return (
    <div>
      <div className="newsletter-container">
        <div className="newsletter-grid">
          <div className="newsletter-grid-left">
            <div className="img-header">
              <img src={newsletters?.[0]?.thumb_image} alt="" />
            </div>
            <div>
              <h2>newsletter</h2>
            </div>
          </div>
          <div className="newsletter-grid-right">
            {newsletters?.map((item: any, i: number) => (
              <div className="newsletter-grid-card" key={i}>
                <div className="card-header">
                  <h5>{item?.title}</h5>
                </div>
                <div className="card-footer">
                  <Link href={`/news-views-more/newsletter/${item?.link}`}>
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

export default Newsletter;
