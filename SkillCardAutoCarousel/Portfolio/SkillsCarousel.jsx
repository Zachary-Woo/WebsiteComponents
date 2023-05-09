import React from 'react';
import { cards } from './data/skillCards.js';
import Slider, { SliderItem } from '../ItemCarousel/components/Slider.jsx';

const SkillsSection = () => {
  const itemWidth = '225px'; // Set a fixed width for each item

  return (
    <div className="w-full py-8 bg-gray-800 text-white">
      <div className='px-4'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff8432]'>Skills</p>
          <p className='py-4'>// Here are a few certifications I have some technologies I've worked with</p>
        </div>

      <Slider
        className="w-full"
        initialOffsetX={0}
      >
        {cards.map((card) => (
          <SliderItem key={card.id} className="m-4" width={itemWidth}>
            <div
              className={`shadow-md ${card.style} hover:scale-110 duration-500 w-full h-40 flex flex-col justify-center items-center`}
            >
              <img className="w-12 h-12 object-contain mx-auto" src={card.src} alt={card.text} />
              <p className="my-4">{card.text}</p>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSection;