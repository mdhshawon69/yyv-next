import React from 'react';
import './fromYourFriends.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const FromYourFriends = () => {
  return (
    <section className="service-work-container">
      <div className="service-work-header">
        <h2 className="headline_1">From your</h2>
        <h2 className="headline_2">friends at</h2>
      </div>
      <div className="logo-container">
        <div className="image-container">
          <img
            className="logo"
            src="https://yy.ventures/_nuxt/img/yy_ventures.0131ca6.png"
            alt="YYV logo"
          />
        </div>
        <div className="image-container">
          <img
            className="logo"
            src="https://yy.ventures/_nuxt/img/yunus-centre-logo.cb06456.png"
            alt="YC logo"
          />
        </div>
      </div>
      <div className="service-work-body">
        <div className="content_left">
          <h4>
            Let us know if you are a Social Business support organization,
            incubator, accelerator, impact investor, donor or university and
            want to collaborate.
          </h4>
        </div>
        <div className="content_right">
          <h4>
            To learn more about our work and discuss scope of work, please
            contact.
          </h4>
          <div className="content_right_contact">
            <h6>Zaha Chowdhury</h6>
            <p>Research and Innovation Specialist</p>
            <p>zaha@yy.ventures</p>
            <a href="mailto:zaha@yy.ventures" target="_blank">
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

export default FromYourFriends;
