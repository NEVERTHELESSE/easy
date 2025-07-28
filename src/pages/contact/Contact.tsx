import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <main className="xl:px-10 py-[5rem] w-full flex items-center justify-center">
      <form className="w-full p-2 md:w-[35rem] shadow bg-black  rounded-3xl">
        <h3 className="text-2xl md:text-4xl border-b text-center">
          Send your feed back to us, we will reply as soon as possible
        </h3>
        <div className="mt-4">
          <label htmlFor="full Name">Full Name</label>
          <input
            type="text"
            placeholder="Joe doe"
            className="w-full  p-4  rounded-2xl bg-gray-800"
          />
        </div>
        <div className="mt-3 md:mt-4">
          <label htmlFor="full Name">Email Address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            className="w-full  p-4 rounded-2xl bg-gray-800"
          />
        </div>
        <div className=" mt-3 md:mt-4">
          <label htmlFor="full Name">Message</label>
          <textarea className="w-full h-[10rem] rounded-2xl p-3 bg-gray-800"></textarea>
        </div>
        <button className="bg-tertiary p-2 rounded-2xl  w-full py-4 my-2">
          Submit
        </button>
        <p className="text-center">or</p>
        <div className="flex items-center justify-between my-4">
          <div className="w-[calc(100%*0.5-6rem)] h-1 bg-primary"></div>
          <Link to="/whatsapp">Chat us on whatsapp</Link>
          <div className="w-[calc(100%*0.5-6rem)] h-1 bg-primary"></div>
        </div>
      </form>
    </main>
  );
}
