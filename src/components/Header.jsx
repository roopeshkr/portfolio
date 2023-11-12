import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Roopesh Rokade");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Projects",
      link: "/projects",
      id: 4,
    },
    {
      title: "Certificates",
      link: "/certificates",
      id: 5,
    },
    {
      title: "Resume",
      link: "/resume",
      id: 6,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 7,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });
  return (
    <>
      <div className="main flex justify-between border h-20 items-center px-16 bg-gray-100">
        <div>
          {/* brand logo  */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
        <div>
          {/* button for hire me  */}
          <a href={actionButton.link} className="px-4 py-2 bg-orange-500 rounded-full shadow text-1xl">
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
