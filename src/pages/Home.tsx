
import { Link } from "react-router";

function Home() {
  return (
    <div className="w-[90%] flex flex-col m-auto items-center text-center mt-2 gap-4">
      <img src="/nysc.svg" alt="nysc logo" className="w-1/4 m-auto" />
      <section className="flex flex-col justify-between">
        <h1 className="text-2xl font-poppins font-bold text-green-800">
          Welcome to{" "}
          <span className="text-3xl text-yellow-600">CorperSnap</span>{" "}
          <span className="text-3xl text-yellow-600">POP Flyers</span> made
          Simple
        </h1>
        <p className="mt-4 font-inter text-gray-600">
          Celebrate your NYSC journey in style with custom POP flyers.
        </p>
      </section>
      <img src="/logo.png" alt="CorperSnap Logo" />
      <section className="flex flex-col justify-center items-center gap-6">
        <p className="font-inter text-gray-600">
          Celebrate your NYSC POP with custom flyer you can share on social
          media in seconds
        </p>
        <Link
          to="/Auth"
          className="bg-green-800 text-white p-4 rounded-full w-full"
        >
          Get Started
        </Link>
        {/* <p className="text-xs font-inter text-gray-600 pb-4">Used by over 100+ corps members nationwide!</p> */}
      </section>
    </div>
  );
}

export default Home;
