const AboutSection = () => {
  return (
    <div className="w-[80%] mx-auto flex justify-between items-center my-20 ">
      <div className="">
        <h1 className="text-6xl font-bold mb-3 line-height-[2]">About Us</h1>
        <button className="btn bg-black hover:text-black text-white mt-2">Let’s Talk Us</button>
      </div>
      <div>
        <video
          autoPlay
          loop
          muted
          src={"https://youtu.be/AT6oSIDbGkw"}
          width="600"
          height="288"
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutSection;
