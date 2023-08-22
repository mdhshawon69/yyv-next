/* eslint-disable no-underscore-dangle */

'use client';

import PatternOne from '@/components/News-Views-More/IndividualPage/PatternOne/PatternOne';
import PatternThree from '@/components/News-Views-More/IndividualPage/PatternThree/PatternThree';
import PatternTwo from '@/components/News-Views-More/IndividualPage/PatternTwo/PatternTwo';
import ViewsPage from '@/components/News-Views-More/IndividualPage/ViewsPage/ViewsPage';
import Loader from '@/shared/components/Loader/Loader';
import useFetch from '@/shared/hooks/useFetch';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const NewsViewsMoreIndividualPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  const path = usePathname();
  const slug = path.split('news-views-more/');
  const newSlug = slug[1];

  const [isLoading, data] = useFetch('pages/api');
  console.log(data);

  const patternThree = data?.data?.filter(
    (item: any) => item.pattern === 'pattern-three'
  );

  const patternThreeNews = patternThree?.find(
    (item: any) => item.slug === newSlug
  );

  const patternTwo = data?.data?.filter(
    (item: any) => item.pattern === 'pattern-two'
  );

  const patternTwoNews = patternTwo?.find((item: any) => item.slug === newSlug);

  const patternOne = data?.data?.filter(
    (item: any) => item.pattern === 'pattern-one'
  );

  const patternOneNews = patternOne?.find((item: any) => item.slug === newSlug);

  if (!router.refresh) {
    return <></>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {patternOneNews && <PatternOne data={patternOneNews} />}
          {patternTwoNews && <PatternTwo data={patternTwoNews} />}
          {patternThreeNews && <PatternThree data={patternThreeNews} />}
        </div>
      )}
    </>
  );
};

export default NewsViewsMoreIndividualPage;
