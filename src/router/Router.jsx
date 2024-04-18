import { createBrowserRouter } from "react-router-dom";
import Home from "../component/pages/Home";
import MainLayout from "../layout/MainLayout";
import Menu from "../component/pages/Menu";
import Offer from "../component/pages/Offer";
import Signup from "../component/pages/SignUp";
import Login from "../component/pages/Login";
import Profile from "../component/userComponet/Profile";
import PrivetRoute from "../component/provider/PrivetRoute";
import CartPage from "../component/pages/CartPage";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[{
       path:"",
       element:<Home></Home>,
      },
      {
        path:"/menu",
        element:<PrivetRoute><Menu/></PrivetRoute>
      },
      {
        path:"/offer",
        element:<Offer/>
      },
      {
        path:"/cartpage",
        element:<CartPage/>
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
      }

    
    
    ]
    },
    {
    
    }
  ]);
  export default Router