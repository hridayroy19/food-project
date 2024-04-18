const CartPage = () => {
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
        <th>
          no
        </th>
        <th>food</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Quentity</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
    <tr>
        <th>
          1
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      
    </tbody>

    
  </table>
</div>

   </div>
  </div>
  );
};

export default CartPage;
