/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

'use client';

import './vision.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Vision = ({ backgroundColor, textColor, font, visionData }: any) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const containerVariants = {
    initial: {
      scaleX: '1.07',
    },
    focused: {
      scaleX: '1',
    },
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial="initial"
        animate={inView ? 'focused' : 'initial'}
        variants={containerVariants}
        transition={{ duration: 1 }}
        className="vision-container"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '95%',

          color: '#fff',
          transition: 'transform 500ms 500ms',
        }}
      >
        <div
          style={{
            display: visionData?.title ? 'block' : 'hidden',
            color: '#fff',
          }}
        >
          <h3 className="section-heading">{visionData?.title}</h3>
        </div>
        <div className="vision">
          <article>
            <div
              dangerouslySetInnerHTML={{ __html: visionData?.description_one }}
              style={{ color: textColor, fontSize: font }}
              ref={ref}
            ></div>
          </article>
          <article
            dangerouslySetInnerHTML={{ __html: visionData?.description_two }}
            style={{ color: textColor }}
          ></article>
        </div>
      </motion.div>
    </div>
  );
};

export default Vision;
