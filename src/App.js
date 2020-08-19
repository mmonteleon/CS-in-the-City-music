import React from 'react';
import './App.css';
// import components
import Artist from './components/Artist.js';

function App() {
  return (
    <div className="container">
      <h1>This is the App.</h1>
      <Artist 
        artistName="Beyonce" 
        albumName="The Lion King: The Gift"
        trackListing={["Bigger", "Find Your Way Back"]}
        albumArt = "https://upload.wikimedia.org/wikipedia/en/1/11/The_Lion_King_The_Gift.png"
      />

      <Artist 
        artistName = "Eddie Gizzard and the Lizard Wizard" 
        albumName="Flying Microtonal Banana"
        trackListing={["Rattlensake", "Melting"]}
        albumArt = "https://assets.bigcartel.com/product_images/243656495/flying_microtonal_banana_stickers.jpg"
      />
    </div>
  );
}

export default App;
