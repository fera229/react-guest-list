import './styles.css';
// import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';

export default function InputControls({ onAddGuest }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (firstName.trim() && lastName.trim()) {
        onAddGuest({ firstName, lastName });
        setFirstName('');
        setLastName('');
      }
    }
  };

  return (
    <main>
      <h1>Guest List</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          First name: <br />
          <input
            className="input"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
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
          />
        </label>
      </form>
    </main>
  );
}
