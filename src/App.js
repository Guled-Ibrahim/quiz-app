import background from './assets/background.png';
import man from './assets/man.svg';
import Answer from './components/Answer';
import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

function App() {
  const [loading, isLoading] = useState(false);
  const [countryList, setCountryList] = useState([
    'peru',
    'morocco',
    'finland',
    'russia',
    'japan',
  ]);
  const [index, setIndex] = useState(1);
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [showButton, isShowButton] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryList[index]}`)
      .then(({ data }) => {
        setCity(data[0].capital[0]);
        setCountry(countryList[index]);
      });
  }, [index]);

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
              {`${city} is the capital city of`}
            </p>
            <div className='lg:flex lg:flex-col'>
              <Answer
                answer={country}
                order={'A'}
                toggleShow={(toggle) => isShowButton(toggle)}
              />
              <Answer answer={'malaysia'} order={'B'} />
              <Answer answer={'sweden'} order={'C'} />
              <Answer answer={'austria'} order={'D'} />
            </div>
            {showButton && (
              <button
                onClick={() => setIndex((prev) => prev + 1)}
                className='lg:bg-orange-400 lg:text-white lg:self-end lg:py-4 lg:px-2 lg:rounded-md lg:mx-4 lg:w-24 lg:text-xl lg:mt-4 lg:mb-4'
              >
                next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
