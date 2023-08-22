/* eslint-disable max-len */

'use client';

import React, { useEffect, useState } from 'react';
import './team.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useFetch from '@/shared/hooks/useFetch';

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isLoading, team] = useFetch('team/api');
  console.log(team);
  team?.data?.sort((a: any, b: any) => {
    if (a.name > b.name) {
      return 1;
    }

    return -1;
  });

  return (
    <div id="staff">
      <div className="titleContainer">
        <h2>Team</h2>
      </div>
      <div className="grid_staff">
        {team?.data?.map((member: any, i: number) => (
          <div
            key={i}
            className="grid_staff__container faded_out"
            data-aos="fade-up"
          >
            <div
              className="grid_staff__container__image_container"
              style={{ background: member.image_bg }}
            >
              <div className="mask"></div>
              <img src={member.profile_image} alt="Avatar" />
            </div>
            <div className="grid_staff__container__content_container content-container">
              <div className="grid_staff__container__content_container__info-container">
                <div className="grid_staff__container__content_container__info-container__name name">
                  {member.name}
                </div>
                <div className="grid_staff__container__content_container__info-container__designation designation">
                  {member.designation}
                </div>
              </div>
              <a
                className="grid_staff__container__content_container__icon icon"
                target="_blank"
                rel="noopener noreferrer"
                href={member.linkedin_link}
              >
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="linkedin"
                  fill="#fff"
                >
                  <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                  <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
