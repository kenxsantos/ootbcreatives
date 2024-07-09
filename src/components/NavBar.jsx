import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white flex justify-evenly items-center font-jost text-md">
          <section>SERVICES</section>
          <section className="flex flex-col leading-none">
            <span>CLIENTS</span>
            <span>ONBOARD</span>
            <img
              src="/public/assets/flare.png"
              alt=""
              srcset=""
              className="w-44 absolute left-[345px] top-[35px]"
            />
          </section>
          <section>CREWMATES</section>
          <section className="flex flex-col leading-none">
            <span>OOTB</span>
            <span>ACADEMY</span>
          </section>
          <section>CAREERS</section>
          <section>RESOURCES</section>
          <section>RADIO US</section>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
