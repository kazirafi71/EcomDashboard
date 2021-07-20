import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./LocationMap.css";

const LocationMap = () => {
  const position1 = [61.505, -0.02];
  const position2 = [47.505, -0.17];
  const position3 = [30.505, -0.05];
  const position4 = [21.505, -0.03];
  return (
    <div className="map">
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position2}
        zoom={1}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position1}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position2}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position3}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position4}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
