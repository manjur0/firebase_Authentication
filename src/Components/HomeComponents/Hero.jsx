const Hero = () => {
  return (
    <div className="w-[80%] mx-auto flex justify-center items-center my-20">
      <div className="bg-[url(https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/hero/hero-one-img-1.png)]">
        <h1 className="text-6xl font-bold mb-3 line-height-[2]">
          Brand, Design & <br /> Development <br /> Agency
        </h1>
        <p className="text-lg w-[50%] my-6">
          Sit amet consectetur adipiscing elit sed do eiusmod tem porincididunt
          ut labore et dolore magna aliqua. Quis psum suspendisse ultrices
          gravida commodo viverra
        </p>
        <button className="btn bg-black hover:text-black text-white mt-2">
          Let’s Talk Us
        </button>
      </div>
      <div>
        <img
          className="rounded-[80px]"
          src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/hero/hero-one-img-2.jpg"
          alt="here cutting images"
        />
      </div>
    </div>
  );
};

export default Hero;
