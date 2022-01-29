import React from 'react';

function Image(props) {
  const srcExists = props.src,
    imgHeight = props.height,
    imgWidth = props.width;
  if (srcExists !== 'spoiler' && imgHeight && imgWidth) {
    return <img src={props.src} alt={props.alt} />;
  }
  return <img src="http://via.placeholder.com/640x360?text=Sneaky+Image" alt="" />;
}

export default Image;
