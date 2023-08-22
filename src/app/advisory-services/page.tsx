'use client';

import AllServices from '@/components/AdvisoryServices/AllServices/AllServices';
import { HeroSection } from '@/shared/components';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Loader from '@/shared/components/Loader/Loader';
import Quote from '@/shared/components/Quote/Quote';
import Vision from '@/shared/components/Vision/Vision';
import WorkWithUs from '@/shared/components/WorkWithUs/WorkWithUs';
import useFetch from '@/shared/hooks/useFetch';

import React from 'react';

const AdvisoryServices = () => {
  const [isLoading, data] = useFetch('vision/api');
  const advisoryServicesVision = data?.data?.find(
    (item: any) => item.type === 'advisory_service'
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <HeroSection
            mainText="Corporate Services"
            secondaryText="For Organizations"
            showTypewriter={false}
          />
          <Vision
            backgroundColor="#3a3b3a"
            textColor="#d0d2d3"
            visionData={advisoryServicesVision}
          />
          <Quote
            textOne="Check out some of"
            textTwo="our projects"
            bgColor="#eee"
            length="small"
          />
          <AllServices />
          <WorkWithUs
            headingOne="Work"
            headingTwo="With Us"
            textOne="We look forward to hearing about your Social Business agenda!"
            textTwo="To learn more about what we do and discuss scope of work, please contact."
          />
        </AnimatedPage>
      )}
    </>
  );
};

export default AdvisoryServices;
