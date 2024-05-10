import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Authcontext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {

const { sigIn , signInWithgoogle, }=useContext(Authcontext)

// const loaction = useLocation();
const navigate = useNavigate();
const trans = location.state?.trans?.pathname || "/";

 const handelLogin = e =>{
    e.preventDefault()
    const from = e.target
    const email = from.email.value
    const password = from.password.value

    console.log(email,password);

    sigIn(email,password)
    .then(res =>{ console.log(res.user)
    navigate(trans , {replace: true})
    return toast.success(" success full login ")
    
})
 .catch(error =>{
    console.log(error);
    return toast.error("error login plese try agin")
 })

 }

// google login 
const handelGoogleSignWith = () => {
    signInWithgoogle().then((res) => {
      console.log(res.user);
      const userInfo = {
        name : res.user?.displayName,
        email: res.user?.email,
        role: "user",
      };
      axios.post('http://localhost:6001/user', userInfo)
      .then(res =>{
        console.log(res.data)
        navigate("/");
      })
    });
  };



    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">
                <div className="flex justify-between px-3 ">
                    <p></p>
                    <form method="dialog">
                        <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </form>
                </div>

                <form onSubmit={handelLogin} className="card-body " method="dialog">
                    <h3 className="font-bold text-2xl">Please Login </h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-green text-white">Login</button>
                    </div>
                </form>
                <div className="text-center"> Are you new here? || <a href="/signUp">Sign Up</a> 
                
                  
                </div>    
                <div className=" mt-3   ">
                   <div className=" w-full text-center justify-center flex gap-2 text-xl  mx-auto">
                   <button className="btn btn-circle hover:text-white hover:bg-green bg-gray-300">
                   <FaFacebook></FaFacebook>
                    </button> 
                    <button onClick={handelGoogleSignWith} className="btn btn-circle hover:text-white bg-gray-300 hover:bg-green">
                    <FaGoogle></FaGoogle>
                    </button>
                   </div>
                   </div>    
            </div>
          
        </dialog>
    );
};

export default Login;