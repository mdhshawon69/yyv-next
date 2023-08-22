import React from 'react';
import './follow-our-socials.scss';

const FollowOurSocials = () => {
  return (
    <div id="follow-socials">
      <div className="uk-section text-section">
        <div className="uk-container text-main">
          <h3 className="section-heading">Follow Our Socials</h3>
          <div className="uk-child-width-expand@s social-container" uk-grid>
            <div>
              <div className="company-heading">YY Ventures</div>
              <span className="text-info">
                Facebook
                <a href="https://www.facebook.com/yyventures">@yyventures</a>
              </span>
              <span className="text-info">
                Twitter
                <a href="https://twitter.com/yyventures">@yyventures</a>
              </span>
              <span className="text-info">
                Instagram
                <a href="https://www.instagram.com/yy.ventures/">
                  @yy.ventures
                </a>
              </span>
              <span className="text-info">
                LinkedIn
                <a href="https://www.linkedin.com/company/yyventures/">
                  @yyventures
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowOurSocials;
