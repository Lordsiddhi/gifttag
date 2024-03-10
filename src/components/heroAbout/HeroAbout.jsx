import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  return (
    <div className="container mx-auto my-12 p-4" id="about">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <img className="w-full h-auto" src="../img/about.png" alt="" />
        </div>
        <div className="flex flex-col w-full">
          <span className="text-gray-700">History</span>
          <span className="text-5xl font-bold">About Us</span>
          <span className="text-lg mt-4 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            distinctio cumque fugiat non, hic rerum laborum aperiam, officiis
            accusantium optio veniam repellat neque? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Recusandae quaerat ad assumenda
            dolorum, itaque enim quibusdam porro culpa quae, qui impedit sed ab!
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
