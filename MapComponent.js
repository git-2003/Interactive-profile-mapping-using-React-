import React from 'react';

const MapComponent = ({ address }) => {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={{ marginTop: '20px' }}>
      <iframe
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
