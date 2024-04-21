import React from "react";

const HeroAbout = () => {
  return (
    <div className="container mx-auto my-12 p-4" id="about">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <img className="w-full h-auto" src="../img/heroAbout.svg" alt="" />
        </div>
        <div className="flex flex-col w-full">
          <span className="text-gray-700">Know More</span>
          <span className="text-5xl font-bold">About Us</span>
          <span className="text-lg mt-4 text-gray-800">
            At Gift Tag, we're passionate about gifts that spark joy and
            connection. We curate a unique collection of treasures to find the
            perfect present for every occasion. Explore our selection and
            discover gifts that tell a story. Founded by gifting enthusiasts, we
            believe in the power of thoughtful gifts to create lasting memories.
            <br />
            <br />
            <span className="text-light-primary font-bold text-lg sm:text-xl">
              Happy Gifting !!
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
