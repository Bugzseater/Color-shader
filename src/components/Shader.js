// Shader.js
import React from 'react';
import ShadeCard from './ShadeCard';

const Shader = ({ shades }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {/* Display light shades */}
      <div>
        <h2 style={{ marginBottom: '10px',color:'yellow' }}>Light Shades</h2>
        <p style={{ color: 'white', fontSize: '14px', marginBottom: '20px' }}>May produce unexpected results if the initial color is already very light.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {shades.slice(5, 10).map((shade, index) => (
            <ShadeCard key={index} shade={shade} />
          ))}
        </div>
      </div>

      {/* Display dark shades */}
      <div style={{ marginTop: '40px', marginBottom:'40px' }}>
        <h2 style={{ marginBottom: '10px', color:'yellow' }}>Dark Shades</h2>
        <p style={{ color: 'white', fontSize: '14px', marginBottom: '20px' }}>May produce unexpected results if the initial color is already very dark.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {shades.slice(0, 5).map((shade, index) => (
            <ShadeCard key={index} shade={shade} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shader;
