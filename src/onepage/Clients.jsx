import ClientsOnboard from "../components/ClientsOnboard";
import RecentlyAdded from "../components/RecentlyAdded";

const Clients = () => {
  return (
    <div className="max-w-screen-2xl bg-blurred-planets h-screen mx-auto bg-cover overflow-visible">
      <div className="w-full mx-auto pt-28 flex flex-col xs:px-4 md:px-12">
        <section className="mx-auto text-center flex flex-col justify-center">
          <h1 className="font-metropolis text-white text-4xl font-bold">
            We&apos;ve brought so many brands interstellar!
          </h1>
          <h2 className="text-orange font-metropolis font-bold text-3xl">
            Let our works do the talking.
          </h2>
        </section>
        <section className="mt-12">
          <RecentlyAdded />
        </section>
        <section className="mt-10">
          <ClientsOnboard />
        </section>
      </div>
    </div>
  );
};

export default Clients;
