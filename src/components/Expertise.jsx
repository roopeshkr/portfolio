import { useState } from "react";
import bannerBackground from "../assets/banner_Wallpaper.svg";
const Expertise = () => {
  const [expertise, setExpertise] = useState({
    title: `I love these technologies`,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
      autem facere molestias libero eaque praesentium, dignissimos
      dolores, cum nisi rerum, modi corporis eligendi harum. Ut
      provident saepe in et ipsum.`,
    actionButton: {
      title: `Hire Me`,
      link: ``,
    },
    skills: [
      {
        id: 0,
        name: "Core Java",
      },
      {
        id: 1,
        name: "Spring Framework",
      },
      {
        id: 2,
        name: "Spring Boot Framework",
      },
      {
        id: 3,
        name: "Spring Security",
      },
      {
        id: 4,
        name: "C++",
      },
      {
        id: 5,
        name: "JavaScript",
      },
      {
        id: 6,
        name: "HTML",
      },
      {
        id: 7,
        name: "CSS",
      },
      {
        id: 8,
        name: "Bootstrap",
      },
      {
        id: 9,
        name: "Tailwand CSS",
      },
      {
        id: 10,
        name: "ReactJs",
      },
      {
        id: 11,
        name: "ExpressJs",
      },
      {
        id: 12,
        name: "NodeJs",
      },
      {
        id: 13,
        name: "Angular",
      },
      {
        id: 14,
        name: "Mysql",
      },
      {
        id: 15,
        name: "MongoDB",
      },
    ],
  });
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl font-bold underline  text-center">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">{expertise.title}</h1>
              <p>{expertise.description}</p>
              <button className=" text-1xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                {expertise.actionButton.title}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              {expertise.skills.map((skill) => (
                <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
