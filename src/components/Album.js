import React from 'react';
import '../App.css';
// import components
import AlbumArt from './AlbumArt.js';
import TrackList from './TrackList.js';


function Album(props) {
  return(
    <div className="container">
      <h3>Album: {props.albumName}</h3>
      <AlbumArt albumArt={props.albumArt}/>
      <TrackList trackListing={props.trackListing}/>
    </div>
  );
}

export default Album;
