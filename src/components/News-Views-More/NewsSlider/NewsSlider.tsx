/* eslint-disable max-len */

'use client';

import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import './newsSlider.scss';
import useFetch from '@/shared/hooks/useFetch';

const NewsSlider = () => {
  const [isLoading, data] = useFetch('blogs/api');
  const news = data?.data?.filter((item: any) => item.type === 'news');
  console.log(news);
  return (
    <Splide
      options={{
        rewind: true,
        gap: '1rem',
        perPage: 3,
        easing: 'cubic-bezier(0.35, 1, 1, 1)',
        autoplay: true,
        interval: 2500,
        perMove: 1,
        pagination: false,
        breakpoints: {
          640: {
            perPage: 1,
            padding: '0',
            arrows: false,
          },
        },
      }}
    >
      {news?.map((item: any, i: number) => (
        <SplideSlide key={i}>
          <div className="new-slide-card">
            <Link href={`/news-views-more/${item.link}`}>
              <img src={item.thumb_image} alt="" />
            </Link>
            <h3>{item.title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: item.description,
              }}
            ></div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default NewsSlider;
