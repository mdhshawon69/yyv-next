/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */

'use client';

import React from 'react';
import './portfolioGrid.scss';

const PortfolioGrid = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <div className="alumni-container">
        {data?.map((item: any, i: number) => (
          <div
            className={`alumni-item ${
              i === 1
                ? 'card-wide'
                : i === 9
                ? 'card-wide'
                : i === 4
                ? 'card-wide'
                : i === 12
                ? 'card-wide'
                : i === 17
                ? 'card-wide'
                : i === 20
                ? 'card-wide'
                : ''
            }`}
            key={i}
          >
            <img className="img-avijatrik" src={item?.company_logo} alt="" />

            <a
              href={`${item?.company_link}`}
              target="_blank"
              className="learn-more-btn"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
