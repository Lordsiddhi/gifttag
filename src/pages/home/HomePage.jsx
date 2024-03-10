import Category from "../../components/category/Category";
import Contact from "../../components/contact/Contact";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageDivider from "../../components/homePageDivider/HomePageDivider";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <HomePageDivider />
      <HeroAbout />
      <Testimonial />
      <Contact />
      {/* 
      <Track />
      <Category />
      <HomePageProductCard />
      */}
    </Layout>
  );
};

export default HomePage;
