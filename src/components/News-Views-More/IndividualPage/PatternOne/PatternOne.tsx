/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import ParticipantCardOne from '../../ParticipantCardOne/ParticipantCardOne';
import './patternOne.scss';
import Highlight from '@/shared/components/Highlight/Highlight';
import RelatedNews from '@/shared/components/RelatedNews/RelatedNews';
import NewsSlider from '../../NewsSlider/NewsSlider';
import useFetch from '@/shared/hooks/useFetch';
import ParticipantCardTwo from '../../ParticipantCardTwo/ParticipantCardTwo';
import Link from 'next/link';

const PatternOne = ({ data }: any) => {
  const headerSection = data?.section?.find(
    (item: any) => item.name === 'header-section'
  );

  const introSection = data?.section?.find(
    (item: any) => item.name === 'intro-section-one'
  );

  const participantsSection = data?.section?.find(
    (item: any) => item.name === 'participants-section-one'
  );
  console.log(participantsSection);
  return (
    <div className="east-africa-container">
      <div
        className="east-africa-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${headerSection?.content?.[0].image_one})`,
          backgroundPosition: '0 0',
        }}
      >
        <div className="header_content">
          <h2>{headerSection?.content?.[0].title}</h2>
        </div>
      </div>
      <div className="east-africa-body">
        <div className="top-grid">
          <div className="top-grid-left">
            <h2>{introSection?.content?.[0].title}</h2>
            <div className="sub-text">
              <p>{introSection?.content?.[0].sub_title}</p>
            </div>
          </div>
          <div
            className="top-grid-right"
            dangerouslySetInnerHTML={{
              __html: introSection?.content?.[0].description_one,
            }}
          ></div>
        </div>
      </div>
      <div className="participant">
        <div className="heading-container">
          <h2 className="highlight">
            <Highlight content="Meet the participants" />
          </h2>
        </div>

        {participantsSection?.content?.map((item: any, i: number) => (
          <div className="card-container" key={i}>
            {item?.image_two ? (
              <ParticipantCardOne index={i} data={item} />
            ) : (
              <ParticipantCardTwo index={i} data={item} />
            )}
          </div>
        ))}
      </div>
      <div className="east-africa-footer">
        <Link href="/news-views-more">Back</Link>
      </div>

      <RelatedNews />
    </div>
  );
};

export default PatternOne;
