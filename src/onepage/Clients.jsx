import ClientsOnboard from "../components/ClientsOnboard";
import RecentlyAdded from "../components/RecentlyAdded";

const Clients = () => {
  return (
    <div className="bg-clients h-screen mx-auto bg-cover bg-center overflow-visible">
      <div className="w-full m-auto pt-32 h-full flex flex-col justify-center">
        <section className="mx-auto text-center flex flex-col justify-center">
          <h1 className="font-metropolis text-white text-4xl font-bold">
            We&apos;ve brought so many brands interstellar!
          </h1>
          <h2 className="text-orange-red font-metropolis font-bold text-4xl ">
            Let our works do the talking.
          </h2>
        </section>
        <section className="mt-12 px-12">
          <RecentlyAdded />
        </section>
        <section className="mt-10 mb-20">
          <ClientsOnboard />
        </section>
      </div>
    </div>
  );
};

export default Clients;
