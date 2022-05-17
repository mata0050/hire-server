import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { UserContextState } from '../shared/userInfo.interface';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const userData  = useUserData();
  // const { userProfile } = userData;
  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
      <Footer />
    </UserContext.Provider>
  );
}

export default MyApp;
