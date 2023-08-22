/* eslint-disable max-len */

'use client';

import PortfolioGrid from '@/components/Portfolio/PortfolioGrid/PortfolioGrid';
import { HeroSection } from '@/shared/components';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import Loader from '@/shared/components/Loader/Loader';
import Quote from '@/shared/components/Quote/Quote';
import Vision from '@/shared/components/Vision/Vision';
import WorkWithUs from '@/shared/components/WorkWithUs/WorkWithUs';
import useFetch from '@/shared/hooks/useFetch';
import React from 'react';

const Portfolio = () => {
  const [isPending, portfolio] = useFetch('portfolio/api');
  const [isLoading, data] = useFetch('vision/api');
  const portfolioVision = data?.data?.find(
    (item: any) => item.type === 'portfolio'
  );
  const programAlmumni = portfolio?.data?.filter(
    (item: any) => item.type === 'program_alumni'
  );

  const ventureInvestment = portfolio?.data?.filter(
    (item: any) => item.type === 'venture_investment'
  );

  return (
    <>
      {isLoading || isPending ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <HeroSection
            mainText="We Don’t Make Bets,"
            optionalText="We Make"
            secondaryText="Commitments"
          />
          <Vision
            backgroundColor="#3a3b3a"
            textColor="#fff"
            visionData={portfolioVision}
            font="2rem"
          />
          <Quote
            textOne="Notable"
            textTwo="Program Alumni"
            colorOne="#3a3b3a"
            bgColor="#fff"
          />
          <PortfolioGrid data={programAlmumni} />
          <Quote
            textOne="Venture"
            textTwo="Investments"
            colorOne="#fff"
            bgColor="#3a3b3a"
          />
          <PortfolioGrid data={ventureInvestment} />
          <WorkWithUs
            headingOne="Invest"
            headingTwo="With Us"
            textOne="Looking for an opportunity to invest in early stage Social Businesses?"
            textTwo="To learn more about our investment approach and discuss scope of partnerships, please contact."
          />
        </AnimatedPage>
      )}
    </>
  );
};

export default Portfolio;
