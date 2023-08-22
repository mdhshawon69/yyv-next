/* eslint-disable indent */
import React from 'react';
import './participantCardOne.scss';

const ParticipantCardOne = ({ data, index }: any) => {
  return (
    <div
      className={`participant-card_one ${
        index % 2 === 0 ? 'participant-card-reverse' : ''
      }`}
    >
      <div
        className="image-container-one"
        style={!data?.image_two ? { background: '#666' } : {}}
      >
        <img src={`${data?.image_one}`} alt="" />
      </div>
      <div className="participant-one-info">
        <p className="name">{data?.image_title_one}</p>
        <p className="des">{data?.image_desc_one}</p>
      </div>
      {data?.image_two && (
        <div className="participant-two-info">
          <p className="name">{data?.image_title_two}</p>
          <p className="des">{data?.image_desc_two}</p>
        </div>
      )}
      {data?.image_two && (
        <div className="image-container-two">
          <img src={`${data?.image_two}`} alt="" />
        </div>
      )}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: data?.description_one }}
      ></div>
    </div>
  );
};

export default ParticipantCardOne;
