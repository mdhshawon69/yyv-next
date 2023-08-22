/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */

'use client';

import React from 'react';
import './our-impact.scss';
import Quote from '@/shared/components/Quote/Quote';
import useFetch from '@/shared/hooks/useFetch';

const OurImpact = () => {
  const [isLoading, impact] = useFetch('our-impact/api');

  return (
    <div className="impact-section">
      <div className="layer">
        <div className="impact-section__heading-container">
          <Quote
            textOne="Our"
            textTwo="Impact"
            colorOne="#fff"
            length="small"
          />
        </div>
        <div className="impact-section__info">
          {impact?.data?.map((item: any, i: number) => (
            <div
              key={i}
              className={`box ${
                i === 0
                  ? 'box-three'
                  : i === 1
                  ? 'box-one'
                  : i === 2
                  ? 'box-four'
                  : i === 3
                  ? 'box-five'
                  : ''
              }`}
            >
              <h3 className="number">{item.impact_number}</h3>
              <p className="text">
                <span>{item.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
