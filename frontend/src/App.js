import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from '@material-ui/icons';

import "./app.css"

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 48,
    longitude: 10,
    zoom: 4
  });

  return (
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
    onViewportChange={nextViewport => setViewport(nextViewport)}
    mapStyle="mapbox://styles/rocknsoph/ckrtnkv1c8qlk19o1d6j01kkx"
    >
      <Marker
      latitude={43.6333}
      longitude={5.1}
      >
        <Room 
        style={{
          fontSize: viewport.zoom * 7,
          color: "#FF3864",
        }}
        />
      </Marker>
      <Popup
          latitude={43.6333}
          longitude={5.1}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom"
          >
          <div className="card">
          <label>Place</label>
            <h4 className="place">Salon de Provence</h4>
            <label>Review</label>
            <p className="desc">My text why I like or dislike it</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Mélanie</b></span>
            <span className="date">3 hours ago</span>

          </div>
          </Popup>
    </ReactMapGL>
  );
}

export default App;
