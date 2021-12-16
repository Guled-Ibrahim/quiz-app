import background from './assets/background.png';
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-screen w-screen lg:flex lg:items-center lg:flex-col'
    >
      <div className='bg-white lg:rounded-lg lg:w-4/12 lg:relative mt-56 '>
        <p className='capitalize lg:font-extrabold text-white lg:text-3xl lg:absolute lg:bottom-6 lg:left-0'>
          capital quiz
        </p>
        test
      </div>
    </div>
  );
}

export default App;
