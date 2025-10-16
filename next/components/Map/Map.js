"use client";

import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { GeoJSON } from 'react-leaflet/GeoJSON'
import "leaflet/dist/leaflet.css";
import LegendControl from "@/components/Map/LegendControl";
import stateGeoJsonData from "@/components/Data/stateGeoJsonData"
import { landmassStyle, densityStyle, highlightFeature } from './MapStyleUtils.js'

export default function Map({ densityOrLandmass }) {
  const densityRef = useRef();
  const landmassRef = useRef();

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  }

  function resetHighlight(e) {
    if (densityRef.current) densityRef.current.resetStyle(e.target);
    if (landmassRef.current) landmassRef.current.resetStyle(e.target);
  }

  return (
    <MapContainer center={[37.8, -96]} zoom={4} minZoom={3} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {densityOrLandmass === 'landmass' && <GeoJSON data={stateGeoJsonData} style={landmassStyle} ref={landmassRef} onEachFeature={onEachFeature} />}
      {densityOrLandmass === 'density' && <GeoJSON data={stateGeoJsonData} style={densityStyle} ref={densityRef} onEachFeature={onEachFeature} />}
      <LegendControl densityOrLandmass={densityOrLandmass} />
    </MapContainer>
  );
}
