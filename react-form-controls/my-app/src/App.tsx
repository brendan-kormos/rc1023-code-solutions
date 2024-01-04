import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';
import './App.css';

function App() {
  return (
    <>
      Uncontrolled
      <RegistrationFormUncontrolled />
      Controlled
      <RegistrationFormControlled />
    </>
  );
}

export default App;
