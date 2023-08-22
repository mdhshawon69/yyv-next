/* eslint-disable max-len */
import React from 'react';
import './brand-assets.scss';

const BrandAssets = () => {
  return (
    <div id="asset-download">
      <div className="text-section">
        <div className="text-main">
          <h3 className="section-heading">Download Brand Assets</h3>
          <div className="asset-container">
            <a
              className="btn-yyv"
              target="_blank"
              href="https://res.cloudinary.com/dubokuvxt/image/upload/v1691385014/yy_ventures_2_vdktxb.png"
              download
            >
              YY Ventures Logo
            </a>
            <a
              className="btn-yyv-gl"
              target="_blank"
              href="https://yyv.yyventures.org/uploads/brand_guideline/YYV_Guideline_2023.pdf"
              download
            >
              YY Ventures Brand Guideline
            </a>
            <a
              className="btn-yyg"
              target="_blank"
              href="https://res.cloudinary.com/dubokuvxt/image/upload/v1691382285/yy_goshthi_1_pxjlpp.png"
              download
            >
              YY Goshthi Logo
            </a>
            <a
              className="btn-yyd"
              target="_blank"
              href="https://res.cloudinary.com/dubokuvxt/image/upload/v1691382284/yy-design_1_hahmc5.png"
              download
            >
              YY Design Logo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAssets;
