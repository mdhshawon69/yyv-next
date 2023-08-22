/* eslint-disable max-len */
import React from 'react';
import ParticipantCardTwo from '../../ParticipantCardTwo/ParticipantCardTwo';
import './patternTwo.scss';
import Highlight from '@/shared/components/Highlight/Highlight';
import Link from 'next/link';

const PatternTwo = ({ data }: any) => {
  const headerSection = data?.section?.find(
    (item: any) => item.name === 'header-section'
  );

  const introSection = data?.section?.find(
    (item: any) => item.name === 'intro-section-two'
  );

  const incubateesSection = data?.section?.find(
    (item: any) => item.name === 'incubatees-section-two'
  );

  console.log(incubateesSection);

  return (
    <div className="east-africa-container">
      <div
        className="east-africa-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${headerSection?.content?.[0].image_one})`,
        }}
      >
        <div className="header_content">
          <h2>{headerSection?.content?.[0].title}</h2>
        </div>
      </div>
      <div className="east-africa-body">
        <div className="top-grid">
          <div className="top-grid-left">
            <div
              dangerouslySetInnerHTML={{
                __html: introSection?.content?.[0].description_one,
              }}
            ></div>
          </div>
          <div
            className="top-grid-right"
            dangerouslySetInnerHTML={{
              __html: introSection?.content?.[0].description_two,
            }}
          ></div>
        </div>
      </div>
      <div className="participant">
        <div className="heading-container">
          <h2 className="highlight">
            <Highlight content={incubateesSection?.title} />
          </h2>
        </div>

        {incubateesSection?.content?.map((item: any, i: number) => (
          <div className="card-container" key={i}>
            <ParticipantCardTwo index={i} data={item} />
          </div>
        ))}
      </div>
      <div className="east-africa-footer">
        <Link href="/news-views-more">Back</Link>
      </div>
    </div>
  );
};

export default PatternTwo;
