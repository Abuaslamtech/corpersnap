import { Clock, Sparkles } from "lucide-react";
import Footer from "./Footer";

function ComingSoon() {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 via-white to-yellow-50 flex flex-col">
      {/* Main Content */}
      <main className="h-full flex items-center justify-center px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="mb-8 relative">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-100 to-yellow-100 rounded-3xl shadow-lg mb-6">
              <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 animate-pulse" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-bounce" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gray-800 mb-4">
            Coming{" "}
            <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              Soon
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
            We're crafting something amazing for you! This feature is currently
            under development and will be available soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ComingSoon;
