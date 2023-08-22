/* eslint-disable consistent-return */
/* eslint-disable max-len */

'use client';

import About from '@/components/Programs/ProgramsIndividualPage/About/About';
import AboutApplication from '@/components/Programs/ProgramsIndividualPage/AboutApplication/AboutApplication';
import FromYourFriends from '@/components/Programs/ProgramsIndividualPage/FromYourFriends/FromYourFriends';
import Header from '@/components/Programs/ProgramsIndividualPage/Header/Header';
import LookingFor from '@/components/Programs/ProgramsIndividualPage/LookingFor/LookingFor';
import Participants from '@/components/Programs/ProgramsIndividualPage/Participants/Participants';
import ProgramBenefits from '@/components/Programs/ProgramsIndividualPage/ProgramBenefits/ProgramBenefits';
import ProgramOffers from '@/components/Programs/ProgramsIndividualPage/ProgramOffers/ProgramOffers';
import WorkWithUs from '@/shared/components/WorkWithUs/WorkWithUs';
import useFetch from '@/shared/hooks/useFetch';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Loader from '@/shared/components/Loader/Loader';
import { useRouter } from 'next/navigation';

const ProgramIndividualPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  const params = useParams();
  const [isLoading, page] = useFetch('pages/api');
  const pageData = page?.data?.find((item: any) => item.slug === params.slug);

  const header = pageData?.section?.find(
    (item: any) => item.name === 'header-section'
  );
  const about = pageData?.section?.find(
    (item: any) => item.name === 'about-section'
  );
  const programOffers = pageData?.section?.find(
    (item: any) => item.name === 'what-offers-section'
  );
  const participants = pageData?.section?.find(
    (item: any) => item.name === 'participants-section'
  );

  const aboutApplication = pageData?.section?.find(
    (item: any) => item.name === 'join-section'
  );

  const programBenefits = pageData?.section?.find(
    (item: any) => item.name === 'benefits-section'
  );

  const lookingFor = pageData?.section?.find(
    (item: any) => item.name === 'looking-for-section'
  );

  if (!page) {
    return;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ overflow: 'hidden' }}>
          <Header data={header} />
          <About data={about} />
          <ProgramOffers data={programOffers} />
          <Participants data={participants} />
          <AboutApplication data={aboutApplication} />
          <ProgramBenefits data={programBenefits} />
          <LookingFor data={lookingFor} />
          <FromYourFriends />
        </div>
      )}
    </>
  );
};

export default ProgramIndividualPage;
