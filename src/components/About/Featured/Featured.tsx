/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './featured.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const Featured = () => {
  return (
    <div className="featuredContainer">
      <img
        src="https://yy.ventures/_nuxt/img/about-dr-yunus.3f13dac.jpg"
        alt=""
      />
      <div className="mask">
        <h2>
          I'm <Highlight content="encouraging " /> young people to become Social
          Business entrepreneurs and <Highlight content="contribute " /> to the
          world, rather than just making money.
        </h2>

        <div className="author">
          <h3>Professor Muhammad Yunus</h3>
          <h3>2006 Nobel Peace Laureate</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
