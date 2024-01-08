import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function isPasswordCorrect() {
    return password.length >= 8 && password.length <= 20;
  }
  function handleInputChanged(event) {
    const value = event.target.value;
    console.log(value);
    setPassword(value);
  }

  return (
    <div style={{ width: '500px' }}>
      <div className="row g-3 align-items-center">
        <label htmlFor="inputPassword6" className="col-form-label">
          Password
        </label>
        <div></div>
        <input
          value={password}
          onChange={handleInputChanged}
          type="password"
          id="inputPassword6"
          className={`form-control ${
            isPasswordCorrect() ? 'is-valid' : 'is-invalid'
          }`}
          aria-describedby="passwordHelpInline"
        />
        {!isPasswordCorrect() && (
          <span
            style={{ color: 'red' }}
            id="passwordHelpInline"
            className="form-text">
            Must be 8-20 characters long.
          </span>
        )}
      </div>
    </div>
  );
}
