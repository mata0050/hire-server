import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

import { firestore } from '../../lib/firebase';
import { UserContext } from '../../lib/context';
import {
  UserInterface,
  EmployeeInterface,
} from '../../shared/userInfo.interface';



export default function RegisterEmployeeForm({}) {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState<EmployeeInterface>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    displayName: '',
    role: '',
    busser: false,
    server: false,
    dishwasher: false,
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  });

  const [location, setLocation] = useState(null);
  const [transportMode, setTransportMode] = useState(null);
  const {
    firstName,
    lastName,
    email,
    avatar,
    server,
    busser,
    dishwasher,
    availability: {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    },
  } = formData;

  useEffect(() => {
    if (user) {
      const name = user.displayName.split(' ');

      setFormData((preState) => ({
        ...preState,
        email: user.email,
        firstName: name[0],
        lastName: name[1],
      }));
    }
  }, [user]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === 'false')
      return setFormData((preState) => ({ ...preState, [name]: true }));

    if (value === 'true')
      return setFormData((preState) => ({ ...preState, [name]: false }));

    setFormData((preState) => ({ ...preState, [name]: value }));
  };

  const handleSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((preState) => ({ ...preState, [name]: value }));
  };

  const handleAvailabilityOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (value === 'false')
      return setFormData((preState) => ({
        ...preState,
        availability: { ...preState.availability, [name]: true },
      }));

    if (value === 'true')
      return setFormData((preState) => ({
        ...preState,
        availability: { ...preState.availability, [name]: false },
      }));
  };

  const optionsTransport: any = [
    { value: 'Bus', label: 'Bus' },
    { value: 'Drive', label: 'Drive' },
  ];

  const optionsLocation: any = [
    { value: 'Central Ottawa', label: 'Central Ottawa' },
    { value: 'East End', label: 'East End' },
    { value: 'South End', label: 'South End' },
    { value: 'West End', label: 'West End' },
    { value: 'Gloucester', label: 'Gloucester' },
    { value: 'Kanata', label: 'Kanata' },
    { value: 'Nepean', label: 'Nepean' },
    { value: 'Cumberland', label: 'Cumberland' },
    { value: 'Goulbourn', label: 'Goulbourn' },
    { value: 'Osgoode Township', label: 'Osgoode Township' },
    { value: 'Rideau', label: 'Rideau' },
    { value: 'West Carleton', label: 'West Carleton' },
  ];

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDoc = firestore.doc(`users/${user?.uid}`);

    const batch = firestore.batch();
    batch.set(userDoc, {
      firstName,
      lastName,
      displayName: user?.displayName,
      email: user?.email,
      avatar: user?.photoURL,
      role: 'Employee',
      busser,
      server,
      dishwasher,
      availability: {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      },
    });
    await batch.commit();
    router.push('/dashboard');
  };



  return (
    <main className='container p-5'>
      <form onSubmit={onHandleSubmit} className='p-5 border rounded-5'>
        <h3 className='mb-4'>Register As Employee</h3>

        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            className='form-control'
            id='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleOnChange}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            className='form-control'
            id='lastName'
            placeholder='First Name'
            value={lastName}
            onChange={handleOnChange}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={email}
            onChange={handleOnChange}
            disabled
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>
            Check the type of work your want to do?
          </label>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='server'
              id='server'
              value={server.toString()}
              onChange={handleOnChange}
            />
            <label className='form-check-label' htmlFor='server'>
              If you want to work as a Server?
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='busser'
              id='busser'
              value={busser.toString()}
              onChange={handleOnChange}
            />
            <label className='form-check-label' htmlFor='busser'>
              If you want to work as a Busser?
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='dishwasher'
              id='dishwasher'
              value={dishwasher.toString()}
              onChange={handleOnChange}
            />
            <label className='form-check-label' htmlFor='dishwasher'>
              If you want to work as a Dishwasher?
            </label>
          </div>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='transportMode' className='form-label'>
            Select your transport?
          </label>

          <Select
            options={optionsTransport}
            aria-label='Select your transport'
            instanceId='transportMode'
            value={transportMode}
            onChange={setTransportMode}
          />
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='location' className='form-label'>
            Select the are you stay?
          </label>
          <Select
            options={optionsLocation}
            aria-label='Select the are you stay'
            instanceId='location'
            value={location}
            onChange={setLocation}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>What is your availability?</label>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='monday'
              id='monday'
              value={monday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='monday'>
              Monday
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='tuesday'
              id='tuesday'
              value={tuesday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='tuesday'>
              Tuesday
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='wednesday'
              id='wednesday'
              value={wednesday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='wednesday'>
              Wednesday
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='thursday'
              id='thursday'
              value={thursday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='thursday'>
              Thursday
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='friday'
              id='friday'
              value={friday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='friday'>
              Friday
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='saturday'
              id='saturday'
              value={saturday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='saturday'>
              Saturday
            </label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              name='sunday'
              id='sunday'
              value={sunday?.toString()}
              onChange={handleAvailabilityOnChange}
            />
            <label className='form-check-label' htmlFor='sunday'>
              Sunday
            </label>
          </div>
        </div>

        <button className='btn btn-primary' type='submit'>
          Register
        </button>
      </form>
    </main>
  );
}
