import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../images/question-img.png";
import ReactSpeedometer from "react-d3-speedometer";
import SemiCircle from "../components/SemiCircle";
import greenDot from "../images/green dot.png";
import redDot from "../images/red dot.png";

const Result = ({
  score,
  questions,
  setCurrentQuestion,
  setshowFinalResults,
  setScore,
}) => {
  let finalScore = (score / questions.length) * 100;
  let finalCorrect = score;
  let finalInCorrect = questions.length - score;

  function restartGame() {
    setScore(0);
    setCurrentQuestion(0);
    setshowFinalResults(false); //! this will make sure that we start from the questions not directly to the results as earlier it was set to true
  }

  return (
    <div className="bg-[#AF9CF3]">
      <img src={bgImg} alt="bg-img" />
      <div className="bg-white flex flex-col mt-[19px] items-center rounded-[40px] h-[1000px]">
        <h2 className="mt-10 text-[30px] font-bold">Your Result</h2>
        {/* score in percentage */}
        <div className="w-[150px] h-[150px] text-center rounded-full flex flex-col justify-center items-center mt-10 mb-[10px] relative">
          <div className="absolute mt-[-100px] z-2">
            <SemiCircle finalScore={finalScore} />
          </div>

          <div className="z-20">
            <ReactSpeedometer
              maxSegmentLabels={0}
              segments={10}
              value={finalScore}
              needleColor="#333"
              minValue={0}
              maxValue={100}
              width={200}
              height={200}
              startColor="transparent"
              endColor="transparent"
              currentValueText=""
            />
          </div>
        </div>

        {/* Number of correct and incorrect */}
        <div>
          <ul className="relative ml-10 flex flex-col gap-5 justify-start mr-5">
            <li className="text-[19px] w-[300px] h-[70px] pl-14 flex justify-left items-center bg-[#e1fcee] gap-4 rounded-[10px] font-bold">
              {/* <div className="absolute bg-transparent w-5 h-5 rounded-full left-0 ml-3 my-2 border-2 bg-[#43b479] border-none"></div> */}
              <img
                src={greenDot}
                alt=""
                width={"15em"}
                loading="lazy"
                className="mt-[-2px] ml-[-2.5rem]"
              />
              {finalCorrect} <span className="font-normal">Correct</span>
            </li>
            <li className="text-[19px] w-[300px] h-[70px] pl-14 flex justify-start items-center bg-[#fdcece] gap-4 rounded-[10px] font-bold">
              {/* <div className="absolute bg-transparent w-5 h-5 rounded-full left-0 ml-3 my-2 border-2 bg-red-500 border-none"></div> */}
              <img
                src={redDot}
                alt=""
                width={"15em"}
                loading="lazy"
                className="mt-[-2px] ml-[-2.5rem]"
              />
              {finalInCorrect} <span className="font-normal">Incorrect</span>
            </li>
          </ul>
        </div>

        {/* Start again button */}
        <Link to="/">
          <button
            onClick={restartGame}
            className="bg-red-500 ml-6 flex items-center justify-center w-[290px] h-[65px] text-[28px] text-white font-semibold rounded-[50px] relative mt-[40px]">
            Start Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
