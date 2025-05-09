import Card from "./components/card";
import Cart from "./components/cart";
import Header from "./components/header";
import CartPage from "./components/cartPage";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <CartPage />
        <Cart imgSrc="/logo-c.jpg"/>
      </div>
    </>
  );
}
