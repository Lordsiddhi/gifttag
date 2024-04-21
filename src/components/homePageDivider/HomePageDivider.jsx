import React from "react";

const HomePageDivider = () => {
  const clientDetails = [
    {
      id: 1,
      number: "300 +",
      details: "Daily Clients",
    },
    {
      id: 2,
      number: "500 +",
      details: "Products",
    },
    {
      id: 3,
      number: "250 +",
      details: "Happy Clients",
    },
  ];

  return (
    <div className="bg-[#001219] text-white my-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 place-items-center lg:grid-cols-3 md:grid-cols-2 gap-2 p-12">
          {clientDetails.map((item) => {
            return (
              <div
                className="flex flex-col text-center justify-center"
                key={item.id}
              >
                <span className="text-base md:text-2xl font-bold">
                  {item.number}
                </span>
                <span className="text-gray-400 text-xs sm:text-xl">
                  {item.details}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageDivider;
