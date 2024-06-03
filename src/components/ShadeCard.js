// ShadeCard.js
import React from 'react';

const ShadeCard = ({ shade }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shade);
    alert(`Color code ${shade} copied to clipboard!`);
  };

  return (
    <div
      style={{
        backgroundColor: shade,
        width: '300px',
        height: '300px',
        margin: '5px',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer', // Add cursor pointer
      }}
      onClick={copyToClipboard} // Add onClick event to copy color code
    >
      <p style={{ color: shadeBrightness(shade) > 128 ? '#333' : '#fff', fontSize: '18px' }}>{shade}</p>
    </div>
  );
};

export default ShadeCard;

// Helper function to determine brightness of shade
const shadeBrightness = (shade) => {
  const hex = shade.replace(/^#/, ''); // Remove '#' if present
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
};
