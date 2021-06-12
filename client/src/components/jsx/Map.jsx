import "../css/Map.css"
import { useEffect } from "react";

//OpenLayers Imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Map = () => {


    return (
        <div id="map" className="map-container">
         {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer> */}
        </div>
    )
}

export default Map
