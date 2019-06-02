import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <span className="loading__spinner" />
      <span className="loading__spinner-text">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
