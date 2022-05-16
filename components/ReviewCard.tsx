/* eslint-disable @next/next/no-img-element */
interface ReviewInterface {
  id: number;
  imageUrl: string;
  name: string;
  review: string;
}

const reviews: ReviewInterface[] = [
  {
    id: 1,
    imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    id: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Steve Smith',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    id: 1,
    imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Jane Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    id: 1,
    imageUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Sara Smith',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
];

export default function ReviewCard() {
  return (
    <>
      {reviews.map((review) => (
        <div className='col-md-6 col-lg-3 ' key={review.id}>
          <div className='card bg-light'>
            <div className='card-body text-center'>
              <img
                src={review.imageUrl}
                className='rounded-circle mb-3'
                alt=''
              />
              <h3 className='card-title mb-3'>{review.name}</h3>
              <p className='card-text'>{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
