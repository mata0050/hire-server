import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../../lib/context';
import { firestore } from '../../lib/firebase';

import SignInForm from '../../components/SignInForm';
import RegisterAs from './RegisterAs';
import RegisterEmployeeForm from './RegisterEmployeeForm';
import RegisterEmployerForm from './RegisterEmployerForm';

export default function Register({}) {
  const router = useRouter();
  const [showEmployerForm, setShowEmployerForm] = useState<boolean>(false);
  const [showEmployeeForm, setShowEmployeeForm] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getFindUser = async () => {
      if(!user) return
      const ref = firestore.doc(`users/${user.uid}`);
      const { exists } = await ref.get();

      if (exists) {
        router.push('/dashboard');
      }
    };
    getFindUser();
  }, [router, user]);

 

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
        {user ? (
          <RegisterAs
            onShowEmployerForm={onShowEmployerForm}
            onShowEmployeeForm={onShowEmployeeForm}
          />
        ) : (
          <SignInForm />
        )}

        {showEmployerForm && <RegisterEmployeeForm />}
        {showEmployeeForm && <RegisterEmployerForm />}
        {!showEmployeeForm && <div className='pb-5 mb-5'></div>}
      </div>
    </main>
  );
}
