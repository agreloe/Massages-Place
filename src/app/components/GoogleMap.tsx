'use client';

import React, { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 42.878213, // Latitude for Masajes Compostela
  lng: -8.544844, // Longitude for Masajes Compostela
};

const MyGoogleMap: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    const marker = new google.maps.Marker({
      position: center,
      map,
      title: 'Masajes Compostela',
    });

    markerRef.current = marker;
  }, []);

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }
    mapRef.current = null;
    markerRef.current = null;
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return <div>Error loading maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  );
};

export default MyGoogleMap;
