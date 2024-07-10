import ReadMoreReadLess from "../components/ReadMoreReadLess";

const Landing = () => {
  return (
    <div className="bg-cover bg-indexbg">
      <div className="max-w-7xl mx-auto ">
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
