import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './GuestList.module.scss';
import InputControls from './InputControls';

export default function GuestList() {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    const newGuest = { ...guest, id: uuidv4(), attending: false };
    setGuests([...guests, newGuest]);

    // console.log(guest.id);
  };

  const toggleAttendance = (id) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, attending: !guest.attending } : guest,
      ),
    );
  };
  const deleteGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };
  return (
    <div>
      <h1>Guest List</h1>

      <InputControls onAddGuest={addGuest} />
      <ul>
        {guests.map((guest) => (
          <div key={`guest-${guest.id}`} data-test-id="guest">
            <li key={`guest-${guest.id}`}>
              {guest.firstName} {guest.lastName} -
              {guest.attending ? 'Attending ' : 'Not attending '}
              <input
                type="checkbox"
                checked={guest.attending}
                onChange={() => toggleAttendance(guest.id)}
                aria-label={`${guest.firstName} ${guest.lastName} ${guest.attending ? 'attending' : 'not attending'} `}
              />
              <button
                onClick={() => deleteGuest(guest.id)}
                aria-label={`Remove ${guest.firstName} ${guest.lastName}`}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
