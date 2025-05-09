'use client'
interface CardProps {
    imgSrc: string;
    infoText: string;
    price: number;
    onCardClick: (price: number) => void; // Function to handle click
  }
  
  const Card = ({ imgSrc, infoText, price }: CardProps) => {
    return (
      <div className="card-container">
        <div className="card flex justify-center flex-col w-full relative">
          <img
            className="w-full h-60 object-cover mx-auto"
            src={imgSrc}
            alt=""
          />
          <div className="info absolute top-0 w-full bg-black/50 flex justify-between">
              <p className="text-sm text-blue-300">{infoText}</p>
              <p className="text-sm text-blue-300">{price}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={() => console.log('Clicked!')} className="button w-full border-gray-500 bg-blue-300">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default Card;
  