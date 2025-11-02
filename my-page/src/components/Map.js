import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Google Map
    const initMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 16.4637, lng: 107.5909 }, // Hue City coordinates
          zoom: 13,
          styles: [
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            }
          ]
        });

        // Add marker for location
        new window.google.maps.Marker({
          position: { lat: 16.4637, lng: 107.5909 },
          map: map,
          title: 'Hue City, Vietnam'
        });
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly';
      script.async = true;
      script.defer = true;
      
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Cleanup if needed
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div 
      id="map" 
      className="fh5co-map" 
      ref={mapRef}
      style={{ height: '400px', width: '100%' }}
    ></div>
  );
};

export default Map;