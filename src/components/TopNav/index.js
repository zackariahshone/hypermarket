/**
 *
 * TopNav
 *
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TopNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">HYPER</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Link to ="/brandBanner">Home</Link> */}
          <Nav.Link href="/brandbanners">Brand Banners</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

TopNav.propTypes = {};

export default TopNav;
