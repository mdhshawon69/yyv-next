/* eslint-disable prettier/prettier */

'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Highlight = ({ content }: any) => {
  const [ref, inView] = useInView();
  return (
    <span
      ref={ref}
      style={{
        display: 'inline-block',
        position: 'relative',
        zIndex: 9,
      }}
    >
      {content}
      <div
        style={{
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: -1,
          background: 'transparent',
          width: '100%',
          height: '40%',
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1s ease-in-out',
          transformOrigin: 'left',
        }}
      ></div>
    </span>
  );
};

export default Highlight;
