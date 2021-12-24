import { useState } from 'react';

const Answer = ({ answer, order, icon, toggleActive, className, ...props }) => {
  const [active, isActive] = useState(false);

  return (
    <button
      className='flex border-2 border-purple-500 rounded-lg py-4 px-4 text-purple-400 items-center mx-4 my-2'
      onClick={(e) => {
        if (icon === 'check') {
          e.target.classList.add(
            'border-green-500',
            'bg-green-500',
            'text-white',
            'justify-between'
          );
          e.target.classList.remove(
            'border-purple-500',
            'text-purple-400',
            'text-purple'
          );
          isActive(true);
        } else {
          e.target.classList.add(
            'border-red-500',
            'bg-red-500',
            'text-white',
            'justify-between'
          );
          e.target.classList.remove('border-purple-500', 'text-purple-400');
          isActive(true);
        }
      }}
    >
      <span
        className={
          active
            ? 'mx-2 font-extrabold text-lg capitalize pointer-events-none'
            : 'mx-2 font-extrabold text-lg capitalize pointer-events-none'
        }
      >
        {order}
      </span>
      <span
        className={
          active
            ? 'capitalize text-lg pointer-events-none'
            : 'capitalize text-lg self-center flex-1 pointer-events-none'
        }
      >
        {answer}
      </span>
      {active && <i className={`far fa-${icon}-circle fa-lg`}></i>}
    </button>
  );
};

export default Answer;
