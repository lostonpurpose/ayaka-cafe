'use client'

import React, {useState} from "react";
import Card from "./card";
import Cart from "./cart";

    const CartPage = () => {
        const [selectedPrice, setSelectedPrice] = useState(0);
    
        const handleCardClick = (price) => {
          setSelectedPrice(price); // Update state when card is clicked
        };
    
    return (
        <div className="grid grid-cols-3 gap-4 flex-1">
        <Card imgSrc="/pexels-chevanon-302904.jpg" infoText="The Dandy" price={800} />
        <Card imgSrc="/pexels-jayoke-851555.jpg" infoText="The Francisco de la Rone" price={500} />
        <Card imgSrc="/pexels-julieaagaard-2351275.jpg" infoText="Cinnamon Purge" price={650} />
        <Card imgSrc="/pexels-mew-wy-1427872-2910874.jpg" infoText="For Those with Inadequacy Issues" price={480} />
        <Card imgSrc="/pexels-myfoodie-2638019.jpg" infoText="Minimalist Romantic" price={660} />
        <Card imgSrc="/pexels-chevanon-312418.jpg" infoText="Barista's Show Off" price={400} />
        <Card imgSrc="/pexels-pixabay-414630.jpg" infoText="Hope You Don't Get Cancer" price={710} />
        <Card imgSrc="/pexels-valeriiamiller-3020919.jpg" infoText="Good Luck Staying Together" price={500} />
        <Card imgSrc="/pexels-victorfreitas-685527.jpg" infoText="Too Good for This Place" price={390} />

        </div>

    );
};

export default CartPage;