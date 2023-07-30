import React from 'react';

const CustomAlert = ({ options, onClose }) => {
  return (
    <div className="custom-alert">
      <h2>Select an option:</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onClose(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomAlert;

