import React, { useState, useEffect } from 'react';

function NuclearReactor() {
  const [power, setPower] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [status, setStatus] = useState('OFF'); // Possible values: OFF, ON, DAMAGED
  const [warningColor, setWarningColor] = useState('green');

  const maxSafeTemperature = 175;
  const criticalTemperature = 275;

  useEffect(() => {
    if (status === 'ON') {
      const temp = power * 1.5;
      setTemperature(temp);
      
      check(temperature);
    }
  }, [power, status]);

  const check = (temp) => {
    try {
      alertOverheating(temp)
      alertDamaged
      
      return true;
    }
    catch (error) {
      if (error instanceof OverheatingError) {
        setStatus('DAMAGED');
        setPower(0);
        setWarningColor('red');
      } else if (error instanceof ArgumentError) {
        setStatus(error.message)
      }
    }
  }

  const alertOverheating = (temp) => {
    if (temp >= criticalTemperature) {
      throw new OverheatingError(temp);
    }
    else if (temp >= maxSafeTemperature) {
      setWarningColor('yellow');
    } else {
      setWarningColor('green');
    }
  }

  const alertDamaged = () => {
    if (status === "DAMAGED") {
      throw new ArgumentError("DAMAGED")
    }
  }

  const handlePowerChange = (e) => {
    setPower(e.target.value);
  };

  const handleOn = () => {
    if (status !== 'DAMAGED') {
      setStatus('ON');
    }
  };

  const handleShutdown = () => {
    if (status !== 'DAMAGED') {
      setPower(0);
      setTemperature(0);
      setWarningColor('green');
      setStatus('OFF');
    }
  };

  const handleRepair = () => {
    if (status === "DAMAGED") {
      setStatus('OFF');
      setPower(0);
      setTemperature(0);
      setWarningColor('green');
    }
  };

  return (
    <div>
      <h1>Nuclear Reactor Control Panel</h1>
      <div>
        Energy Production: {power} MW
        <br />
        Temperature: <span style={{ color: temperature >= maxSafeTemperature ? 'red' : 'black' }}>
          {status === 'DAMAGED' ? 'ERROR: OVERHEATED' : `${temperature}°C`}
        </span>
      </div>
      <div>
        Warning Light: <span style={{ color: warningColor }}>●</span>
      </div>
      <br />
      <input
        type="range"
        min="0"
        max="200"
        value={power}
        onChange={handlePowerChange}
        disabled={status !== 'ON'}
      />
      <br />

      <button onClick={handleOn}>ON</button>
      <button onClick={handleShutdown}>SHUTDOWN</button>
      <button onClick={handleRepair}>REPAIR</button>

      {status === 'DAMAGED' && (
      <p>DAMAGED: REPAIR NEEDED</p>
      )}

    </div>
  );
}

export default NuclearReactor;

export class ArgumentError extends Error {
  constructor(message) {
      super(message);
  }
}

export class OverheatingError extends Error {
  constructor(temp) {
      super();
      this.temperature = temp
  }
}