/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import './header.scss';

const Header = ({ data }: any) => {
  return (
    <div>
      <div className="sb-ecosystem-container">
        <div
          className="sb-ecosystem-header"
          style={{
            backgroundImage: `linear-gradient(
            0deg,
            rgba(1, 0, 0, 0.4),
            rgba(1, 0, 0, 0.4)
          ), url(${data?.content?.[0]?.image_one})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="header_content">
            <h2>
              <span>{data?.content?.[0]?.title}</span>
            </h2>
            <div className="sub-container">
              <h2 className="highlight heading-second"></h2>
              {data?.content?.[0]?.link_one && (
                <span className="apply-button">
                  <Link href="/application">Apply Now</Link>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OCIgaGVpZ2h0PSIzNyIgdmlld0JveD0iMCAwIDU4IDM3Ij4NCiAgPHRleHQgaWQ9Il8iIGRhdGEtbmFtZT0iJmd0OyZndDsmZ3Q7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMxKSIgZmlsbD0iI2NjMjU1ZSIgZm9udC1zaXplPSIzNyIgZm9udC1mYW1pbHk9IkdyYXBoaWstQmxhY2ssIEdyYXBoaWsiIGZvbnQtd2VpZ2h0PSI4MDAiPjx0c3BhbiB4PSIwIiB5PSIwIj4mZ3Q7Jmd0OyZndDs8L3RzcGFuPjwvdGV4dD4NCjwvc3ZnPg0K"
                    alt=""
                  />
                </span>
              )}
            </div>
          </div>
        </div>
        {data?.content?.[0]?.image_source && (
          <small>
            Image Source: <b>{data?.content?.[0]?.image_source}</b>
          </small>
        )}
      </div>
    </div>
  );
};

export default Header;
