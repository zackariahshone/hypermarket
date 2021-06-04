/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

  import  API  from '../../API/CarAPI'

import React from 'react';
import HyperButton from '../../components/HyperButton';
export default function HomePage() {

  console.log(API.findcars().then((data)=>{
    console.log(data);
  }));

  return (
    <>
      <HyperButton />
    </>
  );
}
