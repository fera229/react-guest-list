import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputControls from './InputControls';

export default function GuestList() {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    const newGuest = { ...guest, id: uuidv4(), notAttending: true };
    setGuests([...guests, newGuest]);

    console.log(guest.id);
  };

  const toggleAttendance = (id) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id
          ? { ...guest, notAttending: !guest.notAttending }
          : guest,
      ),
    );
  };
  return (
    <div>
      <InputControls onAddGuest={addGuest} />
      <ul>
        {guests.map((guest) => (
          <li key={`user-${guest.id}`}>
            {guest.firstName} {guest.lastName} -
            {guest.notAttending ? 'Not Attending ' : 'Attending '}
            <input
              type="checkbox"
              checked={!guest.notAttending}
              onChange={() => toggleAttendance(guest.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
