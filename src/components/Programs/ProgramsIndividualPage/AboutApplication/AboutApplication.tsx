import React from 'react';
import './aboutApplication.scss';

const AboutApplication = ({ data }: any) => {
  return (
    <div className="journey-container">
      <h3>{data?.content?.[0]?.title}</h3>
      <div className="paragraph">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.content?.[0]?.description_one,
          }}
        ></div>
      </div>
      <h5>{data?.content?.[0]?.sub_title}</h5>
      <p className="application-close">
        Application closes on the &nbsp;
        <span className="date">{data?.content?.[0]?.closing_date}</span>
      </p>
    </div>
  );
};

export default AboutApplication;
