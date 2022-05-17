import { FaGoogle } from 'react-icons/fa';
import { auth, googleAuthProvider } from '../lib/firebase';

export default function SignInForm({ }) {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <div className='card w-50 mx-auto text-center mb-5'>
      <h2 className='card-header text-warning bg-dark'>Sign In</h2>
      <div className='card-body '>
        <button
          className='btn btn-primary my-4 btn-dark'
          onClick={signInWithGoogle}
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className='card-text mt-3' style={{ fontSize: '.7rem' }}>
          By signing in, you agree to the Terms of Use and Privacy Policy
        </p>
      </div>
    </div>
  );
}
