/* eslint-disable max-len */

'use client';

import ServiceHeroSection from '@/components/AdvisoryServices/IndividualPage/ServiceHeroSection/ServiceHeroSection';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Loader from '@/shared/components/Loader/Loader';
import useFetch from '@/shared/hooks/useFetch';
import { useParams } from 'next/navigation';
import React from 'react';

const ProjectIndividualPage = () => {
  const { slug } = useParams();

  const [isLoading, data] = useFetch('pages/api');
  const projectPage = data?.data?.find((item: any) => item.slug === slug);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <ServiceHeroSection projectPage={projectPage} />
        </AnimatedPage>
      )}
    </>
  );
};

export default ProjectIndividualPage;
