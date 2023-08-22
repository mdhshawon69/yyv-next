/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import Loader from '@/shared/components/Loader/Loader';
import useFetch from '@/shared/hooks/useFetch';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  const path = usePathname();
  const slug = path.split('newsletter/');
  const newSlug = slug[1];

  const [isLoading, data] = useFetch('blogs/api');
  const newsletters = data?.data?.filter(
    (item: any) => item.type === 'newsletter'
  );

  const newsletterData = newsletters?.find(
    (item: any) => item.link === newSlug
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: newsletterData?.description }}
        ></div>
      )}
    </>
  );
};

export default page;
