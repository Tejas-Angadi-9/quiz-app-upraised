import React from "react";
import upraisedLogo from "../images/upraised-img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-evenly gap-20 bg-gradient-to-t from-[#AF9CF3]">
      <Link to='/'>
        <img
          src={upraisedLogo}
          alt="upraised logo"
          width={"200px"}
          height={"70px"}
          loading="lazy"
        />
      </Link>

      <div className=" bg-white w-[250px] h-[250px] text-[50px] font-bold text-[#FF3B3C] flex items-center justify-center rounded-full shadow-xl">
        <h1>Quiz</h1>
      </div>

      <Link to="/questions">
        <button className="bg-red-500 flex items-center justify-center w-[290px] h-[65px] text-[30px] text-white font-semibold rounded-[50px] mb-[3rem]">Start</button>
      </Link>
    </div>
  );
};

export default Home;
