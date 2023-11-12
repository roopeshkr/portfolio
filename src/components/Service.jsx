import { useState } from "react";

const Services = () => {
  const [data, setData] = useState([
    {
      id: 0,
      title: `Web Development`,
      icon:`fa-brands fa-aws text-5xl`,
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatem repudiandae mollitia deserunt sint
                dignissimos culpa facere nemo provident facilis?`,
      actionButton: {
        title: `Check`,
        link: "",
      },
    },
    {
      id: 1,
      title: `Android Development`,
      icon:`fa-solid fa-mobile text-5xl`,
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatem repudiandae mollitia deserunt sint
                dignissimos culpa facere nemo provident facilis?`,
      actionButton: {
        title: `Check`,
        link: "",
      },
    },
    {
      id: 2,
      title: `Backend Development`,
      icon:`fa-solid fa-server text-5xl`,
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatem repudiandae mollitia deserunt sint
                dignissimos culpa facere nemo provident facilis?`,
      actionButton: {
        title: `Check`,
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-8">
        <h1 className="text-4xl font-bold text-center underline">
          My services
        </h1>
        <div className="services-container flex mt-10 space-x-5 px-10">
          {data.map((service) => (
            <div className="cursor-pointer hover:bg-gray-100 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center w-full">
              <i class={service.icon}></i>
              <h1 className="text-2xl">{service.title}</h1>
              <p>{service.description}</p>
              <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">{service.actionButton.title}</button>
            </div>
          ))}

         
        </div>
      </div>
    </>
  );
};

export default Services;
