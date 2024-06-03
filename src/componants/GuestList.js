import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './GuestList.module.scss';
import InputControls from './InputControls';

const baseUrl = 'https://5kq7z3-4000.csb.app';

export default function GuestList() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGuests() {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuests(allGuests);
      console.log('data fetched');

      setIsLoading(false);
    }
    fetchGuests().catch((error) => console.log(error));
  }, []);

  const addGuest = (guest) => {
    const newGuest = { ...guest, attending: false };
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
      <InputControls onAddGuest={addGuest} />
      {isLoading ? <h1> Loading ...</h1> : null}
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
