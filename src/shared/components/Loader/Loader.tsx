import React from 'react';
import './loader.scss';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <Oval
        height={80}
        width={80}
        color="#c7265b"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#c7265b"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
};

export default Loader;
