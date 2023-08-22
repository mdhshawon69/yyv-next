'use client';

import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './values.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const Values = () => {
  const [startSecond, setStartSecond] = useState(false);
  const [startThird, setStartThird] = useState(false);
  const [startFourth, setStartFourth] = useState(false);
  const [startFifth, setStartFifth] = useState(false);

  setTimeout(() => {
    setStartSecond(true);
  }, 2000);

  setTimeout(() => {
    setStartThird(true);
  }, 3500);

  setTimeout(() => {
    setStartFourth(true);
  }, 6000);

  setTimeout(() => {
    setStartFifth(true);
  }, 8200);

  return (
    <div className="valuesContainer">
      <div className="mainHeading">
        <h3>
          <Highlight content="Our Values" />
        </h3>
      </div>

      <div>
        <h4>
          <Typewriter
            options={{
              strings: ['HappYYness'],
              autoStart: true,
              loop: true,
              delay: 130,
              cursor: '',
              deleteSpeed: 76000000000000000000000000000000000000000000000000000000000,
            }}
          />
        </h4>
        <h4>
          {startSecond && (
            <Typewriter
              options={{
                strings: ['Equity'],
                autoStart: true,
                loop: true,
                delay: 130,
                cursor: '',
                deleteSpeed: 76000000000000000000000000000000000000000000000000000000000,
              }}
            />
          )}
        </h4>
        <h4>
          {startThird && (
            <Typewriter
              options={{
                strings: ['Sustainability'],
                autoStart: true,
                loop: true,
                delay: 130,
                cursor: '',
                deleteSpeed: 76000000000000000000000000000000000000000000000000000000000,
              }}
            />
          )}
        </h4>
        <h4>
          {startFourth && (
            <Typewriter
              options={{
                strings: ['Transparency'],
                autoStart: true,
                loop: true,
                delay: 130,
                cursor: '',
                deleteSpeed: 76000000000000000000000000000000000000000000000000000000000,
              }}
            />
          )}
        </h4>
        <h4>
          {startFifth && (
            <Typewriter
              options={{
                strings: ['Empathy'],
                autoStart: true,
                loop: true,
                delay: 130,
                cursor: '',
                deleteSpeed: 76000000000000000000000000000000000000000000000000000000000,
              }}
            />
          )}
        </h4>
      </div>
    </div>
  );
};

export default Values;
