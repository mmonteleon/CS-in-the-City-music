import React from 'react';
import '../App.css';

function AlbumArt(props) {
  return(
    <div className="container">
      <h4>This is the AlbumArt component.</h4>
      <img src={props.albumArt} width="200px" alt="album art"/>
    </div>
  );
}

export default AlbumArt;
