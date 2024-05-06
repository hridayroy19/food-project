import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";

const AddMenu = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
            className="select select-bordered" defaultValue="default">
              <option  disabled value="default" >
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
