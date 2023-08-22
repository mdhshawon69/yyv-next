import React from 'react';
import './ViewsPage.scss';
import Link from 'next/link';

const ViewsPage = ({ data }: any) => {
  return (
    <div>
      <div className="yunus-news-container">
        <div
          className="yunus-news-header"
          style={{
            backgroundImage: `url("${data?.thumb_image}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className="header-left">
            <div>
              <h1 className="highlight">{data?.title}</h1>
            </div>
            <div>
              <p>{data?.sub_title}</p>
            </div>
            <div className="author">
              <h5>{data?.name_of_viewer}</h5>
              <p>{data?.designation_of_viewer}</p>
            </div>
          </div>
          <div className="header-right"></div>
        </div>
        <div className="yunus-news-body">
          <div
            className="body-block"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
        </div>
        <div className="yunus-news-footer">
          <Link href="/news-views-more">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ViewsPage;
