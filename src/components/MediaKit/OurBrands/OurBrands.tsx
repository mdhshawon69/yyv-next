/* eslint-disable max-len */
import React from 'react';
import './our-brands.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const OurBrands = () => {
  return (
    <div id="sub-brands">
      <div className="all-brands">
        <div className="uk-container">
          <div className="media-container-header">
            <h1 className="inner-span">
              <Highlight content="Our Brands & Subsidiaries" />
            </h1>
          </div>
          <div className="flexContainer">
            <div className="brands-container">
              <div className="company-logo-section">
                <img src="https://res.cloudinary.com/dubokuvxt/image/upload/v1691382285/yy_goshthi_1_pxjlpp.png" />
              </div>
              <div className="company-details-section">
                <div className="company-info">
                  <p>
                    YY Goshthi was created in 2016 as the first independent
                    Social Business incubator of Bangladesh. We are established
                    in partnership with Nobel Laureate Professor Muhammad Yunus
                    to build, accelerate, and invest in Social Businesses. Our
                    four-month-long program is designed by Social Business
                    leaders and investors to help early-stage social
                    entrepreneurs be ready to launch their minimum viable
                    product and raise the needed seed capital. To date 70+ youth
                    from our Goshthi (family) has improved the lives of 800,000+
                    Bangladeshis. Now we want to change the lives of a million!
                  </p>
                </div>
              </div>
            </div>

            <div className="brands-container">
              <div className="company-logo-section">
                <img src="https://res.cloudinary.com/dubokuvxt/image/upload/v1691382284/yy-design_1_hahmc5.png" />
              </div>
              <div className="company-details-section">
                <div className="company-info">
                  <p>
                    YY Design is a value-driven creative consultant dedicated to
                    developing bespoke solutions to provide a range of creative
                    services and digital products globally. Our bunch of
                    visionary creators assist clients in building an innovative
                    brand identity and impactful online presence through
                    delivering meaningful Marcom materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="brands-container">
              <div className="company-logo-section" uk-grid>
                <img src="https://res.cloudinary.com/dubokuvxt/image/upload/v1691382284/ihd.85e59f2_vbhvag.png" />
              </div>
              <div className="company-details-section">
                <div className="company-info">
                  <p>
                    Impact Hub Dhaka brings together entrepreneurs, enablers,
                    young talents and professionals from all across Bangladesh
                    to create a vibrant community. We believe in creating a
                    Bangladesh where everyone thrives when entrepreneurial,
                    compassionate and committed individuals work towards a
                    shared purpose. Impact Hub Dhaka is a part of a global
                    network, offering the local experience of a global movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
