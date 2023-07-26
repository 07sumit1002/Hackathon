// import React from 'react';
// import {
//   MapContainer,
//   TileLayer,
//   Polygon
// } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { statesData } from './data';

// const center = [40.63463151377654, -97.89969605983609];


// const rum = () => {
//   return (
//     <div>
//         <MapContainer
//       center={center}
//       zoom={10}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <TileLayer
//         url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=lLdfBeCLJtdeIqXHIUXO"
//         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//       />
//       {
//         statesData.features.map((state) => {
//           const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

//           return (<Polygon
//             pathOptions={{
//               fillColor: '#FD8D3C',
//               fillOpacity: 0.7,
//               weight: 2,
//               opacity: 1,
//               dashArray: 3,
//               color: 'white'
//             }}
//             positions={coordinates}
//             eventHandlers={{
//               mouseover: (e) => {
//                 const layer = e.target;
//                 layer.setStyle({
//                   dashArray: "",
//                   fillColor: "#BD0026",
//                   fillOpacity: 0.7,
//                   weight: 2,
//                   opacity: 1,
//                   color: "white",
//                 })
//               },
//               mouseout: (e) => {
//                 const layer = e.target;
//                 layer.setStyle({
//                   fillOpacity: 0.7,
//                   weight: 2,
//                   dashArray: "3",
//                   color: 'white',
//                   fillColor: '#FD8D3C'
//                 });
//               },
//               click: (e) => {

//               }
//             }}
//           />)
//         })
//       }
//     </MapContainer>    
//     </div>
//   )
// }

// export default rum


// import React from 'react';
// import Map, {NavigationControl} from 'react-map-gl';
// // import Navbar from './components/navbar.js';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';
// // import './App.css';
// const rum = () => {
//   return (
//     <div className="App">
//       {/* <Navbar/> */}
//       <Map mapLib={maplibregl} 
//         initialViewState={{
//           longitude: 75.5652,
//           latitude: 26.8429,
//           zoom: 10
//         }}
//         style={{width: "100%", height: " calc(100vh - 77px)"}}
//         mapStyle="https://api.maptiler.com/maps/streets/style.json?key=lLdfBeCLJtdeIqXHIUXO"
//       >
//         <NavigationControl position="top-left" />
//       </Map>
//     </div>
//   )
// }

// export default rum









// import React, { useState } from 'react';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
//   Annotation,
//   ZoomableGroup,
// } from 'react-simple-maps';
// import ReactTooltip from 'react-tooltip';
// // import 'react-simple-maps/lib/style.css'; // Import the CSS file for react-simple-maps
// import 'react-tooltip/dist/react-tooltip.css'; // Import the CSS file for react-tooltip

// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// export default function rum() {
//   return (
//     <div style={{
//       width: '100%',
//       height: '80vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }}>
//       <h1>Let's build some cool maps!</h1>
//       <div style={{
//         width:'1400px',
//         borderStyle:'double'
//       }}>
//         <ComposableMap data-tip="">
//           <Geographies geography={geoUrl}>
//             {({ geographies}) =>
//               geographies.map((geo) =>(
//                 <Geography
//                 key={geo.rsmkey}
//                 geography={geo}/>
//               ))

//             }
//           </Geographies>
//         </ComposableMap>
//       </div>

//     </div>
//   )
// }




























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


