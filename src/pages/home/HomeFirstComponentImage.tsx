import Image from "../../components/Image";

export default function HomeFirstComponentImage() {
  return (
    <main className="relative  mx-6">
      <h1 className="text-5xl md:text-3xl xl:text-[8rem] w-[70rem] font-extrabold text-gray-100 absolute left-0 top-10 z-[-1] opacity-40">
        Electrician
      </h1>
      <div className="flex items-center">
        <div>
          <div className="h-[16rem] my-2 w-[12rem] bg-green-900  rounded-2xl border-2 border-tertiary">
            <Image src="/images/blender2.png" />
          </div>
          <div className="h-[16rem] my-2 w-[12rem] bg-purple-900  rounded-2xl border-2 border-tertiary">
            <Image src="/images/fan2.png" />
          </div>
        </div>
        <div className="mx-2">
          <div className="h-[14rem] my-2 w-[12rem] bg-blue-900  rounded-2xl border-2 border-tertiary">
            <Image src="/images/socket.png" />
          </div>
          <div className="h-[14rem] my-2 w-[12rem] bg-yellow-900  rounded-2xl border-2 border-tertiary">
            <Image src="/images/kettle.png" />
          </div>
        </div>
        <div className="h-[20rem] my-2 w-[15rem] bg-orange-900  rounded-2xl border-2 border-tertiary">
          <Image src="/images/plier.png" />
        </div>
      </div>
    </main>
  );
}
