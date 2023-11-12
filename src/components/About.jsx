import { useState } from "react";
import bannerImage from "../assets/photo-2.jpg";
const About = () => {
    const [data,setData]=useState(
        {
            image:bannerImage,
            title:"Java Developer & Android Developer",
            desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae in obcaecati sint harum eum facere necessitatibus
            laborum mollitia blanditiis dicta!`,
            desc2:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            mollitia sunt, obcaecati repudiandae quae est. Error cum
            reprehenderit illum voluptate maiores enim nobis velit. Est
            nobis deleniti cupiditate quia inventore!`,
            actionButton:{
                title:"Read More..",
                link:'/readmore'
            }

        }
    )
  return (
    <>
      <div className="main-container bg-gray-100 border py-8">
        <h1 className="text-4xl pb-16 font-bold underline text-center">
          About Me
        </h1>
        <div className="flex items-center">
          <div className="w-full flex justify-center ">
            {/* image container  */}
            <img
              src={data.image}
              alt="Roopesh Rokade"
              className="rounded-full shadow h-96 w-fit"
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3 ">
              {/* text container  */}
              <h1 className="text-3xl font-semibold">
                {data.title}
              </h1>
              <p>
                {data.desc1}
              </p>
              <p>
                {data.desc2}
              </p>
              <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow-lg">{data.actionButton.title}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
