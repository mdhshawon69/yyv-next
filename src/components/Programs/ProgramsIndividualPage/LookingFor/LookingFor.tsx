import React from 'react';
import './lookingFor.scss';

const LookingFor = ({ data }: any) => {
  return (
    <div className="looking-for-container">
      <div className="content">
        <div className="looking-element-1">
          <h2>{data?.content?.[0]?.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content?.[0]?.description_one,
            }}
          ></div>
        </div>
        <div className="looking-element-2">
          <img
            src={`${data?.content?.[0]?.image_one}`}
            alt="looking_for_image"
          />
        </div>
      </div>
      {data?.content?.[0]?.image_source && (
        <small>
          Image Source: <b>{data?.content?.[0]?.image_source}</b>
        </small>
      )}
    </div>
  );
};

export default LookingFor;
