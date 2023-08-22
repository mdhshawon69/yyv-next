/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */

'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import style from './home.module.scss';
const { home } = style;

const Home = () => {
  return (
    <div className={home}>
      <h1>
        Together We Are
        <Typewriter
          options={{
            strings: [
              'Improving Lives',
              'Incubating Change',
              'Building Social Businesses',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            cursor: '',
          }}
        />
      </h1>
    </div>
  );
};

export default Home;
