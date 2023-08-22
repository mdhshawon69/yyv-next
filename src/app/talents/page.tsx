'use client';

import CultureSection from '@/components/Talents/CultureSection/CultureSection';
import Jobs from '@/components/Talents/Jobs/Jobs';
import { HeroSection } from '@/shared/components';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Loader from '@/shared/components/Loader/Loader';
import Quote from '@/shared/components/Quote/Quote';
import useFetch from '@/shared/hooks/useFetch';
import React from 'react';

const Talents = () => {
  const [isLoading, data] = useFetch('talents/api');
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <HeroSection
            showTypewriter={true}
            typingText={[
              'Equity',
              'Transparency',
              'Empathy',
              'Sustainability',
              'HappYYness',
            ]}
          />
          <Quote
            textOne="A Culture"
            textTwo="of JoYY!"
            bgImage={true}
            colorOne="#fff"
            length="small"
          />
          <CultureSection />
          <Quote
            textOne="Current"
            textTwo="Job Openings"
            // bgColor="#333"
            colorOne="#fff"
            bgImage={true}
          />
          <Jobs data={data} />
        </AnimatedPage>
      )}
    </>
  );
};

export default Talents;
