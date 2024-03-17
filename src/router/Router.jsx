import { createBrowserRouter } from "react-router-dom";
import Home from "../component/pages/Home";
import MainLayout from "../layout/MainLayout";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[{
       path:"",
       element:<Home></Home>,
      }
    
    
    ]
    },
    {
    
    }
  ]);
  export default Router