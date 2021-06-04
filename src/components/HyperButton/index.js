/**
 *
 * HyperButton
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HyperButton() {
  return (
    <div>
      <div className="hyperContainer">
        <div className="hyperButton">
          <Link to="/brandbanners">
            {' '}
            <h1 className="title"> Hyper Marketing </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

HyperButton.propTypes = {};

export default HyperButton;
