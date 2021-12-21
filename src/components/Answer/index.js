const Answer = ({ answer, order, toggleShow }) => {
  return (
    <button
      onClick={(e) => {
        toggleShow(true);
      }}
      className='lg:text-left lg:mx-4 lg:text-purple-600 lg:border-2 lg:border-purple-500 lg:hover:bg-orange-400 lg:hover:text-white lg:py-4 lg:my-4 lg:rounded-md lg:hover:border-orange-400 lg:capitalize'
    >
      <span className='lg:font-extrabold lg:ml-4 lg:mr-12'>{order}</span>
      {answer}
    </button>
  );
};

export default Answer;
