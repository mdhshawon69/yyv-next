/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useState } from 'react';
import './jobItem.scss';
import { AnimatePresence, motion } from 'framer-motion';

const JobItem = ({ jobNumber, data }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };

  console.log(data);
  return (
    <div id="job-section" className="uk-section">
      <div className="uk-container">
        <div className="open-position">
          <div className="title-container">
            <div className="job-title">
              <div className="title-bg">{jobNumber + 1}</div>
              <h2>{data?.job_title}</h2>
            </div>
          </div>
          <div className="description">
            <div className="job-description">
              <div className="accordion">
                <h3
                  className="accordion-heading"
                  onClick={() => toggleAccordion(1)}
                >
                  Job Description<span>{openIndex === 1 ? '-' : '+'}</span>
                </h3>

                <AnimatePresence>
                  {openIndex === 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      style={{ overflow: 'hidden' }}
                      className="accordion-content"
                      dangerouslySetInnerHTML={{
                        __html: data?.job_description,
                      }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="accordion">
                <h3
                  className="accordion-heading"
                  onClick={() => toggleAccordion(2)}
                >
                  Essential Responsibilities
                  <span>{openIndex === 2 ? '-' : '+'}</span>
                </h3>

                <AnimatePresence>
                  {openIndex === 2 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      style={{ overflow: 'hidden' }}
                      className="accordion-content"
                      dangerouslySetInnerHTML={{
                        __html: data?.job_responsibilities,
                      }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="accordion">
                <h3
                  className="accordion-heading"
                  onClick={() => toggleAccordion(3)}
                >
                  Qualifications<span>{openIndex === 3 ? '-' : '+'}</span>
                </h3>

                <AnimatePresence>
                  {openIndex === 3 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      style={{ overflow: 'hidden' }}
                      className="accordion-content"
                      dangerouslySetInnerHTML={{ __html: data?.qualifications }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="accordion">
                <h3
                  className="accordion-heading"
                  onClick={() => toggleAccordion(4)}
                >
                  Other Info<span>{openIndex === 4 ? '-' : '+'}</span>
                </h3>

                <AnimatePresence>
                  {openIndex === 4 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      style={{ overflow: 'hidden' }}
                      className="accordion-content"
                      dangerouslySetInnerHTML={{ __html: data?.other_info }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="contact-email">
                <p>
                  <i>
                    We welcome candidates from diverse backgrounds. If you are
                    interested in applying for this position please send your
                    resume and cover letter to&nbsp;
                    <a href="mailto:careers@yy.ventures">careers@yy.ventures</a>
                    &nbsp; Please indicate the position applied for in the
                    subject line of your email. Your cover letter should be no
                    longer than one page, and must answer the following
                    questions.
                  </i>
                </p>
                <ul>
                  <li>Why are you interested in working with YY Ventures?</li>
                  <li>
                    What compelled you to apply for this specific role at YY
                    Ventures?
                  </li>
                  <li>
                    What strengths, experience, and expertise would you bring to
                    this role?
                  </li>
                </ul>
                <p>
                  <i>
                    You are advised to mention your salary expectations in your
                    cover letter. Applications without cover letters will not be
                    reviewed. Only short-listed candidates will be contacted for
                    interviews
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
