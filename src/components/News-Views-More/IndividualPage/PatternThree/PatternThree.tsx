/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './patternThree.scss';
import Link from 'next/link';

const PatternThree = ({ data }: any) => {
  const headerSection = data?.section?.find(
    (item: any) => item.name === 'header-section'
  );

  const newsBody = data?.section?.find(
    (item: any) => item.name === 'news-body'
  );

  return (
    <div>
      <div className="east-africa-container">
        <div
          className="east-africa-header"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${headerSection?.content?.[0]?.image_one})`,
          }}
        >
          <div className="header_content">
            <h2>{headerSection?.content?.[0]?.title}</h2>
          </div>
        </div>
        <div className="east-africa-body">
          <div className="top-grid">
            {newsBody?.content?.[0]?.title && (
              <div className="top-grid-left">
                <h2>{newsBody?.content?.[0]?.title}</h2>
                <div className="sub-text">
                  <p>{newsBody?.content?.[0]?.sub_title}</p>
                </div>
              </div>
            )}
            {newsBody?.content?.[0]?.image_one && (
              <div className="top-grid-right">
                <img src={`${newsBody?.content?.[0]?.image_one}`} alt="" />
              </div>
            )}
          </div>
          <div className="bottom-grid">
            <div
              className="bottom-grid-left"
              dangerouslySetInnerHTML={{
                __html: newsBody?.content?.[0]?.description_one,
              }}
            ></div>
            <div
              className="bottom-grid-right"
              dangerouslySetInnerHTML={{
                __html: newsBody?.content?.[0]?.description_two,
              }}
            ></div>
          </div>
        </div>
        <div className="east-africa-footer">
          <Link href="/news-views-more">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default PatternThree;
