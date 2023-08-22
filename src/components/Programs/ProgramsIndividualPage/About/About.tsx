import Link from 'next/link';
import React from 'react';
import './about.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const About = ({ data }: any) => {
  return (
    <div className="program-container">
      <div className="sub-container">
        <div>
          <h4>
            <Highlight content={data?.content?.[0]?.title} />
          </h4>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content?.[0]?.description_one,
            }}
          ></div>
        </div>
        <div className="program_second">
          <div>
            <img src={`${data?.content?.[0]?.image_one}`} alt="program_image" />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content?.[0]?.description_two,
            }}
          ></div>
        </div>
      </div>

      <div className="button-container">
        {data?.content?.[0]?.Link_one && (
          <span className="apply-button apply-button-p">
            <Link href={`${data?.content?.[0]?.link_one}`} target="_blank">
              <span className="apply">Apply</span>
              <span className="apply">now!</span>
            </Link>
          </span>
        )}
        {data?.content?.[0]?.Link_two && (
          <span className="nominate-button">
            <Link href={`${data?.content?.[0]?.link_two}`} target="_blank">
              <span className="nominate">Nominate</span>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default About;
