import { Link } from "react-router-dom";

export default function HomeThirdComponent() {
  const services = [1, 2, 3];
  return (
    <main className="p-10 border-t flex flex-col items-center">
      <h3 className="text-4xl text-center capitalize font-bold">
        what we can do for you
      </h3>
      <div className="flex justify-between my-[4rem]">
        {services.map((service, index) => (
          <div
            className="w-[25rem] h-[25rem] border rounded-3xl relative overflow-hidden mx-2 hover:saturate-150 duration-700"
            key={index}
          >
            <div className="absolute left-0 py-2 px-10 z-10 bottom-0 bg-[#00000034]">
              <h2 className="text-4xl font-bold my-8">Wiring</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                illum earum, vel eveniet et error molestias unde veniam quia
                aperiam, fugiat ratione mollitia odio sunt amet? Nihil aut
                commodi nam!
              </p>
              <Link to="/services?type='wiring" className="text-primary my-8">
                Learn More
              </Link>
            </div>
            <div className="w-full h-full  bg-[url('/images/electrician.jpg')] bg-cover bg-center"></div>
          </div>
        ))}
      </div>
      <Link to="/services" className="capitalize text-2xl animate-bounce">
        view all our services
      </Link>
    </main>
  );
}
