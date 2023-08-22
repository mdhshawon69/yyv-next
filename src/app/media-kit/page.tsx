'use client';

import BrandAssets from '@/components/MediaKit/BrandAssets/BrandAssets';
import FollowOurSocials from '@/components/MediaKit/FollowOurSocials/FollowOurSocials';
import OurBrands from '@/components/MediaKit/OurBrands/OurBrands';
import { HeroSection } from '@/shared/components';
import Vision from '@/shared/components/Vision/Vision';
import useFetch from '@/shared/hooks/useFetch';
import React from 'react';

const MediaKitPage = () => {
  const [isLoading, data] = useFetch('vision/api');
  const mediaKitVision = data?.data?.find(
    (item: any) => item.type === 'media_kit'
  );
  return (
    <div>
      <HeroSection secondaryText="Media Kit" />
      <Vision visionData={mediaKitVision} backgroundColor="#F1F2F2" />
      <OurBrands />
      <BrandAssets />
      <FollowOurSocials />
    </div>
  );
};

export default MediaKitPage;
