import Header from "../components/Header";
import { MdEmail } from "react-icons/md";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Footer from "../components/Footer";

function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-green-700 mb-4">
            Support <span className="text-yellow-600">CorperSnap</span>
          </h1>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto mb-6">
            Help us make POP celebrations more memorable for Nigerian corps members
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Column - Why Support */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-poppins font-bold text-green-700">Why Support Us?</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <p>
                  CorperSnap is a <span className="font-semibold text-green-700">free tool</span> created to help Nigerian corps members celebrate their POP achievements with beautiful, personalized flyers.
                </p>
                <p>
                  Your support helps us:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Keep the service completely free for all users
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Add new features and flyer templates
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Maintain and improve server performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Develop more tools for the NYSC community
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-poppins font-bold text-yellow-600">Ways to Support</h2>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <h3 className="font-semibold text-green-700 mb-2">💰 Financial Support</h3>
                  <p className="text-sm">Help with hosting costs, development tools, and new features</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">🤝 Partnership</h3>
                  <p className="text-sm">Collaborate with us to reach more corps members</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <h3 className="font-semibold text-purple-700 mb-2">📢 Spread the Word</h3>
                  <p className="text-sm">Share CorperSnap with fellow corps members and friends</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <h3 className="font-semibold text-orange-700 mb-2">💡 Ideas & Feedback</h3>
                  <p className="text-sm">Help us improve with your suggestions and feature requests</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-poppins font-bold text-green-700 mb-2">Let's Discuss!</h2>
                <p className="text-gray-600 font-inter">
                  Ready to support CorperSnap? We'd love to hear from you and discuss how we can work together.
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <a 
                  href="mailto:abdullahabuaslam@gmail.com?subject=Supporting CorperSnap - Let's Discuss&body=Hi Abdullahi,%0D%0A%0D%0AI'm interested in supporting the CorperSnap project and would like to discuss how I can help.%0D%0A%0D%0AMy preferred support method:%0D%0A- [ ] Financial contribution%0D%0A- [ ] Partnership opportunity%0D%0A- [ ] Spreading awareness%0D%0A- [ ] Providing feedback and ideas%0D%0A- [ ] Other (please specify)%0D%0A%0D%0APlease let me know the best time to discuss this further.%0D%0A%0D%0AThank you for creating such a valuable tool for corps members!%0D%0A%0D%0ABest regards,"
                  className="block  w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-inter font-semibold py-4 px-6 rounded-xl text-center hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex flex-row items-center justify-center gap-2"><MdEmail size={20}/> Send Email</span>
                </a>

                <a 
                  href="https://wa.me/2347035974746?text=Hi%20Abdullahi!%20I'm%20interested%20in%20supporting%20the%20CorperSnap%20project%20and%20would%20like%20to%20discuss%20how%20I%20can%20help.%20When%20would%20be%20a%20good%20time%20to%20chat%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-inter font-semibold py-4 px-6 rounded-xl text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex flex-row items-center justify-center gap-2"><TbBrandWhatsappFilled size={20} /> WhatsApp Chat</span> 
                </a>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500 font-inter">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-6 text-center">Other Ways to Connect</h3>
              
              <div className="grid gap-3">
                <a 
                  href="https://facebook.com/abuaslamtech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl font-inter font-medium transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook Message
                </a>
                
                <a 
                  href="https://linkedin.com/in/abuaslamtech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-inter font-medium transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Connect
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 text-white shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
              Thank You for Considering Supporting Us! 🙏
            </h3>
            <p className="text-green-100 font-inter text-lg mb-6">
              Every form of support, big or small, helps us serve the NYSC community better. 
              Together, we can make POP celebrations more special for thousands of corps members across Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-inter">
              <span className="bg-white/20 px-4 py-2 rounded-full">🎓 Empowering Corps Members</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🇳🇬 Made in Nigeria</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">💚 Built with Love</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Support;