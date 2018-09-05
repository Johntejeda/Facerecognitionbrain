import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (<div className='ma4 mt0'>
    <Tilt className="Tilt br3 shadow-3" options={{
        max: 55
      }} style={{
        height: 150,
        width: 150
      }}>
      <div className="Tilt-inner p5">
        <img style={{
            paddingTop: '20px'
          }} alt='logo' Src={brain}/>
      </div>
    </Tilt>

  </div>);
}

export default Logo;
