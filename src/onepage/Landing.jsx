import ReadMoreReadLess from "../components/ReadMoreReadLess";
const Landing = () => {
  return (
    <div className="relative bg-cover bg-indexbg">
      <img
        src="../../public/assets/ShadowOverlay.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative max-w-7xl mx-auto z-10">
        <div>
          <section className="mb-4">
            <h1 className="pt-[20rem] text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
              <span>BOLD IDEAS</span>
              <br />
              <span>STELLAR RESULTS</span>
            </h1>
          </section>
          <section>
            <ReadMoreReadLess />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
