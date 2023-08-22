/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useEffect, useState } from 'react';
import './news.scss';
import 'aos/dist/aos.css';

import Link from 'next/link';
import NewsSlider from '../NewsSlider/NewsSlider';
import AOS from 'aos';
import images from '@/assets/images';
import useFetch from '@/shared/hooks/useFetch';

const News = () => {
  const [isLoading, news] = useFetch('blogs/api');
  const data = news?.data?.filter((item: any) => item.type === 'news');
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="news-container">
        <div className="news-grid">
          <div className="news-grid-left">
            <div className="img-header">
              <img src={data?.[0]?.thumb_image} alt="" />
            </div>
            <div>
              <h2>news</h2>
            </div>
          </div>
          <div className="news-grid-right">
            {data?.map((item: any, i: number) => (
              <div className="news-grid-card" key={i}>
                <div className="card-header">
                  <h5>{item.title}</h5>
                </div>
                <div className="card-footer">
                  <Link href={`/news-views-more/${item.link}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-footer" id="btn-1">
          <button onClick={() => setShowMore(!showMore)}>
            {!showMore ? 'load more' : 'show less'}
            {!showMore ? (
              <span className="arrow-down">
                <img src={images.downArrow.src} alt="" />
              </span>
            ) : (
              <span className="arrow-down">
                <img src={images.upArrow.src} alt="" />
              </span>
            )}
          </button>
        </div>

        <div className="news-slider">
          {showMore && (
            <div data-aos="fade-up" data-aos-duration="700">
              <NewsSlider />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
