'use client';

import { useState } from "react";
import Header from "./components/header";
import CardPage from "./components/cardPage";
import Cart from "./components/cart";

export default function Home() {
  const [cartItems, setCartItems] = useState<{ infoText: string; price: number }[]>([]);

  const onCardClick = (price: number, infoText: string) => {
    setCartItems((prevItems) => [...prevItems, { infoText, price }]);
  };

  return (
    <div className="h-full min-h-screen flex flex-col">
      <Header />
      <div className="flex w-full flex-1 mt-12">
        <CardPage onCardClick={onCardClick} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}