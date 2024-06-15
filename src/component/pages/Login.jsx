import { useCallback, useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Authcontext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
const Login = ({ onClose }) => {
  const { sigIn, signInWithgoogle } = useContext(Authcontext);

  // const loaction = useLocation();
  const navigate = useNavigate();
  const trans = location.state?.trans?.pathname || "/";

  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    console.log(email, password);

    sigIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(trans, { replace: true });
        return toast.success(" success full login ");
      })
      .catch((error) => {
        console.log(error);
        return toast.error("error login plese try agin");
      });
  };

  // google login
  const handelGoogleSignWith = () => {
    signInWithgoogle().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        role: "user",
      };
      axios
        .post("http://localhost:6001/user", userInfo)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        });
    });
  };


    // animition file setup
    const particlesInit = useCallback(async (engine) => {
      // console.log(engine);
      await loadSlim(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      // await console.log(container);
    }, []);

  return (
    // <dialog id="my_modal_3" className="modal modal-middle sm:modal-middle">
    //   <div className="modal-box">
    //     <div className="flex justify-between px-3 ">
    //       <p></p>
    //       <form method="dialog">
    //         <button onClick={onClose}  className="btn btn-circle">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </form>
    //     </div>

    //     <form onSubmit={handelLogin} className="card-body " method="dialog">
    //       <h3 className="font-bold text-2xl">Please Login </h3>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Email</span>
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="email"
    //           className="input input-bordered"
    //           required
    //         />
    //       </div>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Password</span>
    //         </label>
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="password"
    //           className="input input-bordered"
    //           required
    //         />
    //         <label className="label">
    //           <a href="#" className="label-text-alt link link-hover">
    //             Forgot password?
    //           </a>
    //         </label>
    //       </div>
    //       <div className="form-control mt-6">
    //         <button type="submit" className="btn bg-green text-white">
    //           Login
    //         </button>
    //       </div>
    //     </form>
    //     <div className="text-center">
    //       {" "}
    //       Are you new here? || <a href="/signUp">Sign Up</a>
    //     </div>
    //     <div className=" mt-3   ">
    //       <div className=" w-full text-center justify-center flex gap-2 text-xl  mx-auto">
    //         <button className="btn btn-circle hover:text-white hover:bg-green bg-gray-300">
    //           <FaFacebook></FaFacebook>
    //         </button>
    //         <button
    //           onClick={handelGoogleSignWith}
    //           className="btn btn-circle hover:text-white bg-gray-300 hover:bg-green"
    //         >
    //           <FaGoogle></FaGoogle>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </dialog>
    <div>
      {/* animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "autoPlay": true,
          "background": {
            "color": {
              "value": "#fff"
            },
            "image": "",
            "position": "",
            "repeat": "",
            "size": "",
            "opacity": 10
          },
          "backgroundMask": {
            "composite": "destination-out",
            "cover": {
              "color": {
                "value": "#000"
              },
              "opacity": 5
            },
            "enable": false
          },
          "clear": true,
          "defaultThemes": {},
          "delay": 0,
          "fullScreen": {
            "enable": true,
            "zIndex": -1
          },
          "detectRetina": true,
          "duration": 0,
          "fpsLimit": 520,
          "interactivity": {
            "detectsOn": "window",
            "events": {
              "onClick": {
                "enable": false,
                "mode": []
              },
              "onDiv": {
                "selectors": [],
                "enable": false,
                "mode": [],
                "type": "circle"
              },
              "onHover": {
                "enable": true,
                "mode": "trail",
                "parallax": {
                  "enable": false,
                  "force": 2,
                  "smooth": 50
                }
              },
              "resize": {
                "delay": 0.5,
                "enable": true
              }
            },
            "modes": {
              "trail": {
                "delay": 0.005,
                "pauseOnStop": true,
                "quantity": 5,
                "particles": {
                  "color": {
                    "value": "#ff0000",
                    "animation": {
                      "enable": true,
                      "speed": 100,
                      "sync": true
                    }
                  },
                  "collisions": {
                    "enable": false
                  },
                  "links": {
                    "enable": false
                  },
                  "move": {
                    "outModes": {
                      "default": "destroy"
                    },
                    "speed": 5
                  },
                  "size": {
                    "value": {
                      "min": 2,
                      "max": 5
                    },
                    "animation": {
                      "enable": true,
                      "speed": 5,
                      "sync": true,
                      "startValue": "min",
                      "destroy": "max"
                    }
                  }
                }
              },
              "attract": {
                "distance": 800,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
              },
              "bounce": {
                "distance": 500
              },
              "bubble": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "divs": {
                  "distance": 500,
                  "duration": 0.4,
                  "mix": false,
                  "selectors": []
                }
              },
              "connect": {
                "distance": 80,
                "links": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 100,
                "links": {
                  "blink": false,
                  "consent": false,
                  "opacity": 1
                }
              },
              "push": {
                "default": true,
                "groups": [],
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "divs": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "selectors": []
                }
              },
              "slow": {
                "factor": 3,
                "radius": 800
              },
              "light": {
                "area": {
                  "gradient": {
                    "start": {
                      "value": "#ffffff"
                    },
                    "stop": {
                      "value": "#000000"
                    }
                  },
                  "radius": 1000
                },
                "shadow": {
                  "color": {
                    "value": "#000000"
                  },
                  "length": 5000
                }
              }
            }
          },
          "manualParticles": [],
          "particles": {
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "collisions": {
              "absorb": {
                "speed": 2
              },
              "bounce": {
                "horizontal": {
                  "value": 1
                },
                "vertical": {
                  "value": 1
                }
              },
              "enable": false,
              "maxSpeed": 50,
              "mode": "bounce",
              "overlap": {
                "enable": true,
                "retries": 0
              }
            },
            "color": {
              "value": "#ff0000",
              "animation": {
                "h": {
                  "count": 0,
                  "enable": true,
                  "speed": 50,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "offset": 0
                },
                "s": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                },
                "l": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                }
              }
            },
            "effect": {
              "close": true,
              "fill": true,
              "options": {},
              "type": []
            },
            "groups": {},
            "move": {
              "angle": {
                "offset": 0,
                "value": 90
              },
              "attract": {
                "distance": 200,
                "enable": false,
                "rotate": {
                  "x": 8000,
                  "y": 3000
                }
              },
              "center": {
                "x": 50,
                "y": 50,
                "mode": "percent",
                "radius": 0
              },
              "decay": 0,
              "distance": {},
              "direction": "none",
              "drift": 0,
              "enable": true,
              "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "inverse": false,
                "maxSpeed": 50
              },
              "path": {
                "clamp": true,
                "delay": {
                  "value": 0
                },
                "enable": false,
                "options": {}
              },
              "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              },
              "random": false,
              "size": false,
              "speed": 2,
              "spin": {
                "acceleration": 0,
                "enable": false
              },
              "straight": false,
              "trail": {
                "enable": false,
                "length": 10,
                "fill": {}
              },
              "vibrate": false,
              "warp": false
            },
            "number": {
              "density": {
                "enable": true,
                "width": 1920,
                "height": 1080
              },
              "limit": {
                "mode": "delete",
                "value": 0
              },
              "value": 300               
            },
            "opacity": {
              "value": {
                "min": 0.3,
                "max": 0.8
              },
              "animation": {
                "count": 0,
                "enable": true,
                "speed": 0.5,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "startValue": "random",
                "destroy": "none"
              }
            },
            "reduceDuplicates": false,
            "shadow": {
              "blur": 0,
              "color": {
                "value": "#fff"
              },
              "enable": false,
              "offset": {
                "x": 0,
                "y": 0
              }
            },
            "shape": {
              "close": true,
              "fill": true,
              "options": {},
              "type": "circle"
            },
            "size": {
              "value": {
                "min": 1,
                "max": 3
              },
              "animation": {
                "count": 0,
                "enable": true,
                "speed": 3,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "startValue": "random",
                "destroy": "none"
              }
            },
            "stroke": {
              "width": 0
            },
            "zIndex": {
              "value": 0,
              "opacityRate": 1,
              "sizeRate": 1,
              "velocityRate": 1
            },
            "destroy": {
              "bounds": {},
              "mode": "none",
              "split": {
                "count": 1,
                "factor": {
                  "value": 3
                },
                "rate": {
                  "value": {
                    "min": 4,
                    "max": 9
                  }
                },
                "sizeOffset": true,
                "particles": {}
              }
            },
            "roll": {
              "darken": {
                "enable": false,
                "value": 0
              },
              "enable": false,
              "enlighten": {
                "enable": false,
                "value": 0
              },
              "mode": "vertical",
              "speed": 25
            },
            "tilt": {
              "value": 0,
              "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
              },
              "direction": "clockwise",
              "enable": false
            },
            "twinkle": {
              "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              },
              "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              }
            },
            "wobble": {
              "distance": 5,
              "enable": false,
              "speed": {
                "angle": 50,
                "move": 10
              }
            },
            "life": {
              "count": 0,
              "delay": {
                "value": 0,
                "sync": false
              },
              "duration": {
                "value": 0,
                "sync": false
              }
            },
            "rotate": {
              "value": 0,
              "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
              },
              "direction": "clockwise",
              "path": false
            },
            "orbit": {
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": false
              },
              "enable": false,
              "opacity": 1,
              "rotation": {
                "value": 45
              },
              "width": 1
            },
            "links": {
              "blink": false,
              "color": {
                "value": "random"
              },
              "consent": false,
              "distance": 100,
              "enable": true,
              "frequency": 1,
              "opacity": 1,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "#000"
                },
                "enable": false
              },
              "triangles": {
                "enable": false,
                "frequency": 1
              },
              "width": 1,
              "warp": false
            },
            "repulse": {
              "value": 0,
              "enabled": false,
              "distance": 1,
              "duration": 1,
              "factor": 1,
              "speed": 1
            }
          },
          "pauseOnBlur": true,
          "pauseOnOutsideViewport": true,
          "responsive": [],
          "smooth": false,
          "style": {},
          "themes": [],
          "zLayers": 100,
          "emitters": [],
          "motion": {
            "disable": false,
            "reduce": {
              "factor": 4,
              "value": true
            }
          }
        }}
      />


<div className="hero h-fit py-32">
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
          <form onSubmit={handelLogin} className="card-body " method="dialog">
          <h3 className="font-bold text-2xl">Please Login </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-green text-white">
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          {" "}
          Are you new here? || <a href="/signUp">Sign Up</a>
        </div>
        <div className=" mt-3 mb-4  ">
          <div className=" w-full text-center justify-center flex gap-2 text-xl  mx-auto">
            <button className="btn btn-circle hover:text-white hover:bg-green bg-gray-300">
              <FaFacebook></FaFacebook>
            </button>
            <button
              onClick={handelGoogleSignWith}
              className="btn btn-circle hover:text-white bg-gray-300 hover:bg-green"
            >
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
