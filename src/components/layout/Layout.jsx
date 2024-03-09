import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="main-content min-h-screen">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
