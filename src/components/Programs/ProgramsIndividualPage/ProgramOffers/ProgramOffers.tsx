import React from 'react';
import './programOffers.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const ProgramOffers = ({ data }: any) => {
  return (
    <div className="program-offers-container">
      <div className="margin-top">
        <div className="sub-container column">
          <div>
            <img src={`${data?.content?.[0]?.image_one}`} alt="program_image" />
            {data?.content?.[0]?.image_source && (
              <small>
                Image Source: <b>{data?.content?.[0]?.image_source}</b>
              </small>
            )}
          </div>
          <div>
            <h4>
              <span>
                <Highlight content={data?.content?.[0]?.title} />
              </span>
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content?.[0]?.description_one,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOffers;
