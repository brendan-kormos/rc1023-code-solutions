import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const target = event.currentTarget;
    const formData = new FormData(target);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log('username', username, 'password', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="username" placeholder="Username"></input>
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="Password"></input>
      </label>
      <label>
        <button>Sign Up</button>
      </label>
    </form>
  );
}
