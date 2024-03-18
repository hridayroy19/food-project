
import { FaHeart } from "react-icons/fa";
const Cards = ({ item }) => {
    // console.log(item);

    return (
        <div className="card lg:w-[280px] h-[360px] shadow-xl border-2 relative  mr-5 md:my-5">
            <figure>
                <img src="https://i.ibb.co/VVb9hF0/classic-cheeseburger-with-beef-patty-pickles-cheese-tomato-onion-lettuce-and-ketchup-mustard-free-pn.webp" alt="Shoes" className="hover:scale-105  rounded-3xl px-2 transition-all duration-300 w-[90%] mt-4 object-cover  " />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}!</h2>
                <p>Description of the item</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red">$ </span> {item.price}
                    </h5>
                    <button className=" border-2 p-2 rounded-full bg-green hover:bg-black text-white">Add to Cart </button>
                </div>
            </div>
            <div className=" absolute ml-[85%] top-3  ">
                <FaHeart className="text-3xl text-red  hover:text-green cursor-pointer" />
            </div>
        </div>
    );
};

export default Cards;
