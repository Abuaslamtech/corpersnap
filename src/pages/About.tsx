import { MdFacebook, MdMail } from "react-icons/md";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-green-700 mb-4">
            About <span className="text-yellow-600">CorperSnap</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Description */}
          <div className="space-y-8">
            {/* What We Do Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-poppins font-bold text-green-700">
                  What We Do
                </h2>
              </div>
              <p className="text-gray-700 font-inter leading-relaxed text-lg">
                This app is built to help corp members in Nigeria generate their
                POP celebration flyer with ease. It allows users to input their
                details and generate a personalized flyer that can be shared on
                social media or printed. The app is designed to be user-friendly
                and accessible, making it easy for anyone to create a
                professional-looking flyer without any design skills.
              </p>
            </div>

            {/* How It Works Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-poppins font-bold text-yellow-600">
                  How It Works
                </h2>
              </div>
              <p className="text-gray-700 font-inter leading-relaxed text-lg">
                You can use this app to create a flyer for your POP celebration
                by entering your name, state code, and other relevant details.
                The app will then generate a flyer that you can customize
                further if needed. Whether you're celebrating your POP in Lagos,
                Abuja, or any other state in Nigeria, this app has got you
                covered.
              </p>
            </div>
          </div>

          {/* Right Column - Developer Info */}
          <div className="space-y-8">
            {/* Developer Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-poppins font-bold text-green-700 mb-2">
                  Built with Love
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-yellow-600 mx-auto rounded-full"></div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-700 font-inter leading-relaxed">
                  <span className="font-semibold text-green-700">
                    Abdullahi Ismail
                  </span>{" "}
                  of
                  <span className="font-semibold text-yellow-600">
                    {" "}
                    Abuaslam Tech Lab
                  </span>
                  , a team dedicated to creating innovative solutions for
                  everyday problems.
                </p>
                <p className="text-gray-600 font-inter">
                  We believe that technology should be accessible to everyone,
                  and we strive to make our apps user-friendly and efficient.
                </p>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-6 text-center">
                Connect With Us
              </h3>

              {/* Portfolio Link */}
              <div className="mb-6">
                <a
                  href="https://abuaslam.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-inter font-medium py-3 px-6 rounded-xl text-center hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Portfolio
                </a>
              </div>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="https://facebook.com/abuaslamtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl font-inter font-medium transition-colors duration-200"
                >
                <span className="flex flex-row items-center  gap-2"><MdFacebook size={20}/> Facebook</span> 
                </a>
                <a
                  href="https://faceboxok.com/abuaslamtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-inter font-medium transition-colors duration-200"
                >
                   <span className="flex flex-row items-center  gap-2"><AiFillTwitterCircle size={20}/> Facebook</span> 
                </a>
                <a
                  href="https://linkedin.com/in/abuaslamtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-inter font-medium transition-colors duration-200"
                >
                   <span className="flex flex-row items-center  gap-2"><FaLinkedin size={20}/> Facebook</span> 
                </a>
                <a
                  href="mailto:abdullahabuaslam@gmail.com"
                  className="flex items-center justify-center py-3 px-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-inter font-medium transition-colors duration-200"
                >
                   <span className="flex flex-row items-center  gap-2"><MdMail size={20}/> Facebook</span> 
                </a>
              </div>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/2347035974746"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-inter font-medium py-3 px-6 rounded-xl text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex flex-row items-center justify-center gap-2">
                  <TbBrandWhatsappFilled size={20} /> WhatsApp Chat
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
              Ready to Create Your POP Flyer?
            </h3>
            <p className="text-green-100 font-inter text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of corps members who have already created their
              celebration flyers with CorperSnap!
            </p>
            <button className="bg-white text-green-700 font-inter font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
