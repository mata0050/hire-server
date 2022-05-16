import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <button className='btn btn-primary'>hello</button>
      <Loader show={true} />
      <Navbar/>
    </>
  );
};

export default Home;
