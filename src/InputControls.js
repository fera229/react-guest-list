import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';

export default function InputControls() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        style={{
          height: '50vh',
          width: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f4f4f4',
          borderRadius: '20px',
        }}
      >
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
