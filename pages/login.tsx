import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { firestore } from '../lib/firebase';
import { UserContext } from '../lib/context';

import SignInForm from '../components/SignInForm';

export default function Login({}) {
  const router = useRouter();
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


  return (
    <main className='mt-5 pt-5 mb-5 pb-5'>
      <div className='pt-5 pb-5'>
        <SignInForm />
      </div>
    </main>
  );
}
