import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Room } from '@material-ui/icons';

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
    </ReactMapGL>
  );
}

export default App;
