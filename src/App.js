import { useState, useEffect } from 'react';
import Background from './assets/background.png';
import Man from './assets/man.svg';
import Axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Random from 'no-duplicates';
import countryList from './data/index';
import arrayShuffle from 'array-shuffle';
import Confetti from 'react-confetti';
import Answer from './components/Answer';
import Result from './components/Result';

function App() {
  const [loading, isLoading] = useState(true);
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [index, setIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [showQuestion, isShowQuestion] = useState(true);
  const [showBtn, isShowBtn] = useState(false);
  const [attempts, setAttempts] = useState();

  const orderList = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
  };

  const randomCountry = Random(countryList);

  useEffect(() => {
    isLoading(true);
    setAnswers([]);
    Axios.get(`https://restcountries.com/v3.1/name/${randomCountry()}`).then(
      ({ data }) => {
        setCity(data[0].capital[0]);
        setCountry(data[0].name.common);
        const countryShuffle = [];
        const country = data[0].name.common;
        countryShuffle.push(country);
        countryShuffle.push(randomCountry());
        countryShuffle.push(randomCountry());
        countryShuffle.push(randomCountry());
        const shuffledAnswers = arrayShuffle(countryShuffle);
        setAnswers(shuffledAnswers);
        isLoading(false);
      }
    );
  }, [index]);

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-screen w-screen flex items-center flex-col justify-center'
    >
      {!showQuestion && (
        <Confetti
          width={window.screen.width}
          height={window.screen.height}
          recycle={false}
          numberOfPieces={2000}
        />
      )}
      {loading ? (
        <ClipLoader color={'white'} size={150} />
      ) : (
        <div className='bg-white lg:rounded-lg lg:w-4/12 lg:relative lg:font-poppins'>
          <p className='capitalize font-extrabold text-white text-3xl absolute -top-12 left-0'>
            Country quiz
          </p>
          {showQuestion && (
            <img src={Man} alt='' className='absolute -top-24 right-0' />
          )}
          {showQuestion ? (
            <div className='lg:flex lg:flex-col lg:mx-2 lg:mb-4'>
              <p className='text-purple-900 font-extrabold text-2xl mt-12 ml-4 mb-8'>
                {`${city} is the capital city of`}
              </p>
              <div className='flex flex-col'>
                {answers.map((answer, index) => {
                  return (
                    <Answer
                      key={index}
                      order={orderList[index + 1]}
                      icon={answer === country ? 'check' : 'times'}
                      answer={answer}
                      country={country}
                    />
                  );
                })}
              </div>
              {showBtn && (
                <button
                  onClick={() => {
                    if (index <= 4) {
                      setIndex((prev) => prev + 1);
                    } else {
                      isShowQuestion(false);
                    }
                  }}
                  className='bg-orange-500 text-white self-end py-4 px-4 rounded-md mx-4 w-24 text-xl mt-6'
                >
                  next
                </button>
              )}
            </div>
          ) : (
            <Result
              resetQuiz={(value, boolean) => {
                setIndex(value);
                isShowQuestion(boolean);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
