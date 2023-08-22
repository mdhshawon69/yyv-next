import React from 'react';
import './participantCardTwo.scss';

const ParticipantCardTwo = ({ data, index }: any) => {
  return (
    <div
      className={`participant-card_two ${
        index % 2 === 0 ? 'participant-card-reverse' : ''
      }`}
    >
      <div className="image-container-one">
        <img src={`${data?.image_one}`} alt="" />
      </div>
      {!data?.image_two && (
        <div className="participant-one-info">
          <p className="name">{data?.image_title_one}</p>
          <p className="des">{data?.image_desc_one}</p>
        </div>
      )}
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: data?.description_one,
        }}
      ></div>
    </div>
  );
};

export default ParticipantCardTwo;
