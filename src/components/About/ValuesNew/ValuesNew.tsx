import React, { useState } from 'react';
import './valuesNew.scss';
import { AnimatePresence, motion } from 'framer-motion';
import valuesLeaf from '../../../assets/images/valuesLeaf.png';

const ValuesNew = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };
  return (
    <div className="values-main-container">
      <img className="values-leaf" src={valuesLeaf.src} alt="" />
      <div className="values-new-container">
        <div className="values-left">
          <h2>Our Values</h2>
          <p>
            We are driven by our core values when we work to shape the future of
            Bangladesh, and create a better world for generations to come.
            Together with our team and our community of entrepreneurs, creators,
            enablers, and investors, we are constantly pushing our limits to do
            a little more to solve the most pressing social and environmental
            challenges of our time.
          </p>
        </div>
        <div className="values-right">
          <div className="values-accordion">
            <h3
              className="accordion-heading"
              onClick={() => toggleAccordion(1)}
            >
              Equity
              <span
                style={{
                  transform:
                    openIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.5s all ease-in-out',
                }}
                className="triangle"
              ></span>
            </h3>

            <AnimatePresence>
              {openIndex === 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  style={{ overflow: 'hidden' }}
                  className="accordion-content"
                >
                  <p>
                    We promote inclusivity and diversity, and strive to provide
                    equal opportunities for all to thrive. Our respectful
                    culture values, diverse perspectives, irrespective of
                    background, gender, or race.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="values-accordion">
            <h3
              className="accordion-heading"
              onClick={() => toggleAccordion(2)}
            >
              Transparency
              <span
                style={{
                  transform:
                    openIndex === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.5s all ease-in-out',
                }}
                className="triangle"
              ></span>
            </h3>

            <AnimatePresence>
              {openIndex === 2 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  style={{ overflow: 'hidden' }}
                  className="accordion-content"
                >
                  <p>
                    We maintain clear and honest communication with all
                    stakeholders, including employees, investors, partners,
                    customers, and the general public.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="values-accordion">
            <h3
              className="accordion-heading"
              onClick={() => toggleAccordion(3)}
            >
              Empathy
              <span
                style={{
                  transform:
                    openIndex === 3 ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.5s all ease-in-out',
                }}
                className="triangle"
              ></span>
            </h3>

            <AnimatePresence>
              {openIndex === 3 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  style={{ overflow: 'hidden' }}
                  className="accordion-content"
                >
                  <p>
                    We actively seek to understand and address the needs and
                    concerns of our employees, customers, partners, and
                    communities, fostering a supportive and empathetic workplace
                    culture.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="values-accordion">
            <h3
              className="accordion-heading"
              onClick={() => toggleAccordion(4)}
            >
              Sustainability
              <span
                style={{
                  transform:
                    openIndex === 4 ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.5s all ease-in-out',
                }}
                className="triangle"
              ></span>
            </h3>

            <AnimatePresence>
              {openIndex === 4 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  style={{ overflow: 'hidden' }}
                  className="accordion-content"
                >
                  <p>
                    We are dedicated to environmental stewardship. We actively
                    minimize our carbon footprint and waste, and adopt
                    eco-friendly practices. Our office premises and events are
                    free of single-use plastic like bottles, badges, and
                    banners.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="values-accordion">
            <h3
              className="accordion-heading"
              onClick={() => toggleAccordion(5)}
            >
              HappYYness
              <span
                style={{
                  transform:
                    openIndex === 5 ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.5s all ease-in-out',
                }}
                className="triangle"
              ></span>
            </h3>

            <AnimatePresence>
              {openIndex === 5 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  style={{ overflow: 'hidden' }}
                  className="accordion-content"
                >
                  <p>
                    We value success beyond finances. We prioritize the
                    happiness and satisfaction of our employees, partners, and
                    customers, and focus on work-life blend, team camaraderie,
                    and wellbeing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesNew;
