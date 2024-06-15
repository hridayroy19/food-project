import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Authcontext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Cards = ({ item }) => {
  // console.log(item);

  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(Authcontext);

//   console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

//   add item cart post in database
  const handelAddCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuItem: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:6001/addCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      }).then((res) =>
        res.json().then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      );
    } else {
      Swal.fire({
        title: "plese login?",
        text: "plese creat an login acount!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card lg:w-[280px] lg:h-[360px] shadow-xl border-2 relative  mr-5 md:my-5">
          <Link to={"/menuDelets"}> 
      <figure>
        <img
          src="https://i.ibb.co/VVb9hF0/classic-cheeseburger-with-beef-patty-pickles-cheese-tomato-onion-lettuce-and-ketchup-mustard-free-pn.webp"
          alt="Shoes"
          className="hover:scale-105  rounded-3xl px-2 transition-all duration-300 w-[90%] mt-4 object-cover  "
        />
      </figure>
      </Link>
      <div className="card-body">
      <Link to={"/menuDelets"}>  <h2 className="card-title hover:underline">{item.name}!</h2> </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$ </span> {item.price}
          </h5>
          
          <button
            onClick={() => handelAddCart()}
            className=" border-2 p-2 rounded-full bg-orange-500  hover:bg-black text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className=" absolute ml-[85%] top-3  ">
        <FaHeart className="text-3xl text-red  hover:text-green cursor-pointer" />
      </div>
    </div>
  );
};

export default Cards;
