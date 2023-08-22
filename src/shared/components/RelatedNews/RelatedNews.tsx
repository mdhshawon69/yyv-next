import NewsSlider from '@/components/News-Views-More/NewsSlider/NewsSlider';
import React from 'react';
import './relatedNews.scss';
import Highlight from '../Highlight/Highlight';

const RelatedNews = () => {
  return (
    <div className="news-slider">
      <h2>
        <Highlight content="Related" />
      </h2>
      <div>
        <NewsSlider />
      </div>
    </div>
  );
};

export default RelatedNews;
