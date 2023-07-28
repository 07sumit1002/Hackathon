import React from 'react';
import {
  MapContainer,
  TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const center= [23.179300, 75.784912]

export default function rum() {
  return (
    <div>
      <MapContainer
        center={center}
        zoom={10}
        style={{
          width :'50vw',
          height: '50vh',
          borderRadius:'20px',
          zIndex:'0'
        }}
      >
        <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=lLdfBeCLJtdeIqXHIUXO'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
      </MapContainer>
      
    </div>
  )
}


