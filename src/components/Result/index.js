import celebrate from '../../assets/celebrate.svg';

const Result = () => {
  return (
    <div className='flex flex-col'>
      <img
        src={celebrate}
        alt='celebrate.svg'
        className='h-64 w-64 self-center'
      />
      <h1 className='text-gray-900 text-4xl font-extrabold capitalize self-center'>
        results
      </h1>
      <p className='self-center mt-2 text-purple-400 font-light'>
        you got{' '}
        <span className='text-green-500 text-2xl font-extrabold'>4</span>{' '}
        correct answers
      </p>
      <button className='border-2 border-gray-500 w-2/4 py-2 px-2 mt-16 mb-8 self-center rounded-md'>
        try again
      </button>
    </div>
  );
};

export default Result;
