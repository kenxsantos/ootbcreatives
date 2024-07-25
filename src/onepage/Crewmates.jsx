import React from "react";
import CrewmatesCard from "../components/CrewmatesCard";

const Crewmates = () => {
  return (
    <div className=" max-w-screen-2xl bg-clientsbg h-screen mx-auto bg-cover">
      <div className="w-full mx-auto pt-28">
        <section className="mx-auto text-center flex flex-col justify-center">
          <h1 className="font-metropolis text-white text-3xl font-bold mx-auto text-center">
            It&apos;s always a never ending fun journey with OOTB!
          </h1>
          <h2 className="text-white font-metropolis font-bold text-3xl">
            Meet our{" "}
            <span className="text-orange ">out-of-the-box witteam</span> and
            discover how far we can go.
          </h2>
        </section>
        <section className="mt-16 w-full">
          <CrewmatesCard />
        </section>
      </div>
    </div>
  );
};

export default Crewmates;
