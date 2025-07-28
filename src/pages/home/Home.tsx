import PrimaryButton from "../../components/PrimaryButton";
import HomeFirstComponentImage from "./HomeFirstComponentImage";
import HomeSecondComponent from "./HomeSecondComponent";
import HomeThirdComponent from "./HomeThirdComponent";

export default function Home() {
  return (
    <main>
      <section className="h-[100vh] p-2 xl:px-10 sm:py-[5rem] ">
        <img
          src="/images/ladder.png "
          className="absolute opacity-40 z-[-1] h-[40rem]"
        />
        <div id="bg" className="flex justify-around  rounded-2xl ">
          <main className=" w-[50rem]">
            <h3 className="text-2xl text-primary sm:my-[4rem]">
              Easy Electrician
            </h3>
            <h2 className="text-3xl sm:text-6xl my-6 font-bold sm:my-[4rem]">
              Electrician
            </h2>
            <h1 className="text-7xl font-bold uppercase text-tertiary sm:my-[4rem]">
              powering your world
            </h1>
            <p className="my-2 md:text-2xl sm:my-[3rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui,
              sequi eos nesciunt magni itaque, adipisci sit delectus quis quia
              incidunt. Maiores deserunt doloremque beatae enim ea excepturi!
              Incidunt eligendi voluptatibus at vitae dignissimos voluptates
              quia est recusandae earum! Iste voluptatem esse a nemo perferendis
              velit laudantium? Officiis, earum accusamus.
            </p>
            <button className="text-2xl rounded-full px-4 py-2 my-2 bg-primary animate-bounce">
              Contact Now
            </button>
            <div className="flex p-2 bg-tertiary my-6 justify-around">
              <h2 className="">Monday-Saturday</h2>
              <h2 className="">7:00 AM - 7:00PM</h2>
              <h2 className="">
                Sunday: <span className="text-red-600">Closed</span>
              </h2>
            </div>
          </main>
          <HomeFirstComponentImage />
        </div>
      </section>
      <HomeSecondComponent />
      <HomeThirdComponent />
      <PrimaryButton />
    </main>
  );
}
