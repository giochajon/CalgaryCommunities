import React, { useEffect } from "react";
import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapRecenterer({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

// Vite bundlers don't auto-resolve Leaflet's default marker assets
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

const CALGARY_TOWER = [51.044270, -114.062019];
const containerStyle = { width: "300px", height: "300px" };

const Smap = (props) => {
  const center = props.centre
    ? [props.centre.lat, props.centre.lng]
    : CALGARY_TOWER;

  const path = props.flightpath
    ? props.flightpath.map((p) => [p.lat, p.lng])
    : [];

  return (
    <div className="mapborder" style={containerStyle}>
      <MapContainer center={center} zoom={12} style={{ width: "100%", height: "100%" }}>
        <MapRecenterer center={center} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {props.isMarkerShown && <Marker position={CALGARY_TOWER} />}
        {path.length > 0 && (
          <Polyline positions={path} pathOptions={{ color: "#FF0000", opacity: 1, weight: 2 }} />
        )}
      </MapContainer>
    </div>
  );
};

export default Smap;
