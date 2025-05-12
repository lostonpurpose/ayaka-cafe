'use client';

import React from "react";
import Card from "./card";

interface CardPageProps {
  onCardClick: (price: number, infoText: string) => void;
}

const CardPage: React.FC<CardPageProps> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 flex-1 mr-118">
      <Card imgSrc="/pexels-chevanon-302904.jpg" infoText="The Dandy" price={800} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-jayoke-851555.jpg" infoText="The Francisco de la Rone" price={500} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-julieaagaard-2351275.jpg" infoText="Cinnamon Purge" price={650} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-mew-wy-1427872-2910874.jpg" infoText="For Those with Inadequacy Issues" price={480} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-myfoodie-2638019.jpg" infoText="Minimalist Romantic" price={660} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-chevanon-312418.jpg" infoText="Barista's Show Off" price={400} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-pixabay-414630.jpg" infoText="Hope You Don't Get Cancer" price={710} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-valeriiamiller-3020919.jpg" infoText="Good Luck Staying Together" price={500} onCardClick={onCardClick} />
      <Card imgSrc="/pexels-victorfreitas-685527.jpg" infoText="Too Good for This Place" price={390} onCardClick={onCardClick} />
    </div>
  );
};

export default CardPage;