import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { UsePhoto } from "../../../sheard/imageHosting.js";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import Swal from "sweetalert2";

const AddMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = async (data) => {
    if (data.image && data.image[0]) {
      const imgHost = data.image[0]; // Accessing the first file from the input
      const hostimage = await UsePhoto(imgHost);
      // console.log(hostimage);
      const menuItems = {
        name: data.name,
        catagory: data.catagory,
        price: data.price,
        recipe: data.recipe,
        image: hostimage,
      };
      // console.log(menuItems);

      axiosPublic.post("/menu", menuItems).then((res) => {
        // console.log(res.data)
        if (res.data.insertedId) {
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Menu Items saved Database",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className=" w-full md:w-[870px] px-4 mx-auto">
      <h1 className="text-xl">
        {" "}
        Add new menu <span className="text-green">items</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-10">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Ricipe Name</span>
            </div>
            <input
              type="text"
              placeholder="ricipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* 2 input */}
        <div className=" mt-5 flex gap-3">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Catagory*</span>
            </div>
            <select
              {...register("catagory", { required: true })}
              className="select select-bordered"
              defaultValue="default"
            >
              <option disabled value="default">
                Select a Catagory
              </option>
              <option value={"salad"}>Salad</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"soup"}>Soup</option>
              <option value={"desert"}>Desert</option>
              <option value={"drinks"}>Drinks</option>
              <option value={"populer"}>Populer</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="form-control my-5">
          <textarea
            className="textarea textarea-bordered w-[50%] h-24"
            placeholder="Bio"
            {...register("recipe", { required: true })}
          ></textarea>
          {/* row image uplode */}
        </div>
        <div className=" my-5">
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input text-black w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn bg-green">
          {" "}
          Submite <FaUtensils />{" "}
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
