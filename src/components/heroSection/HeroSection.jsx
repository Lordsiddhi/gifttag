import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex mt-4 flex-col lg:flex-row items-center gap-x-8">
        <div className="w-[70%] flex flex-col gap-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Discover Joyful Moments with Unique{" "}
            <span className="text-light-primary">Gifts</span> & Beautiful{" "}
            <span className="text-light-primary">Stationary</span> {""}
            Creations!
          </h1>
          <Link to="/allproduct" className="w-max">
            <Button
              type="button"
              size="sm"
              ripple="true"
              className="bg-light-primary lg:text-lg shadow-sm w-max"
            >
              <span>Explore Now</span>
            </Button>
          </Link>
        </div>
        <div>
          <img className="w-full h-auto" src="../img/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
