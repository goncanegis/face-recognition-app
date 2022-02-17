import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from '../../assets/artificial-intelligence.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty className="tilty br2 shadow-2" glare scale={1.05} maxGlare={0.5}>
        <div className="inner pa3">
          <img src={brain} alt="logo" />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
