import { useContext, useCallback } from "react";
import { Authcontext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const SignUp = () => {
  // animition
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  //
  const { creatUser, updateProfileData } = useContext(Authcontext);
  const naviget = useNavigate();
  const handelSignup = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photoURL = from.photo.value;

    const data = {
      name,
      email,
      photoURL,
      password,
    };
    // console.log(data);

    // console.log(userInfo);
    creatUser(data.email, data.password, data.name, data.photoURL).then(
      (result) => {
        const loggedUser = result.user;
        //  console.log(loggedUser)
        updateProfileData(data.name, data.photoURL)
          .then(() => {
            // send database information
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
              role: "user",
            };
            axios.post("http://localhost:6001/user", userInfo).then((res) => {
              if (res.data.insertedId) {
                //  console.log('user add to the database');
                toast("Success full Register!", {
                  icon: "👏",
                });
                naviget("/");
              }
            });
          })
          .catch((error) => console.log(error));
      }
    );
  };

  return (
    <div>
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
            "opacity": 1
          },
          "backgroundMask": {
            "composite": "destination-out",
            "cover": {
              "color": {
                "value": "#000"
              },
              "opacity": 1
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
          "fpsLimit": 120,
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
                  "smooth": 10
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
                      "speed": 400,
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
                    "speed": 2
                  },
                  "size": {
                    "value": {
                      "min": 1,
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
                "distance": 200,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
              },
              "bounce": {
                "distance": 200
              },
              "bubble": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "divs": {
                  "distance": 200,
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
                "radius": 200
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
                  "length": 2000
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
                  "x": 3000,
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
              "value": 100
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
                "value": "#000"
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
