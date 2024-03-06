import React from 'react';
import my_anim from './assets/my_anim.gif';

const GifContainer = () => {
  return (
    <div className="gif-container">
      <img src={my_anim} alt="Animated GIF" />
    </div>
  );
};

export default GifContainer;
