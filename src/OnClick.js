import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function OnClick() {
  const [temperatureValue, settemperatureValue] = useState(10);
  const [temperatureColor, settemperatureColor] = useState('cold');

  console.log(temperatureColor);

  useEffect(() => {
    document.title = 'Temperature = ' + temperatureValue + '°C';
  });

  useEffect(() => {
    settemperatureColor(temperatureValue >= 20 ? 'hot' : 'cold');
  });

  function changes(temp) {
    if (temp >= 20) {
      settemperatureColor('hot');
      console.log('pasamos por hot');
    } else {
      settemperatureColor('cold');
      console.log('estamos en frio');
    }
    return temperatureColor;
  }

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className='button-container'>
        <button
          onClick={() =>
            settemperatureValue(
              temperatureValue === 30 ? 30 : temperatureValue + 1
            )
          }
        >
          +
        </button>
        <button
          onClick={() =>
            settemperatureValue(
              temperatureValue === 0 ? 0 : temperatureValue - 1
            )
          }
        >
          -
        </button>
      </div>
    </div>
  );
}
