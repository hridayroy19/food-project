
import { FaHeart } from "react-icons/fa";
const Cards = ({ item }) => {
    // console.log(item);

    return (
        <div className="card lg:w-[355px] shadow-xl border-2 relative  mr-5 md:my-5">
            <figure>
                <img src="https://i.ibb.co/0sfVz8S/Ice-Cream-Cup.png" alt="Shoes" className="hover:scale-105  rounded-3xl transition-all duration-300 w-[90%] mt-4 object-cover  md:h-60 " />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}!</h2>
                <p>Description of the item</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red">$ </span> {item.price}
                    </h5>
                    <button className="btn bg-green text-white">Add to Cart </button>
                </div>
            </div>
            <div className=" absolute ml-[90%] top-5  ">
                <FaHeart className="text-3xl text-red   cursor-pointer" />
            </div>
        </div>
    );
};

export default Cards;
