/* eslint-disable max-len */

'use client';

import AllPrograms from '@/components/Programs/AllPrograms/AllPrograms';
import SingleProgram from '@/components/Programs/SingleProgram/SingleProgram';
import { HeroSection } from '@/shared/components';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Loader from '@/shared/components/Loader/Loader';
import Quote from '@/shared/components/Quote/Quote';
import Vision from '@/shared/components/Vision/Vision';
import WorkWithUs from '@/shared/components/WorkWithUs/WorkWithUs';
import useFetch from '@/shared/hooks/useFetch';

const ProgramsPage = () => {
  const [isLoading, data] = useFetch('vision/api');
  const programsVision = data?.data?.find(
    (item: any) => item.type === 'programs'
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <HeroSection
            mainText="Together We Are"
            typingText={[
              'Incubating Change',
              'Building Social Businesses',
              'Improving Lives',
            ]}
            showTypewriter={true}
          />
          <Vision
            backgroundColor="#3a3b3a"
            textColor="#fff"
            font="20px"
            visionData={programsVision}
          />
          <Quote
            textOne="Check out some of"
            textTwo="our programs"
            length="small"
          />
          <AllPrograms />
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

export default ProgramsPage;
