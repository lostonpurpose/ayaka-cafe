interface CardProps {
    imgSrc: string;
    infoText: string;
  }
  
  const Card = ({ imgSrc, infoText }: CardProps) => {
    return (
      <div className="card-container">
        <div className="card flex justify-center flex-col w-full">
          <img
            className="w-full h-60 object-cover mx-auto"
            src={imgSrc}
            alt=""
          />
          <div className="info-button">
            <div className="info flex justify-center">
              <p>{infoText}</p>
            </div>
            <div className="info flex justify-center">
              <button className="button w-full border rounded border-gray-500 bg-blue-300">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  