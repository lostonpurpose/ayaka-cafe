interface CardProps {
    imgSrc: string;
  }
  const Cart = ({ imgSrc }: CardProps) => {

    return(
        <div className="w-[31%] bg-gray-200">
            <div className="flex justify-center bg-white">
                <img className="object-cover w-30 h-15" src={imgSrc} alt="" />
            </div>
        </div>
    );

};

export default Cart;