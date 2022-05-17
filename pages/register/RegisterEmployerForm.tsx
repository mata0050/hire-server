import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

import { firestore } from '../../lib/firebase';
import { UserContext } from '../../lib/context';
import {
  UserInterface,
} from '../../shared/userInfo.interface';



export default function RegisterEmployerForm({}) {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState<UserInterface>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    displayName: '',
    role: '',
  });

  const { firstName, lastName, email, avatar, displayName, role } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((preState) => ({ ...preState, [name]: value }));
  };

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

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDoc = firestore.doc(`users/${user.uid}`);

    const batch = firestore.batch();
    batch.set(userDoc, {
      firstName,
      lastName,
      displayName: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      role: 'Employer',
    });
    await batch.commit();
    router.push('/dashboard');
  };

  return (
    <div className='container p-5'>
      <form onSubmit={onHandleSubmit} className='p-5 border rounded-5'>
        <h3 className='mb-4'>Register As Employer</h3>

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
            required
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
            required
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

        <button className='btn btn-primary' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
