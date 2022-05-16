/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import styles from '../styles/Home.module.scss';
import CardInterface from '../shared/card.interface';
import CardComponent from '../components/Card';
import FAQ from '../components/FAQ';

const cardInfo: CardInterface[] = [
  {
    id: '1',
    imageUrl: '/images/girl-server.png',
    heading: 'Hire Server',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?',
    link: '/hire-server',
  },
  {
    id: '2',
    heading: 'Hire Busser',
    imageUrl: '/images/guy-server-2.png',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?',
    link: '/hire-busser',
  },
  {
    id: '3',
    heading: 'Hire Dishwasher',
    imageUrl: '/images/girl-server-2.png',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?',
    link: '/hire-dishwasher',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <section className='bg-dark text-light mt-5  p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1 className='col-12 col-lg-5'>
                <Logo />
                is not an agency.
              </h1>
              <p className='lead my-4'>
                <Logo />
                is an on-demand platform that digitally connects skilled workers
                with shifts in healthcare, hospitality, and general labour.
              </p>

              <p className='lead my-4'>
                Using our platform, the staff decide and receive 100% of their
                hourly rate. Hire Server adds on a small fee, starting at 25%,
                for the timely, uncomplicated service.
              </p>

              <button className='btn btn-primary btn-lg mt-2'>
                Hire A Team Member
              </button>
            </div>

            <div className='w-50'>
              <img
                className='img-fluid d-none d-lg-block'
                src='/images/guy-server.png'
                alt='server'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Boxes */}
      <section className='p-5 mt-5'>
        <div className='container'>
          <div className='row text-center g-4'>
            {cardInfo.map((card) => (
              <div className='col-md' key={card.id}>
                <CardComponent
                  id={card.id}
                  heading={card.heading}
                  content={card.content}
                  link={card.link}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Learn more */}

    <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src="/images/server.jpg" className="img-fluid rounded-3" alt="" />
          </div>
          <div className="col-md p-5">
            <h2>Learn The Fundamentals</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="#" className="btn btn-dark mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section>


    {/* FAQ */}
    <FAQ/>
    </>
  );
};

export default Home;
