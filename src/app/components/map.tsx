"use client";

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

//@ts-ignore
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

interface MapRef {
  current: L.Map | null;
}

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map: MapRef = useRef(null);
  const center = { lng: 13.338414, lat: 52.507932 };
  const [zoom] = useState(12);
	const key = 'TDQSypemJpAPMEv7cSmM';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    if (!mapContainer.current) return;

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
			maxZoom: 13,
			minZoom: 11,
    });

    // Create a MapTiler Layer inside Leaflet
    const mtLayer = new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
			style: "https://api.maptiler.com/maps/landscape/style.json",
      apiKey: key
    }).addTo(map.current);
  }, [center.lng, center.lat, zoom]);

  return (
    <div className="relative w-full h-[100vh]">
      <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  );
};

export default Map;
