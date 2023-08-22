/* eslint-disable max-len */
import React from 'react';
import './singleProgram.scss';
import Highlight from '@/shared/components/Highlight/Highlight';
import Link from 'next/link';

const SingleProgram = ({ programData }: any) => {
  return (
    <div
      className="program-grid-content"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("${programData.banner_image}")`,
      }}
    >
      <div className="contentContainer">
        <div className="program-grid-title">
          <h2>
            <Highlight content={programData.title} />
          </h2>
        </div>
        <div className="program-grid-buttons">
          <div className="container">
            <Link
              href={
                programData.link.includes('https')
                  ? `${programData.link}`
                  : `/programs/${programData.link}`
              }
              target={programData.link.includes('https') ? '_blank' : ''}
            >
              <button className="btn-route">learn more</button>
            </Link>
            <button className="btn-ongoing">{programData.status}</button>
          </div>
          <button className="location">
            <span uk-icon="icon: location; ratio: .9">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="location"
              >
                <path
                  fill="none"
                  stroke="#c7265b"
                  stroke-width="1.01"
                  d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"
                ></path>
                <circle
                  fill="none"
                  stroke="#c7265b"
                  cx="10"
                  cy="6.8"
                  r="2.3"
                ></circle>
              </svg>
            </span>
            <span>{programData.location}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProgram;
