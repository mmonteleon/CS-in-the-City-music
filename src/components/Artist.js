import React from 'react';
import '../App.css';
// import components
import Album from './Album.js';

function Artist(props) {
  return(
    <div className="container">
      <h2>Artist: {props.artistName}</h2>
      <Album albumName = {props.albumName} trackListing = {props.trackListing} albumArt={props.albumArt}/>
    </div>
  );
}

export default Artist;
