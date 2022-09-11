import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-3 md:text-8xl text-gray-600">
            Je suis <span className=" text-[#192030]">Samir</span>
          </h1>
          <h2 className="py-2 md:text-7xl text-gray-600">
            Développeur Full Stack
          </h2>
          <p className="py-8 text-xl text-gray-500 font-bold">
            Un passionné de programmation informatique depuis 2016.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full text-[#192030] shadow-md hover:shadow-sm hover:shadow-gray-800 shadow-gray-400 p-3 cursor-pointer md:scale-125 md:hover:scale-150 ease-in duration-300">
              <FaLinkedin />
            </div>

            <div className="rounded-full text-[#192030] shadow-md hover:shadow-sm hover:shadow-gray-800 shadow-gray-400 p-3 cursor-pointer md:scale-125 md:hover:scale-150 ease-in duration-300">
              <FaGithub />
            </div>

            <div className="rounded-full text-[#192030] shadow-md hover:shadow-sm hover:shadow-gray-800 shadow-gray-400 p-3 cursor-pointer md:scale-125 md:hover:scale-150 ease-in duration-300">
              <AiOutlineMail />
            </div>

            <div className="rounded-full text-[#192030] shadow-md hover:shadow-sm hover:shadow-gray-800 shadow-gray-400 p-3 cursor-pointer md:scale-125 md:hover:scale-150 ease-in duration-300">
              <FaDiscord />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
