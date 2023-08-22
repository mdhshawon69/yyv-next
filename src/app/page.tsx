/* eslint-disable prettier/prettier */

'use client';

import React from 'react';
import { HeroSection } from '@/shared/components';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Vision from '@/shared/components/Vision/Vision';
import OurImpact from '@/components/Home/OurImpact/OurImpact';
import Quote from '@/shared/components/Quote/Quote';
import NewsViewsMore from '@/components/Home/NewsViewsMore/NewsViewsMore';
import UpperFooter from '@/shared/components/UpperFooter/UpperFooter';
import Partners from '@/components/Home/Partners/Partners';
import useFetch from '@/shared/hooks/useFetch';
import Loader from '@/shared/components/Loader/Loader';

const HomePage = () => {
  const [isLoading, vision] = useFetch('vision/api');
  const homeVision = vision?.data?.find((item: any) => item.type === 'home');
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <HeroSection
            mainText="Imagine A New"
            typingText={[
              'Reality',
              'Society',
              'World',
              'Way of Doing Business',
            ]}
            showTypewriter={true}
          />
          <Vision
            visionData={homeVision}
            backgroundColor="#f1f2f2"
            font="40px"
          />
          <OurImpact />
          <Quote
            textOne="All humans are"
            textTwo="entrepreneurs"
            textThree="born"
            colorOne="#3A3B3A"
            length="large"
            showName={true}
          />
          <NewsViewsMore />
          <UpperFooter
            textOne="Let us know if you are"
            textTwo="a Social Business entrepreneur/investor and"
            textThree="you want to collaborate"
            link="/contact"
          />
          <Partners />
        </AnimatedPage>
      )}
    </>
  );
};

export default HomePage;
