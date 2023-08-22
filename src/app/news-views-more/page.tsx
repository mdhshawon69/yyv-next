import News from '@/components/News-Views-More/News/News';
import Newsletter from '@/components/News-Views-More/Newsletter/Newsletter';
import Stories from '@/components/News-Views-More/Stories/Stories';
import Views from '@/components/News-Views-More/Views/Views';
import { HeroSection } from '@/shared/components';
import AnimatedPage from '@/shared/components/AnimatedPage/AnimatedPage';
import React from 'react';

const NewsViewsMore = () => {
  return (
    <AnimatedPage>
      <HeroSection
        mainText="News "
        optionalText="Views & More"
        showTypewriter={false}
      />
      <News />
      <Views />
      <Stories />
      <Newsletter />
    </AnimatedPage>
  );
};

export default NewsViewsMore;
