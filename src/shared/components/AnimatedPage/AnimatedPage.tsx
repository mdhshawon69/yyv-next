'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
