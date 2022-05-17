import { useState } from 'react';
import RegisterAs from './RegisterAs';
import RegisterEmployeeForm from './RegisterEmployeeForm';
import RegisterEmployerForm from './RegisterEmployerForm';

export default function Register({}) {
  const [showEmployerForm, setShowEmployerForm] = useState<boolean>(false);
  const [showEmployeeForm, setShowEmployeeForm] = useState<boolean>(false);

  const onShowEmployerForm = () => {
    setShowEmployerForm((preState) => !preState);
    setShowEmployeeForm(false);
  };

  const onShowEmployeeForm = () => {
    setShowEmployeeForm((preState) => !preState);
    setShowEmployerForm(false);
  };

  return (
    <main className=' mt-5 py-5 mb-5'>
      <div className='container mt-5 mb-5 pb-5'>
        <RegisterAs
          onShowEmployerForm={onShowEmployerForm}
          onShowEmployeeForm={onShowEmployeeForm}
        />
        {showEmployerForm && <RegisterEmployeeForm />}
        {showEmployeeForm && <RegisterEmployerForm />}
        {!showEmployeeForm && <div className='pb-5' />}
      </div>
    </main>
  );
}
