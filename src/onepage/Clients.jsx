import ClientsOnboard from "../components/ClientsOnboard";
import RecentlyAdded from "../components/RecentlyAdded";
const Clients = () => {
  return (
    <div className=" max-w-screen-2xl bg-clientsbg h-full mx-auto bg-cover">
      <div className="w-full mx-auto pt-40 flex flex-col px-12">
        <section className="mx-auto text-center flex flex-col justify-center">
          <h1 className="font-metropolis text-white text-4xl font-bold">
            We've brought so many brands interstellar!
          </h1>
          <h2 className="text-orange font-metropolis font-bold text-3xl">
            Let our works do the talking.
          </h2>
        </section>
        <section className="mt-12">
          <RecentlyAdded />
        </section>
        <section className="mt-12">
          <ClientsOnboard />
        </section>
        <section>
          <h1 className="font-metropolis text-white text-3xl font-bold mx-auto my-20 text-center">
            It's always a never ending fun journey with OOTB!
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Clients;
