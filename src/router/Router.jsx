import { createBrowserRouter } from "react-router-dom";
import Home from "../component/pages/Home";
import MainLayout from "../layout/MainLayout";
import Menu from "../component/pages/Menu";
import Signup from "../component/pages/SignUp";
import Login from "../component/pages/Login";
import Profile from "../component/userComponet/Profile";
// import PrivetRoute from "../component/provider/PrivetRoute";
import CartPage from "../component/pages/CartPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../component/pages/dashboard/adminDashboard/Dashboard";
import User from "../component/pages/dashboard/adminDashboard/User";
import AddMenu from "../component/pages/dashboard/adminDashboard/AddMenu";
import Managebooking from "../component/pages/dashboard/adminDashboard/Managebooking";
import ManageItem from "../component/pages/dashboard/adminDashboard/ManageItem";
import ErrorPage from "../component/pages/ErrorPage";
import UpdateMenuItems from "../component/pages/dashboard/adminDashboard/UpdateMenuItems";
// import CheckoutForm from "../component/pages/paymentMenu/CheckoutForm";
import Payment from "../component/pages/paymentMenu/Payment";
import OrderPage from "../component/pages/paymentMenu/OrderPage";
import MenuDeltes from "../component/pages/MenuDeltes";
import ImageGalery from "../component/pages/ImageGalery";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[{
       path:"",
       element:<Home></Home>,
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/offer",
        element:<ImageGalery></ImageGalery>
      },
      {
        path:"/cartpage",
        element:<CartPage/>
      },
      {
        path:"/proceedChekout",
        element:<Payment/>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },{
        path:"/login",
        element:<Login></Login>
      }
      ,{
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:'/order',
        element:<OrderPage/>
      },
      {
        path:'/menuDelets',
        element:<MenuDeltes/>
      }
    ]
    },
    // Admin dashbaord
    {
       path:'dashboard',
       element:<DashboardLayout/>,
       children:[
        {
          path:'',
          element:<Dashboard/>
        },
        {
          path:"alluser",
          element:<User/>
        },
        {
          path:"addMenu",
          element:<AddMenu/>
        },
        {
          path:"managebooking",
          element:<Managebooking/>
        },      
        {
          path:"manageItem",
          element:<ManageItem/>
        },
        {
          path:"updateMenuItems/:id",
          element:<UpdateMenuItems/>,
          loader:({params})=>fetch(`http://localhost:6001/menu/${params.id}`)
        }
       ]

    }
  ]);
  export default Router