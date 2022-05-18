import { useEffect, useState } from 'react';
import { auth, firestore, dataToJSON } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserInterface } from '../shared/userInfo.interface';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUserProfile(doc.data());
      });
    } else {
      setUserProfile(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, userProfile };
}

