/* eslint-disable @next/next/no-img-element */
import CardInterface from '../shared/card.interface';
import styles from '../styles/Loader.module.scss';

export default function Card({
  id,
  content,
  heading,
  link,
  imageUrl,
}: CardInterface) {
  return (
    <div
      className={
        Number(id) === 2
          ? 'card bg-secondary text-light'
          : 'card bg-dark text-light'
      }
    >
      <div className='card-body text-center'>
        <div className='h1 mb-3'>
          <img
            className='img-fluid  d-none d-lg-block mx-auto'
            src={imageUrl}
            style={{ height: '100px' }}
            alt='server'
          />
        </div>
        <h3 className='card-title mb-3 text-warning'>{heading}</h3>
        <p className='card-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
          quidem possimus dolorum esse eligendi?
        </p>
        <a
          href='#'
          className={Number(id) === 2 ? 'btn btn-dark' : 'btn btn-primary'}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
