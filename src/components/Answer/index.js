import { useState } from 'react';

const Answer = ({ answer, order, icon, toggleActive }) => {
  const [active, isActive] = useState(false);
  return (
    <button
      onClick={(e) => {
        if (icon === 'check') {
          e.target.classList.remove('border-purple-500', 'text-purple-500');
          e.target.classList.add(
            'border-green-500',
            'bg-green-500',
            'text-white'
          );
          isActive(true);
          toggleActive(true);
        } else {
          e.target.classList.remove('border-purple-500', 'text-purple-500');
          e.target.classList.add('border-red-500', 'bg-red-500', 'text-white');
        }
      }}
      className={`flex justify-between border-2 border-purple-500 rounded-lg py-4 px-4 text-purple-500 items-center mx-4 my-2`}
    >
      <span className='capitalize pointer-events-none'>{order}</span>
      <span className='pointer-events-none'>{answer}</span>
      <i
        className={
          active
            ? `far fa-${icon}-circle fa-lg`
            : `far fa-${icon}-circle fa-lg text-white`
        }
      ></i>
    </button>
  );
};

export default Answer;
