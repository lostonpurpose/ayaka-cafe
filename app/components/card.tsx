interface CardProps {
    imgSrc: string;
  }
  
   const Card = ({ imgSrc }: CardProps) => {
    return <div className="card-container">
        <div className="card info flex justify-center border">
            <img className="w-50 h-60 aspect-square" src={imgSrc} alt="" />
        </div>
        <div className="info flex justify-center">
        <p>Hello</p>
        </div>
        <div className="info flex justify-center">
        <button className="button">Add to Cart</button>
        </div>

        </div>
}

export default Card;