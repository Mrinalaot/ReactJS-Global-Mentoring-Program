import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div className="not-found">
    <h3 className="not-found-message">{message}</h3>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string
};

export default ErrorMessage;
