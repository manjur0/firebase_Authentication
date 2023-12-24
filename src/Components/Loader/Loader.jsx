import loader from "../../assets/infinite-spinner.svg";
const Loader = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <img  src={loader} alt="loader" className="w-[300px] h-[300px] mx-auto" />
    </div>
  );
};

export default Loader;
