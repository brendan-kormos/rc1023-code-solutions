import { useState } from 'react';

export default function ToggleSwitch() {
  const [toggled, setToggle] = useState(true);
  const label = toggled ? 'ON' : 'OFF';

  return (
    <>
      <div
        className={`toggle-switch ${toggled ? 'toggle-switch-is-on' : ''}`}
        onClick={() => setToggle(!toggled)}>
        <div
          className={`toggle-slider ${
            toggled ? 'toggle-slider-is-on' : ''
          }`}></div>
      </div>
      <span>{label}</span>
    </>
  );
}
