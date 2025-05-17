'use client';

interface CartProps {
  imgSrc?: string; // Optional, if you want to display an image
  cartItems: { infoText: string; price: number }[]; // List of items in the cart
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <div className="fixed right-0 px-1 bg-white h-full w-[31%]">
      <div className="flex justify-center bg-white">
        <img className="object-cover w-30 h-15" src="/logo-c.jpg" alt="Cart Logo" />
      </div>
      <div className="your-cart">
        <h1>You Cart</h1>
      </div>
      <div className="items">
        <ul className="bg-blue-300">
          {cartItems.map((item, index) => (
            <li key={index} className="item-container flex justify-between border border-white p-2">
              <div className="item-name">
                <h1>{item.infoText}</h1>
              </div>
              <div className="item-price">
                <h1>${item.price}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="subtotal flex justify-between">
        <h2>Subtotal: ¥</h2>
        <h2>
            {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </h2>
      </div>
      <div className="tax flex justify-between">
        <h2>Tax: </h2>
        <h2>10%</h2>
      </div>
      <div className="total flex justify-between">
        <h1>Total: ¥</h1>
        <h1>
            {cartItems.reduce((total, item) => (total + item.price) + ((total + item.price) * .10), 0).toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default Cart;