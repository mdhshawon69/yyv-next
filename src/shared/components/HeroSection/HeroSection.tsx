/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-expressions */

'use client';

import React from 'react';
import img1 from '@/assets/images/hero-section/01.svg';
import img2 from '@/assets/images/hero-section/02.svg';
import img3 from '@/assets/images/hero-section/03.svg';
import img4 from '@/assets/images/hero-section/04.svg';
import img5 from '@/assets/images/hero-section/05.svg';
import img6 from '@/assets/images/hero-section/06.svg';
import img7 from '@/assets/images/hero-section/07.svg';

import style from './heroSection.module.scss';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Highlight from '../Highlight/Highlight';
const images = [img1, img2, img3, img4, img5, img6, img7];

const {
  heroContainer,
  imageContainer,
  imageContainer1,
  imageContainer2,
  imageContainer3,
  imageContainer4,
  imageContainer5,
  imageContainer6,
  imageContainer7,
  img,
  fadeInContainer,
  heroTextContainer,
} = style;

const HeroSection = (props: any) => {
  return (
    <div className={`${heroContainer} ${fadeInContainer}`}>
      <div className={heroTextContainer}>
        <h1>
          {props.mainText}
          {props.optionalText && <br />}
          {props.optionalText}
          {props.optionalText && <br />}
          {props.showTypewriter && (
            <Typewriter
              options={{
                strings: props.typingText,
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: '',
              }}
            />
          )}
          {/* {props.secondaryText && <br />} */}

          <Highlight content={props.secondaryText} />
        </h1>
      </div>
      <div className={`${imageContainer} ${imageContainer1}`}>
        <Image className={img} src={img1} alt="" />
      </div>
      <div className={`${imageContainer} ${imageContainer2}`}>
        <Image className={img} src={img2} alt="" />
      </div>
      <div className={`${imageContainer} ${imageContainer3}`}>
        <Image className={img} src={img3} alt="" />
      </div>
      <div className={`${imageContainer} ${imageContainer4}`}>
        <Image className={img} src={img4} alt="" />
      </div>
      <div className={`${imageContainer} ${imageContainer5}`}>
        <Image className={img} src={img5} alt="" />
      </div>
      <div className={`${imageContainer} ${imageContainer6}`}>
        <Image className={img} src={img6} alt="" />
      </div>
      <div className={`${imageContainer} ${imageContainer7}`}>
        <Image className={img} src={img7} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
