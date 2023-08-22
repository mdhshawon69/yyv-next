/* eslint-disable prettier/prettier */

'use client';

import React, { useEffect } from 'react';
import './news-views-more.scss';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlight from '@/shared/components/Highlight/Highlight';
import useFetch from '@/shared/hooks/useFetch';

const NewsViewsMore = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [isLoading, data] = useFetch('blogs/api');
  const news = data?.data?.filter((item: any) => item.type === 'news');
  const view = data?.data?.filter((item: any) => item.type === 'views');
  const story = data?.data?.filter((item: any) => item.type === 'stories');

  return (
    <div className="mainContainer">
      <div>
        <h2>
          <Highlight content="News, Views & More" />
        </h2>
      </div>
      <div className="container">
        <Link
          href={`/news-views-more/${news?.[2].link}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="item">
            <div className="top">
              <img src={news?.[2].thumb_image} alt="" />
              <div className="mask">
                <h1>News</h1>
              </div>
            </div>
            <div className="bottom">
              <h4>{news?.[2].title}</h4>
            </div>
          </div>
        </Link>
        <Link
          href={`/news-views-more/views/${view?.[0]?.link}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="item">
            <div className="top">
              <img src={view?.[0]?.thumb_image} alt="" />
              <div className="mask">
                <h1>Views</h1>
              </div>
            </div>
            <div className="bottom">
              <h4>{view?.[0]?.title}</h4>
            </div>
          </div>
        </Link>
        <Link
          href={`/news-views-more/${story?.[0]?.link}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="item">
            <div className="top">
              <img src={story?.[0]?.thumb_image} alt="" />
              <div className="mask">
                <h1>Stories</h1>
              </div>
            </div>
            <div className="bottom">
              <h4>{story?.[0]?.title}</h4>
            </div>
          </div>
        </Link>
      </div>

      <div className="buttonContainer">
        <Link href="/news-views-more">See All</Link>
      </div>
    </div>
  );
};

export default NewsViewsMore;
