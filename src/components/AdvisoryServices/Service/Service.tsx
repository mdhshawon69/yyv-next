/* eslint-disable max-len */
import React from 'react';
import './service.scss';
import Link from 'next/link';

const Service = ({ data }: any) => {
  return (
    <div
      className="central-africa-grid service-grid"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data?.thumb_image})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="service-grid-content">
        <div className="service-grid-title">
          <h2>{data?.title}</h2>
        </div>
        <div className="service-grid-buttons">
          <div className="container">
            <Link href={`/advisory-services/${data?.link}`}>
              <button className="btn-route">learn more</button>
            </Link>
            <button className="btn-ongoing">
              {data?.is_active ? 'Closed' : 'Open'}
            </button>
          </div>
          <button className="location">
            <span uk-icon="icon: location; ratio: .9"></span>
            <span>{data?.project_location}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
