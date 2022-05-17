import { useState, useEffect } from 'react';
import Select from 'react-select';

interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export default function RegisterEmployerForm({}) {
  const [formData, setFormData] = useState<UserInterface>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  });

  const { firstName, lastName, email, avatar } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((preState) => ({ ...preState, [name]: value }));
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className='container p-5'>
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
          />
        </div>

        <button className='btn btn-primary' type='submit'>
          Register
        </button>
      </form>
    </main>
  );
}
