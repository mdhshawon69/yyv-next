import React from 'react';
import './participants.scss';

const Participants = ({ data }: any) => {
  return (
    <div className="program-countries-container">
      <h2>{data?.title}</h2>
      <div className="program-countries">
        {data?.content?.map((item: any, i: number) => (
          <div className="program-country" key={i}>
            <img src={`${item.image_one}`} alt="" />
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participants;
