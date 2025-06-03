import { Link } from "react-router";

function Home() {
  return (
    <div className="w-[90%] max-w-md mx-auto flex flex-col items-center text-center mt-2 gap-4 px-4 sm:px-6 md:px-8">
      <img 
        src="/nysc.svg" 
        alt="nysc logo" 
        className="w-1/4 min-w-[80px] max-w-[120px] m-auto" 
      />
      
      <section className="flex flex-col justify-between">
        <h1 className="text-xl sm:text-2xl font-poppins font-bold text-green-800 leading-tight">
          Welcome to{" "}
          <span className="text-2xl sm:text-3xl text-yellow-600">CorperSnap</span>{" "}
          <span className="text-2xl sm:text-3xl text-yellow-600">POP Flyers</span> made
          Simple
        </h1>
        <p className="mt-4 font-inter text-gray-600 text-sm sm:text-base">
          Celebrate your NYSC journey in style with custom POP flyers.
        </p>
      </section>
      
      <img 
        src="/logo.png" 
        alt="CorperSnap Logo" 
        className="max-w-[200px] w-full h-auto"
      />
      
      <section className="flex flex-col justify-center items-center gap-6 w-full">
        <p className="font-inter text-gray-600 text-sm sm:text-base px-2">
          Celebrate your NYSC POP with custom flyer you can share on social
          media in seconds
        </p>
        <Link
          to="/Auth"
          className="bg-green-800 text-white p-4 rounded-full w-full max-w-xs text-center font-medium hover:bg-green-700 transition-colors"
        >
          Get Started
        </Link>
        {/* <p className="text-xs font-inter text-gray-600 pb-4">Used by over 100+ corps members nationwide!</p> */}
      </section>
    </div>
  );
}

export default Home;