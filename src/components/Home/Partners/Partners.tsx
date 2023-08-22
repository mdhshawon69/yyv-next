'use client';

import Highlight from '@/shared/components/Highlight/Highlight';
import React from 'react';
import './partners.scss';
import useFetch from '@/shared/hooks/useFetch';

const Partners = () => {
  const [isLoading, data] = useFetch('partners/api');

  return (
    <section className="home-brand-section">
      <div className="home-brand-collection">
        <div className="brand-collection-header">
          <h2>
            <Highlight content="We Are in Good Company" />
          </h2>
        </div>
        <div className="brand-collection-body">
          {data?.data?.map((item: any, i: number) => (
            <div className="brand-collection-body-image yc-image" key={i}>
              <a href={item.partner_link} target="_blank">
                <img src={item.partner_logo} alt="partner" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
