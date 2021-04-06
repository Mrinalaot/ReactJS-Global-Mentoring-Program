import React, { Component } from 'react';
import CONSTANTS from '../constants/constants';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="msg msg-error z-depth-3">{CONSTANTS.ERROR}</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
