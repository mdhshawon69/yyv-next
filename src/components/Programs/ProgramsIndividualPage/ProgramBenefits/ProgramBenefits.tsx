/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import React from 'react';
import './program-benefits.scss';

const ProgramBenefits = ({ data }: any) => {
  return (
    <div className="bg">
      <div className="program-benefits-container">
        <div className="benefits-title-container">
          <h2>Benefits of the program</h2>
        </div>
        <div className="benefits-of-program">
          {data?.content?.map((item: any, i: number) => (
            <div
              className="benefit"
              key={i}
              style={{
                background:
                  i === 0
                    ? 'rgba(200,33,89)'
                    : i === 1
                    ? 'rgba(210,199,41)'
                    : i === 2
                    ? 'rgba(0,156,193)'
                    : '',
              }}
            >
              <div className="image-container">
                <div
                  className="benefit-mask"
                  style={{
                    background:
                      i === 0
                        ? 'rgba(200,33,89, 0.5)'
                        : i === 1
                        ? 'rgba(210,199,41, 0.5)'
                        : i === 2
                        ? 'rgba(0,156,193, 0.5)'
                        : '',
                  }}
                ></div>
                <img src={`${item?.image_one}`} alt="" />
              </div>
              <div className="benefits-content">
                <h3>{item?.title}</h3>
                <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.description_one }}
                  ></div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramBenefits;
