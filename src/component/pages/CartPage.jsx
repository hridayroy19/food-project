import Swal from "sweetalert2";
import UseCart from "../hooks/UseCart";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const [cart, refetch] = UseCart();
  // console.log(cart);

const handelDelet = (item)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:6001/addCart/${item._id}`,{
        method:"DELETE"
      })
      .then(res=> res.json())
      .then(data =>{
        if(data.deletedCount >0){
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      } )
    }
  });
}






  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <div className="py-32 flex flex-col items-center justify-center">
        {/* content */}
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
          For the Love of Delicious <span className="text-green">Food</span>
        </h2>
      </div>
      {/* list card */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className=" bg-fuchsia-300 text-black">
              <tr>
                <th>#</th>
                <th>food</th>
                <th>Item Name</th>
                <th>Quentity</th>
                <th>price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr className="text-xl" key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td> {item.quantity} </td>
                  <th>{item.price}</th>
                  <th>
                    <button onClick={()=>handelDelet(item)} className="btn btn-ghost text-xl ">
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
