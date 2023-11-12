import bannerImage from "../assets/photo.jpg";
import bannerBackground from "../assets/banner_Wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el=useRef(null)
  
  useEffect(()=>{
    const typed=new Typed(el.current,{
      strings: ["Frontend Developer", "Backend Developer", "Java Full Stack Developer", "Software Developer"], 
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });

    return ()=>{
      typed.destroy();
    }
  })

  return (
    <>
      <div
        className="main-container flex items-center py-16"
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
      >
        {/* first dabba  */}
        <div className="w-full flex items-center justify-center text-white">
          {/* text  */}
          <div className="w-2/3 ms-10 space-y-2">
            <h3 className=" text-3xl font-semibold">Hi, I am</h3>
            <h1 className=" text-5xl font-bold">Roopesh Rokade</h1>
            <h2 className=" text-3xl">And I am a <span ref={el} className="font-bold underline"></span></h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              accusantium fuga quos, vitae debitis nobis vel mollitia unde saepe
              distinctio commodi eveniet. Delectus eaque tenetur amet maxime
              magnam accusantium labore minus optio natus rerum, quo libero
              porro modi repellendus dolor reiciendis? Doloribus, rerum nisi.
              Aspernatur consequatur quaerat amet mollitia minus!
            </p>
            <div className="icons-container flex space-x-5">
              <a className="border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500">
                <i className="fa-brands text-4xl fa-instagram"></i>
              </a>
              <a className="border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500">
                <i className="fa-brands text-4xl fa-github"></i>
              </a>
              <a className="border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500">
                <i className="fa-brands text-4xl fa-linkedin-in"></i>
              </a>
              <a className="border cursor-pointer px-3 py-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500">
                <i className="fa-solid text-4xl fa-code"></i>
              </a>
            </div>
            <br />
            <a
              href="/contact"
              className="text-1xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* second dabba  */}
        <div className="w-full flex justify-center">
          {/* image  */}
          <img
            src={bannerImage}
            alt=""
            className="rounded-full shadow m-5 h-96"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
