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
      className='h-screen w-screen'
    ></div>
  );
}

export default App;
