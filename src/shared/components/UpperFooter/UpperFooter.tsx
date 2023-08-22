/* eslint-disable prettier/prettier */

'use client';

import React from 'react';
import './upper-footer.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Highlight from '../Highlight/Highlight';

const UpperFooter = ({ textOne, textTwo, textThree, link }: any) => {
  return (
    <motion.div className="upperFooterContainer">
      <h2>{textOne}</h2>
      <h2>{textTwo}</h2>
      <h2>
        <Highlight content={textThree} />
      </h2>

      <div>
        <Link href={`${link}`}>
          <span className="arrow"></span>
        </Link>
      </div>
    </motion.div>
  );
};

export default UpperFooter;
