import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

  const {creatUser} = useContext(Authcontext)
  const naviget = useNavigate()
  const handelSignup = e => {
    e.preventDefault()
    const from = e.target
    const name = from.name.value
    const email = from.email.value
    const password = from.password.value
   
    const userInfo ={
       name,
       email,
       password

    }

    console.log(userInfo);
    creatUser(email,password)
    .then(res => {console.log(res.user)
    naviget("/")
    return toast.success('Successfully toasted!')

    })
    .catch(error =>{
      console.log(error);
      return toast.error("all ready use please try again ")
    })
  }

  return (
    <div>
      <div className="hero h-fit py-36">
        <div className=" flex items-center flex-wrap md:w-full justify-around">
          <div className=" w-full mx-5 text-center md:w-2/5">
            <img
              className=" mx-auto "
              src="../../../public/logo.png"
              alt=""
            />
            <h1 className="text-center font-bold text-2xl my-4">
              Join for Exclusive Deals
            </h1>
            <p>Unlock your dream home with us! Join now for exclusive listings, personalized insights, and expert guidance. Your key to finding the perfect place to call home starts here.</p>
          </div>
          <div className="shadow-2xl border bg-white rounded-xl mx-3 my-2 w-full md:w-2/5">
            <form onSubmit={handelSignup} className="card-body w-full">
              {/* Name input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered" />
              </div>

              {/* email input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Email"
                  className="input input-bordered"
                />

              </div>
              {/* SignUp button  */}
              <div className="form-control mt-6">
                <button type="submit"  className={`btn bg-green disabled:text-slate-600 hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60`}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

