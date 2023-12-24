import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div>{navigation.state === "loading" ? <Loader /> : <Navbar />}</div>

      <div className="">
        {navigation.state === "loading" ? <Loader /> : <Outlet></Outlet>}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
