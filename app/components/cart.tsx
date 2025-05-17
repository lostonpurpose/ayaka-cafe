'use client';

interface CartProps {
  imgSrc?: string;
  cartItems: { infoText: string; price: number }[];
}

const Cart = ({ cartItems }: CartProps) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const taxRate = 0.10;
  const total = subtotal + subtotal * taxRate;

  return (
    <div className="fixed right-0 px-1 mt-0 bg-amber-100 h-[calc(100vh-48px)] w-[31%] flex flex-col">
      <div className="your-cart bg-amber-100 p-4 mb-5 flex-1 overflow-auto">
        <div className="mb-3">
          <h1>Your Cart</h1>
        </div>
        <div className="items">
          <ul className="bg-white">
            {cartItems.map((item, index) => (
              <li key={index} className="item-container flex justify-between border border-blue-300 p-2">
                <div className="item-name">
                  <h1>{item.infoText}</h1>
                </div>
                <div className="item-price">
                  <h1>¥{item.price}</h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      <div className="calculations bg-amber-100 p-4">
        <div className="subtotal flex justify-between mt-4">
          <h2>Subtotal: ¥</h2>
          <h2>{subtotal.toFixed(2)}</h2>
        </div>
        <div className="tax flex justify-between">
          <h2>Tax: </h2>
          <h2>10%</h2>
        </div>
        <div className="total flex justify-between">
          <h1>Total: ¥</h1>
          <h1>{total.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;