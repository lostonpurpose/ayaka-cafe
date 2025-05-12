'use client'
import Card from "./components/card";
import Cart from "./components/cart";
import Header from "./components/header";
import CardPage from "./components/cardPage";
import { useState } from "react";

export default function Home() {

  const [selectedPrice, setSelectedPrice] = useState(0);

    // Step 2: Define the onCardClick function
    const onCardClick = (price: number) => {
      setSelectedPrice(price);
    };

  return (
    <>
      <Header />
      <div className="flex w-full mt-9">
      
        {/* Passing selectedPrice, setSelectedPrice, and onCardClick to CardPage */}

        <CardPage 
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onCardClick={onCardClick}
        />

        <Cart imgSrc="/logo-c.jpg"/>
      </div>
    </>
  );
}
