'use client';

import { HeroSection } from '@/shared/components';
import React from 'react';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Vision from '@/shared/components/Vision/Vision';
import Values from '@/components/About/Values/Values';
import Featured from '@/components/About/Featured/Featured';
import Team from '@/components/About/Team/Team';
import UpperFooter from '@/shared/components/UpperFooter/UpperFooter';
import useFetch from '@/shared/hooks/useFetch';
import Loader from '@/shared/components/Loader/Loader';
import ValuesNew from '@/components/About/ValuesNew/ValuesNew';

const AboutPage = () => {
  const [isLoading, data] = useFetch('vision/api');
  const aboutVision = data?.data?.find((item: any) => item.type === 'about');
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <HeroSection
            mainText="Weavers, Investors,"
            secondaryText="Entrepreneurs"
            showTypewriter={false}
          />
          <Vision
            backgroundColor="#3a3b3a"
            textColor="#fff"
            font="20px"
            visionData={aboutVision}
          />
          {/* <Values /> */}
          <ValuesNew />
          <Featured />
          <Team />
          <UpperFooter
            textOne="Checkout the open positions"
            textTwo="of our company and"
            textThree="be part of the change"
            link="/talents"
          />
        </AnimatedPage>
      )}
    </>
  );
};

export default AboutPage;
