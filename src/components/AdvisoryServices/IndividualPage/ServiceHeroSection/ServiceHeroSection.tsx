/* eslint-disable max-len */

'use client';

import React from 'react';
import './serviceHeroSection.scss';
import Link from 'next/link';

const ServiceHeroSection = ({ projectPage }: any) => {
  const headerSection = projectPage?.section?.find(
    (item: any) => item.name === 'header-section'
  );

  const projectBody = projectPage?.section?.find(
    (item: any) => item.name === 'project-body'
  );

  return (
    <>
      <div className="central-africa-container">
        <div
          className="central-africa-header"
          style={{
            backgroundImage: `url('${headerSection?.content?.[0].image_one}')`,
          }}
        >
          <div className="header_content">
            <h2>{headerSection?.content?.[0].title}</h2>
          </div>
        </div>
        <div className="central-africa-body">
          <div className="top-grid">
            <div className="top-grid-left">
              <h2>{projectBody?.content?.[0].title}</h2>
              <div className="sub-text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: projectBody?.content?.[0].sub_title,
                  }}
                ></p>
              </div>
            </div>
            <div className="top-grid-right">
              <img src={`${projectBody?.content?.[0].image_one}`} alt="" />
            </div>
          </div>
          <div className="bottom-grid">
            <div
              className="bottom-grid-left"
              dangerouslySetInnerHTML={{
                __html: projectBody?.content?.[0].description_one,
              }}
            ></div>
            <div className="bottom-grid-right">
              <p
                dangerouslySetInnerHTML={{
                  __html: projectBody?.content?.[0].description_two,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="central-africa-footer">
          <Link href="/advisory-services">Back</Link>
        </div>
      </div>
    </>
  );
};

export default ServiceHeroSection;
