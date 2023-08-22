/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import ViewsPage from '@/components/News-Views-More/IndividualPage/ViewsPage/ViewsPage';
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
  const slug = path.split('views/');
  const newSlug = slug[1];

  const [isLoading, data] = useFetch('blogs/api');
  const views = data?.data?.filter((item: any) => item.type === 'views');
  const viewsData = views?.find((item: any) => item?.link === newSlug);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ViewsPage data={viewsData} />
        </div>
      )}
    </>
  );
};

export default page;
