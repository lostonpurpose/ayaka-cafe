'use client';

import { useState } from "react";
import Header from "./components/header";
import CardPage from "./components/cardPage";
import Cart from "./components/cart";

export default function Home() {
  const [cartItems, setCartItems] = useState<{ infoText: string; price: number }[]>([]);

  const onCardClick = (price: number, infoText: string) => {
    setCartItems((prevItems) => [...prevItems, { infoText, price }]); // Add new item to the list
  };

  return (
    <>
      <Header />
      <div className="flex w-full mt-9">
        <CardPage onCardClick={onCardClick} />
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}