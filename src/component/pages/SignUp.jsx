import { useContext, useCallback  } from "react";
import { Authcontext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadSlim } from "tsparticles-slim"; 
import Particles from "react-tsparticles";


const SignUp = () => {
  // animition 
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    // await console.log(container);
}, []);


  // 
  const { creatUser , updateProfileData, } = useContext(Authcontext);
  const naviget = useNavigate();
  const handelSignup = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photoURL = from.photo.value;
   
    const data ={
      name ,
      email,
      photoURL,
      password
    }
    // console.log(data);

    // console.log(userInfo);
    creatUser(data.email , data.password , data.name, data.photoURL)
    .then(result =>{
     const loggedUser = result.user;
    //  console.log(loggedUser)
     updateProfileData(data.name , data.photoURL)
     .then(()=>{
       // send database information
         const userInfo ={
           name: data.name,
             email: data.email ,
             photoURL:data.photoURL,    
             role: "user",   
         }
          axios.post('http://localhost:6001/user', userInfo)
          .then(res =>{
           if(res.data.insertedId){
            //  console.log('user add to the database');
             toast('Success full Register!', {
               icon: '👏',
             });
             naviget ("/")
           }
          })
     
     })
     .catch(error => console.log(error));
    })
   
     }

  return (
    <div>
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        // value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0d47a1",
                    },
                    links: {
                        color: "#0d47a1",
                        distance: 120,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <div className="hero h-fit py-36">
        <div className=" flex items-center flex-wrap md:w-full justify-around">
          <div className=" w-full mx-5 text-center md:w-2/5">
            <img className=" mx-auto " src="../../../public/logo.png" alt="" />
            <h1 className="text-center font-bold text-2xl my-4">
              Join for Exclusive Deals
            </h1>
            <p>
              Unlock your dream home with us! Join now for exclusive listings,
              personalized insights, and expert guidance. Your key to finding
              the perfect place to call home starts here.
            </p>
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
                  className="input input-bordered"
                />
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Photo Url"
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
                <button
                  type="submit"
                  className={`btn bg-green disabled:text-slate-600 hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60`}
                >
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
