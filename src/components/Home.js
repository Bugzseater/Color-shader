// Home.js
import React, { useState } from 'react';
import Shader from './Shader';
import Footer from './Footer';

const Home = () => {
  const [color, setColor] = useState('');
  const [shades, setShades] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const generateShades = () => {
    const hex = color.replace(/^#/, ''); // Remove '#' if present
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const allShades = [];
    for (let i = 0; i <= 20; i++) {
      const percent = i / 20;
      const newR = Math.round(r * percent);
      const newG = Math.round(g * percent);
      const newB = Math.round(b * percent);
      const newHex = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
      allShades.push(newHex);
    }

    setShades(allShades);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '80px' }}>Color Shades Generator 🍕</h1>
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center' ,marginBottom:'80px',marginLeft:'150px',padding: '10px 20px', backgroundColor: 'blue',borderRadius:'30px', color: 'white', cursor: 'pointer', fontSize: '16px', width:'80%', height:'300px' }}>
      <input
        type="text"
        placeholder="Enter Hex Color Code"
        value={color}
        onChange={handleColorChange}
        style={{width:'300px', height:'30px', padding: '10px', fontSize: '16px', border: 'none', border: '2px solid #4CAF50', outline: 'none', marginRight: '10px' }}
      />
      <button
        onClick={generateShades}
        style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
      >
        Generate
      </button>
      </div>
      <Shader shades={shades} />
     
    </div>
  );
};

export default Home;
