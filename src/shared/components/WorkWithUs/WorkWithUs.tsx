import React from 'react';
import './workWithUs.scss';
import Highlight from '../Highlight/Highlight';

const WorkWithUs = ({ headingOne, headingTwo, textOne, textTwo }: any) => {
  return (
    <section className="service-work-container">
      <div className="service-work-header">
        <h2 className="headline_1">{headingOne}</h2>
        <h2 className="headline_2">{headingTwo}</h2>
      </div>
      <div className="service-work-body">
        <div className="content_left">
          <h4>{textOne}</h4>
        </div>
        <div className="content_right">
          <h4>{textTwo}</h4>
          <div className="content_right_contact">
            <h6>Shazeeb M Khairul Islam</h6>
            <p>Founder & Managing Director</p>
            <p>shazeeb@yy.ventures</p>
            <a href="mailto:shazeeb@yy.ventures" target="_blank">
              <h5>
                <Highlight content="contact now" />
              </h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
