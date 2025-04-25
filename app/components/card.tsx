interface CardProps {
    imgSrc: string;
    infoText: string;
  }
  
  const Card = ({ imgSrc, infoText }: CardProps) => {
    return (
      <div className="card-container">
        <div className="card flex justify-center flex-col w-full relative">
          <img
            className="w-full h-60 object-cover mx-auto"
            src={imgSrc}
            alt=""
          />
          <div className="info absolute top-0 w-full bg-black/50">
              <p className="text-sm text-blue-300">{infoText}</p>
          </div>
        </div>
        <div className="flex justify-center pt-1">
          <button className="button w-full border rounded border-gray-500 bg-blue-300">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default Card;
  