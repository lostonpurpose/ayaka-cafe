    'use client'

    interface CardProps {
        imgSrc: string;
    }

    const Cart = ({ imgSrc }: CardProps) => {

        return(
            <div className="fixed right-0 h-full w-[31%] bg-gray-200">
                <div className="flex justify-center bg-white">
                    <img className="object-cover w-30 h-15" src={imgSrc} alt="" />
                </div>
                <div className="items">
                    <ul>

                    </ul>
                </div>
                <div className="subtotal">
                    <h1>0</h1>
                </div>
                <div className="tax">
                    <h2>10%</h2>
                </div>
                <div className="total">
                    <h1>0</h1>
                </div>
            </div>
        );

    };

    export default Cart;