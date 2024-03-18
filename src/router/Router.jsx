import { createBrowserRouter } from "react-router-dom";
import Home from "../component/pages/Home";
import MainLayout from "../layout/MainLayout";
import Menu from "../component/pages/Menu";
import Offer from "../component/pages/Offer";


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
        element:<Menu/>
      },
      {
        path:"/offer",
        element:<Offer/>
      }

    
    
    ]
    },
    {
    
    }
  ]);
  export default Router