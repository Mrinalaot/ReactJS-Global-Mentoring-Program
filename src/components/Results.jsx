import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../constants/constants';

const Results = ({ items }) => (
  <>
    <div className="bar grey lighten-1">
      <span className="left">
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">
          ALL
        </h6>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">
          DOCUMENTARY
        </h6>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">
          COMEDY
        </h6>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">
          HORROR
        </h6>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">
          CRIME
        </h6>
      </span>
      <span className="rigt">
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">
          {CONSTANTS.RATING}
        </h6>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">
          {CONSTANTS.RELEASE}
        </h6>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">
          {CONSTANTS.SORT}
        </h6>
      </span>
    </div>
    <hr />
    <div className="bar grey lighten-1">
      <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">
        {items + ' ' + CONSTANTS.MOVIES_FOUND}
      </h6>
    </div>
  </>
)

Results.propTypes = {
  items: PropTypes.number
};

export default Results;