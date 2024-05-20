"use client";
import { Address } from "@/schemas/address";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
L.Icon.Default.imagePath = "/";

const Map = ({ address, className }: { address?: Address; className?: string }) => {
  const DynamicMapComponent = ({ address }: { address: Address }) => {
    const map = useMap();
    if (address) {
      map.setView([address.latitude, address.longitude], map.getZoom());
    }
    return null;
  };
  return (
    address && (
      <MapContainer
        center={[address.latitude, address.longitude]}
        zoom={17}
        scrollWheelZoom={false}
        dragging={false}
        className={className}
      >
        <DynamicMapComponent address={address} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[address.latitude, address.longitude]}>
          <Popup>{address.name}</Popup>
        </Marker>
      </MapContainer>
    )
  );
};
export default Map;
