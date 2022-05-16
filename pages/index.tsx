import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
