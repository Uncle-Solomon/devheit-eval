import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <div className="bg-landing bg-cover bg-center h-screen w-screen opacity-90">
      <div className=" bg-black/85 w-screen h-screen flex justify-center items-center">
        <div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-center font-medium text-white leading-20 uppercase">
            Contaxt
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-center  text-white mt-1 mb-12 italic">
            <TypeAnimation
              sequence={[
                200,
                "...a little manager for all your contacts",
                8000,
                "",
              ]}
              cursor={true}
              repeat={Infinity}
              speed={10}
            />
          </p>
          <div className="flex justify-between w-full md:w-[75%] mx-auto">
            <button className="bg-[#000800] border-none text-sm md:text-lg lg:text-xl text-white rounded-lg p-4 uppercase cursor-pointer shadow-md mt-5 shadow-white/15 hover:scale-105 font-medium">
              <Link to="/signup"> Sign Up </Link>
            </button>
            <button className="bg-[#000800] border-none text-sm md:text-lg lg:text-xl text-white rounded-lg p-4 uppercase cursor-pointer shadow-md mt-5 shadow-white/15 hover:scale-105 font-medium">
              <Link to="/login"> Login </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
