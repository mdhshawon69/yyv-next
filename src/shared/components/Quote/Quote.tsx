/* eslint-disable prettier/prettier */

'use client';

import React, { useEffect } from 'react';
import './quote.scss';
import { useInView } from 'react-intersection-observer';
import image from '../../../assets/images/footerBg.png';

const Quote = ({
  textOne,
  textTwo,
  textThree,
  colorOne,
  length,
  showName,
  bgColor,
  bgImage,
}: any) => {
  const [ref, inView] = useInView();
  useEffect(() => {
    const updateScroll = () => {
      document.body.style.setProperty(
        '--scroll',
        String(
          window.pageYOffset /
            (document.body.offsetHeight - window.innerHeight - 100)
        )
      );
    };

    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <div
      id="quote"
      ref={ref}
      style={{
        background: bgColor,
        backgroundImage: bgImage && `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1
        className={`line_1 ${inView ? 'reel_right' : ''}`}
        style={{
          color: colorOne,
          justifyContent: length === 'small' ? 'flex-end' : 'flex-start',
        }}
      >
        {textOne}
      </h1>
      <h1
        className={`line_2 ${inView ? 'reel_left' : ''}`}
        style={{
          justifyContent: length === 'small' ? 'flex-start' : 'flex-end',
        }}
      >
        <span className="word_1">{textThree}</span>
        <span
          className="word_2"
          style={{ WebkitTextStroke: `1px ${colorOne}` }}
        >
          &nbsp;{textTwo}
        </span>
      </h1>
      {showName && (
        <div>
          <h5>Professor Muhammad Yunus</h5>
          <p>2006 Nobel Peace Laureate</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
