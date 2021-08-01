import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from '@material-ui/icons';
import axios from "axios";

import "./app.css"

function App() {
  const [pins, setPins] = useState([]);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 48,
    longitude: 10,
    zoom: 4
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        setPins(allPins.data);
      } catch (e) {
        console.log(e);
      }
    };
    getPins();
  }, []);

  return (
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
    onViewportChange={nextViewport => setViewport(nextViewport)}
    mapStyle="mapbox://styles/rocknsoph/ckrtnkv1c8qlk19o1d6j01kkx"
    >

      {pins.map((p) => (
            <>
              <Marker
              latitude={p.lat}
              longitude={p.long}
            >
              <Room 
                style={{
                  fontSize: viewport.zoom * 7,
                  color: "#FF3864",
                }}
              />
            </Marker>
        <Popup
            latitude={p.lat}
            longitude={p.long}
            closeButton={true}
            closeOnClick={false}
            anchor="bottom"
            >
            <div className="card">
            <label>Place</label>
              <h4 className="place">{p.title}</h4>
              <label>Review</label>
              <p className="desc">{p.desc}</p>
              <label>Rating</label>
              <div className="stars">
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
              </div>
              <label>Information</label>
              <span className="username">Created by <b>{p.username}</b></span>
              <span className="date">3 hours ago</span>

            </div>
            </Popup>
                    </>
          ))}

    </ReactMapGL>
  );
}

export default App;
