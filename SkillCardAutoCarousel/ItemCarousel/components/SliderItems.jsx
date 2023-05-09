import React from 'react';

const SliderItems = ({ innerWidth, cards }) => {
  const itemsToShow = innerWidth < 640 ? 2 : 4;

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
      {cards.slice(0, itemsToShow).map((card) => (
        <div
          key={card.id}
          className={`shadow-md ${card.style} hover:scale-110 duration-500`}
        >
          <img className="w-20 mx-auto" src={card.src} alt={`${card.text} icon`} />
          <p className="my-4">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SliderItems;
