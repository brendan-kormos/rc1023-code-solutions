import { FormEvent, useState, ChangeEvent } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('username', username, 'password', password);
  }

  function handleOnUsernameChange(event: ChangeEvent<HTMLInputElement>): void {
    setUsername(event.currentTarget.value);
  }
  function handleOnPasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={handleOnUsernameChange}
          type="text"
          name="username"
          placeholder="Username"></input>
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={handleOnPasswordChange}
          type="password"
          name="password"
          placeholder="Password"></input>
      </label>
      <label>
        <button>Sign Up</button>
      </label>
    </form>
  );
}
