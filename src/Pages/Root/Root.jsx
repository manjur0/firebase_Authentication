import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
