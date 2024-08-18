import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/circleButton.css';

const CircleButton = ({ onClick,icon }) => {
  return (
    <button className="circle-button" onClick={onClick}>
      <FontAwesomeIcon className='icon' icon={icon} size="2x" />
    </button>
  );
};

export default CircleButton;