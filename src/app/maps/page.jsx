"use client";
import {
  Marker,
  Popup,
  TileLayer,
  MapContainer,
  useMapEvents,
} from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

function Home() {
  const [position, setPosition] = useState({
    lat: -6.2237791,
    lng: 106,
  });
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div>
      <MapContainer
        // key={`${location.latitude}-${location.longitude}`} // Add a unique key
        center={position}
        zoom={15}
        style={{ width: "100%", height: "500px" }}>
        <TileLayer
          // url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          // url="//mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
          url="//mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          attribution="&copy; Google"

          // attribution={false}
          // attributionControl={false}
          // id="mapbox/streets-v12"
          // accessToken="pk.eyJ1IjoiZmlxcmlhY2htYWRhIiwiYSI6ImNsb3FudDFxcTBsdDkyaW82Z2xlY21jcWwifQ.QsjnuVdQkXAkL_CNnh8bWw"
        />
        <LocationMarker />
      </MapContainer>
      {JSON.stringify(position)}
    </div>
  );
}

export default Home;
