import React from "react";
import shoaib from "../hero/hero.jpg";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="lg:flex w-full top-0 left-0 ">
        <div className=" relative  xl:w-[50%]  opacity-90 lg:flex flex-wrap lg:justify-center lg:px-[96px] md:px-[126px] px-[20px]">
          <Image
            src={shoaib}
            width={500}
            height={300}
            alt={"shoiab memon"}
            className="rounded-lg "
          />
          <div className=" absolute z-10  bg-black bottom-0 right-0 rounded-lg p-1 sm:p-3 lg:p-5 text-center md:mr-14 opacity-75">
            <p className="text-7xl text-white font-bold">8+</p>
            <p className="text-1xl text-white mt-5">Years Exprience</p>
          </div>
        </div>

        <div className="lg:w-[50%] md:px-[96px] px-[20px]">
          <div>
            <h1 className="text-5xl  text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
              About Me
            </h1>
          </div>
          <p className="text-4xl lg:text-6xl xl:text-5xl text-gray-900 md:mt-5 lg:mt-2 font-bold">
            Welcome to Tonu, Best Software Services
          </p>
          <p className="text-3xl text-gray-400 mt-5 font-semibold font-serif">
            I have 8+ years of experiences in Software Development for give you
            better services
          </p>
          <p className="text-2xl mt-5">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite
          </p>
          <div className="flex  md:space-x-2 space-x-5">
            <div className="box-decoration-clone mt-5">
              <p className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl font-bold">
                500+
              </p>
              <p className="text-1xl text-gray-500">Projects Completed</p>
            </div>
            <div className="box-decoration-clone mt-5">
              <p className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl   font-bold">
                52+
              </p>
              <p className="text-1xl text-gray-500">Awards Win</p>
            </div>{" "}
            <div className="box-decoration-clone mt-5">
              <p className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl   font-bold">
                2M+
              </p>
              <p className="text-1xl text-gray-500">Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;