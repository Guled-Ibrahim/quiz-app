import background from './assets/background.png';
import man from './assets/man.svg';
import Answer from './components/Answer';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
function App() {
  const [loading, isLoading] = useState(true);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-screen w-screen lg:flex lg:items-center lg:flex-col lg:justify-center'
    >
      {loading ? (
        <ClipLoader color={'white'} size={150} />
      ) : (
        <div className='bg-white lg:rounded-lg lg:w-4/12 lg:relative lg:font-poppins'>
          <p className='capitalize lg:font-extrabold text-white lg:text-3xl lg:absolute lg:-top-12 lg:left-0'>
            Country quiz
          </p>
          <img src={man} alt='' className='lg:absolute lg:-top-24 right-0' />
          <div className='lg:flex lg:flex-col lg:mx-2 lg:mb-4'>
            <p className='text-purple-900 lg:font-extrabold lg:text-2xl lg:mt-12 lg:ml-4 lg:mb-8'>
              Kuala lumpar is the capital city of
            </p>
            <div className='lg:flex lg:flex-col'>
              <Answer answer={'vietnam'} order={'A'} />
              <Answer answer={'malaysia'} order={'B'} />
              <Answer answer={'sweden'} order={'C'} />
              <Answer answer={'austria'} order={'D'} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
