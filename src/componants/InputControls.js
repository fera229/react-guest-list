import '../styles.css';
// import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';

export default function InputControls({ onAddGuest }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (firstName.trim() && lastName.trim()) {
        onAddGuest({ firstName: firstName.trim(), lastName: lastName.trim() });
        setFirstName('');
        setLastName('');
      }
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={(event) => event.preventDefault()} className="form">
        <h1>Guest List</h1>
        <label>
          First name: <br />
          <input
            className="input"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            onKeyDown={handleKeyPress}
          />
        </label>
        <br />
        <label>
          Last name:
          <br />
          <input
            className="input"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            onKeyDown={handleKeyPress}
          />
        </label>
      </form>
    </div>
  );
}
