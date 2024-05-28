import Logo from "../assets/logo.png";
import META from "../assets/META.png";

import insta from "../assets/IG.png";
import YOUTUBE from "../assets/YOUTUBE.png";
import X from "../assets/X.png";
import Flutter from "../assets/Flutter.png";

export const Footer = () => {
  const footerNavs = [
    {
      href: "",
      name: "Home",
    },
    {
      href: "",
      name: "Contact Us",
    },
    {
      href: "",
      name: "Services",
    },
    {
      href: "",
      name: "Feedback",
    },
  ];

  return (
    <footer className="text-gray-500 bg-blue-950 px-4 py-5 w-full  mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src={Logo} className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Empowering the people through affordable Connectivity...
        </p>
        <p className="mx-auto flex flex-col md:items-center sm:items-start lg:text-center text-2xl text-white lg:pt-5">
          Powered by <img src={Flutter} />
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className=" hover:text-gray-100">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex  ">
        <div className="mt-4 sm:mt-0 text-blue-200">
          &copy; WaraData All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="">
                <img src={YOUTUBE} className="svg-icon w-6 h-6 text-blue-500" />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="">
                <img src={insta} className="svg-icon w-6 h-6 text-blue-500" />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="">
                <img src={X} className="svg-icon w-6 h-6 text-blue-500" />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="">
                <img src={META} className="svg-icon w-6 h-6 text-red-600" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
