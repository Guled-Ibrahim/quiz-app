import { useState, useEffect } from 'react';
import Background from './assets/background.png';
import Man from './assets/man.svg';
import Axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Random from 'no-duplicates';
import countryList from './data/index';
import shuffle from 'shuffle-array';
import Confetti from 'react-confetti';
import Answer from './components/Answer';
import Result from './components/Result';
import tweensFunctions from 'tween-functions';

function App() {
  const [loading, isLoading] = useState(true);
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [active, isActive] = useState(false);
  const [index, setIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [showQuestion, isShowQuestion] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [questionNumber, setQuestion] = useState(1);

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
        setAnswers((prev) => [data[0].name.common, ...prev]);
        for (let i = 0; i < 3; i++) {
          setAnswers((prev) => [randomCountry(), ...prev]);
        }
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
      className='h-screen w-screen lg:flex lg:items-center lg:flex-col lg:justify-center'
    >
      <Confetti
        width={window.screen.width}
        height={window.screen.height}
        recycle={false}
        numberOfPieces={2000}
      />
      {loading ? (
        <ClipLoader color={'white'} size={150} />
      ) : (
        <div className='bg-white lg:rounded-lg lg:w-4/12 lg:relative lg:font-poppins'>
          <p className='capitalize lg:font-extrabold text-white lg:text-3xl lg:absolute lg:-top-12 lg:left-0'>
            Country quiz
          </p>
          {showQuestion && (
            <img src={Man} alt='' className='lg:absolute lg:-top-24 right-0' />
          )}
          {showQuestion ? (
            <div className='lg:flex lg:flex-col lg:mx-2 lg:mb-4'>
              <p className='text-purple-900 lg:font-extrabold lg:text-2xl lg:mt-12 lg:ml-4 lg:mb-8'>
                {`${city} is the capital city of`}
              </p>
              <div className='flex flex-col'>
                {shuffle(answers).map((answer, index) => {
                  return country === answer ? (
                    <Answer
                      key={index}
                      icon={'check'}
                      order={orderList[index + 1]}
                      answer={answer}
                      toggleActive={(value) => isActive(value)}
                    />
                  ) : (
                    <Answer
                      key={index}
                      icon={'times'}
                      order={orderList[index + 1]}
                      answer={answer}
                    />
                  );
                })}
              </div>
              <button
                onClick={() => setIndex((prev) => prev + 1)}
                className='lg:bg-orange-400 lg:text-white lg:self-end lg:py-4 lg:px-2 lg:rounded-md lg:mx-4 lg:w-24 lg:text-xl'
              >
                next
              </button>
            </div>
          ) : (
            <Result />
          )}
        </div>
      )}
    </div>
  );
}
/* 

  <WrongAnswer order={'a'} answer='sweden' />
  <WrongAnswer order={'b'} answer='peru' />
  <WrongAnswer order={'d'} answer='china' />

*/

/* 

 <Answer
                icon={'check'}
                order={'a'}
                answer={country}
                className={
                  active
                    ? `flex justify-between border-2 border-green-500 bg-green-500 rounded-lg py-4 px-4 text-white items-center mx-4 my-2`
                    : `flex border-2 border-purple-500 rounded-lg py-4 px-4 text-purple-400 items-center mx-4 my-2`
                }
                active={active}
                toggleActive={(boolean) => isActive(boolean)}
              />
              <Answer
                icon={'times'}
                order={'b'}
                answer={'sweden'}
                className={
                  active
                    ? `flex justify-between border-2 border-red-500 bg-red-500 rounded-lg py-4 px-4 text-white items-center mx-4 my-2`
                    : `flex border-2 border-purple-500 rounded-lg py-4 px-4 text-purple-400 items-center mx-4 my-2`
                }
                active={active}
                toggleActive={(boolean) => isActive(boolean)}
              />
              <Answer
                icon={'times'}
                order={'c'}
                answer={'china'}
                className={
                  active
                    ? `flex justify-between border-2 border-red-500 bg-red-500 rounded-lg py-4 px-4 text-white items-center mx-4 my-2`
                    : `flex border-2 border-purple-500 rounded-lg py-4 px-4 text-purple-400 items-center mx-4 my-2`
                }
                active={active}
                toggleActive={(boolean) => isActive(boolean)}
              />
              <Answer
                icon={'times'}
                order={'d'}
                answer={'peru'}
                className={
                  active
                    ? `flex justify-between border-2 border-red-500 bg-red-500 rounded-lg py-4 px-4 text-white items-center mx-4 my-2`
                    : `flex border-2 border-purple-500 rounded-lg py-4 px-4 text-purple-400 items-center mx-4 my-2`
                }
                active={active}
                toggleActive={(boolean) => isActive(boolean)}
              />


*/

export default App;
