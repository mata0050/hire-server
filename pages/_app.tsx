import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
