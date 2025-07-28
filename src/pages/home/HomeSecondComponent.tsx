export default function HomeSecondComponent() {
  return (
    <section className="py-10 p-4 w-full flex  border-t-2  xl:px-[3rem] items-center justify-center">
      <main className=" w-[70rem] relative sm:flex items-center justify-center border rounded-3xl overflow-hidden">
        <div className=" relative sm:w-[50%]  items-center border-r">
          <img src="/images/ladder.png" alt="" className="bg-tertiary w-full" />
          <h2 className="absolute top-[calc(50%-4rem)] bg-primary p-4 uppercase z-20 border-2 border-[sm:my-[4rem]] right-0 text-4xl">
            electrician
          </h2>
        </div>
        <div className="relative sm:w-[50%] flex items-center">
          <img src="/images/light.png" alt="" className="bg-primary w-full" />
          <h2 className="absolute bg-tertiary bottom-[calc(50%-5rem)] p-4 uppercase z-20 left-0 text-4xl">
            engineer
          </h2>
        </div>
      </main>
    </section>
  );
}
