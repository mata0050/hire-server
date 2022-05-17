import RegisterAs from './RegisterAs';
import RegisterEmployee    from './RegisterEmployee'

export default function index({}) {
  return (
    <main className=' mt-5 py-5 mb-5'>
      <div className='container mt-5 mb-5 pb-5'>
        <RegisterAs />

        <RegisterEmployee />
      </div>
    </main>
  );
}
