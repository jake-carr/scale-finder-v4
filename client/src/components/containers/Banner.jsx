import React from 'react';
import CircularButton from '../interactive/CircularButton.jsx';

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <CircularButton title="randomize" />
        <CircularButton title="reset" />
      </div>
      <div className="banner-title">Guitar Scale Finder</div>
      <CircularButton title="theme" />
    </div>
  );
}
