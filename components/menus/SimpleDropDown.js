import React, { Component, useEffect } from "react";
import { useRouter } from 'next/router';
import  Link from 'next/link';

const selectStyle = { width: '15rem', opacity: 0, position: 'absolute', padding: '.2rem'};
const selectButtonStyle = { backgroundColor: 'transparent', border: '0px' };
const selectOptionStyle = { lineHeight: '1rem', fontSize: '1.5rem', padding: '100px' };
const optionStyle = {lineHeight: '5rem', fontSize: '1.5rem' }

export function SimpleDropDown () {
  const router = useRouter();

  const selectHandler = (e) => {
    console.log(">>>> Inside select handler")
    console.log(e.target.value);
    router.push({ pathname: 'resources/about-us' })
    // return <Link href="resources/about-us">About Us</Link>
  }

  return (
    <div style={{width: '21rem'}}>
      <select style={selectStyle} onChange={selectHandler}> 
        <option style={selectOptionStyle} value="/resources/about-us"></option> 
        <option style={selectOptionStyle} value="/resources/about-us">About Us</option> 
        <option style={selectOptionStyle} value="/resources/route2">Route 2</option> 
        <option style={selectOptionStyle} value="/resources/route3">Route 3</option> 
        <option style={selectOptionStyle} value="/resources/route4">Route 4</option> 
      </select>
      <button style={selectButtonStyle}>Resources</button>
    </div>
  )
}