import Person from "../assets/Person.png";
import hero from "../assets/hero.png";

import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import Vector5 from "../assets/Vector5.png";
import Vector6 from "../assets/Vector6.png";

export const Services2 = () => {
  return (
    <section className="relative" id="Services2">
      {/* Background Image */}
      <img
        src={hero}
        alt=""
        className="absolute inset-[0%]   md:h-[150vh] h-[143vh]  w-full object-cover z-[-10]"
      />
      <div className="flex flex-col text-center w-full mb-20 pt-20">
        <h2 className="text-sm text-white tracking-widest font-medium title-font pb-3">
          Few out of many
        </h2>
        <h1 className="sm:text-3xl text-4xl font-medium title-font text-[#247fff]">
          Waradata <span className="text-white">Services</span>
        </h1>
        <p className="pt-3 text-white">
          We provide most affordable data and airtime for MTN, GLO, AIRTEL,
          9MOBILE
          <br />
          Coming soon with subscription for TV and Electricity.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-center items-center md:flex md:px-8 lg:flex-nowrap">
        <div className="max-w-xl ">
          <img src={Person} className="" />
        </div>
        <div className="flex-none mt-0 text-white lg:mt-0">
          <ul className="grid grid-cols-2 gap-2 items-center justify-center [&>*]:bg-gray-700 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
            {/* LOGO 1 */}
            <li className="flex flex-col gap-3 items-center justify-center mx-auto">
              <div className=" bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                <img src={Vector1} className="h-[20px] " />
              </div>
              <p className="flex  text-[#ebedf0] text-xs">Browsing Data</p>
            </li>

            {/* LOGO 2 */}
            <li className="flex flex-col gap-3 items-center justify-center mx-auto">
              <div className=" bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                <img src={Vector2} className="h-[20px] " />
              </div>
              <p className="flex  text-[#ebedf0] text-xs">Airtime</p>
            </li>

            {/* LOGO 3 */}
            <li className="flex flex-col gap-3 items-center justify-center mx-auto">
              <div className=" bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                <img src={Vector3} className="h-[20px] " />
              </div>
              <p className="flex  text-[#ebedf0] text-xs">TV Subscription</p>
            </li>

            {/* LOGO 4 */}
            <li className="flex flex-col gap-3 items-center justify-center mx-auto">
              <div className=" bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                <img src={Vector4} className="h-[20px] " />
              </div>
              <p className="flex  text-[#ebedf0] text-xs">
                Electricity Subscription
              </p>
            </li>

            {/* LOGO 5 */}
            <li className="flex flex-col gap-3 items-center justify-center mx-auto">
              <div className=" bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                <img src={Vector5} className="h-[20px] " />
              </div>
              <p className="flex  text-[#ebedf0] text-xs">Resell Data</p>
            </li>

            {/* LOGO 6 */}
            <li className="flex flex-col gap-3 items-center justify-center mx-auto">
              <div className=" bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                <img src={Vector6} className="h-[20px] " />
              </div>
              <p className="flex  text-[#ebedf0] text-xs">Resell Airtime</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
