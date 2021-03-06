import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({coord}) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic29zbG9wZXIiLCJhIjoiY2txOGI4enVtMDNsMjJubHdmdDdvcTI4aSJ9.moBBrAHMGhUfjwpd56eE7Q';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

    useEffect(() => {
      if (map.current) return; 
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 10
      });
    }, [coord, lat, lng]);

   if(coord.lon !== lng && coord.lat !== lat){
        setLng(coord.lon);
        setLat(coord.lat);
      }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
