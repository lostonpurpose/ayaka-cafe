'use client'
import Card from "./components/card";
import Cart from "./components/cart";
import Header from "./components/header";
import CardPage from "./components/cardPage";
import { useState } from "react";

export default function Home() {

  const [selectedPrice, setSelectedPrice] = useState(0);

  return (
    <>
      <Header />
      <div className="flex w-full">
        <CardPage selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
        <Cart imgSrc="/logo-c.jpg"/>
      </div>
    </>
  );
}
