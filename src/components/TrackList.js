import React from 'react';
import '../App.css';

const TrackList = (props) => {
  return(
    <div className="container">
      <h4>This is the TrackList component.</h4>
      <h4>{props.trackListing[0]}</h4>
      <h4>{props.trackListing[1]}</h4>
    </div>
  );
}

export default TrackList;
