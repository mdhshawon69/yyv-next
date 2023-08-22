/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './cultureSection.scss';
import Highlight from '@/shared/components/Highlight/Highlight';

const CultureSection = () => {
  return (
    <div className="career-grid-container">
      <div className={`career-grid-item column`}>
        <div className="career-grid-img">
          <div className="mask">
            <span className="image-title">
              <h3>
                Let’s do a little more <br />
                <span>
                  <Highlight content="for our community" />
                </span>
              </h3>
            </span>
          </div>
          <img
            src="https://res.cloudinary.com/dubokuvxt/image/upload/v1690447682/first-image.69a307e_vpqzrp.png"
            alt=""
          />
        </div>
        <div className="career-grid-sub-item">
          <p>
            At YY Ventures, we work to shape the future of Bangladesh and create
            a better world for generations to come. Our community of
            entrepreneurs, creators, enablers, and investors is constantly
            pushing their limits to do a little more to solve our time's most
            pressing social and environmental challenges.
          </p>
        </div>
      </div>
      <div className={`career-grid-item reverse`}>
        <div className="career-grid-img">
          <div className="mask">
            <span className="image-title">
              <h3>
                Nurturing Diversity, Equity and <br />
                <span>
                  <Highlight content="Inclusion at work" />
                </span>
              </h3>
            </span>
          </div>
          <img
            src="https://res.cloudinary.com/dubokuvxt/image/upload/v1690447704/second-image.4030557_s4rbdl.png"
            alt=""
          />
        </div>
        <div className="career-grid-sub-item">
          <p>
            As we weave a path toward gender-inclusive leadership, we strive to
            ensure diversity, equity, and inclusion in our workplace so that
            everyone feels welcome, safe, and comfortable in their own skin, and
            is confident in their ability and opportunity to think and speak
            freely.
          </p>
        </div>
      </div>
      <div className={`career-grid-item  column`}>
        <div className="career-grid-img">
          <div className="mask">
            <span className="image-title">
              <h3>
                Our commitment to <br />
                <span>
                  <Highlight content="sustainability" />
                </span>
              </h3>
            </span>
          </div>
          <img
            src="https://res.cloudinary.com/dubokuvxt/image/upload/v1690447719/third-image.321a957_zghwwz.jpg"
            alt=""
          />
        </div>
        <div className="career-grid-sub-item">
          <p>
            Since the inception of YY Ventures, we have been mindful of how our
            operations affect our environment, and have taken a very active role
            in ensuring sustainability practices every day at our office, and
            the events we host. For example, we use organic, local, and seasonal
            products at all our events. Any leftover food is recovered or used
            to produce vermicompost fertilizer. Additionally, we serve coffee
            and tea produced by responsible producers where the farmers and
            workers get a fair market price. <br />
            <br />
            Every day at YY Ventures, we ensure that there are no single-use
            plastic products such as plastic bottles, banners, badges, etc. and
            we focus on using organic or recyclable products carefully sourced
            from trusted producers.
          </p>
        </div>
      </div>
      <div className={`career-grid-item reverse`}>
        <div className="career-grid-img">
          <div className="mask">
            <span className="image-title">
              <h3>
                Begin Your Journey at
                <br />
                <span>
                  <Highlight content="YY Ventures" />
                </span>
              </h3>
            </span>
          </div>
          <img
            src="https://res.cloudinary.com/dubokuvxt/image/upload/v1690447735/fourth-image.278c675_ns2fz6.png"
            alt=""
          />
        </div>
        <div className="career-grid-sub-item">
          <p>
            We are on a daily quest to explore and refine our ways to make life
            at YY better, and strive to build a workplace that is more
            connected, collaborative, transparent, flexible, and inclusive for
            people to work in. <br />
            <br />
            Since the start of your journey with YY Ventures, you will have the
            opportunity to drive our mission to create a world of three zeros
            alongside your dynamic team. If you are passionate about doing your
            best work with joYY, we would love for you to join our ever-growing
            family!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CultureSection;
