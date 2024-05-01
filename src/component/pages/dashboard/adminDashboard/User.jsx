import { useQuery } from '@tanstack/react-query';
import React from 'react';

const User = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const response = await fetch(`http://localhost:6001/user`);
          return response.json();
        },
      });
      
      console.log(users);


    return (
        <div>
            <div className='flex items-center justify-between m-4'>
                <h1> All Users</h1>
                <h1> Total Users:{users.length}</h1>
            </div>
            {/* tabil crate  */}
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
        </div>
    );
};

export default User;