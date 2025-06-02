import React, { useState, useRef } from "react";

// Using a placeholder for result1 - replace with your actual import
import result1 from "../assets/results/result1.png";
import html2canvas from "html2canvas";


interface TemplateOneProps {
  uploadedImage: string;
  firstName: string;
  lastName: string;
  state: string;
  completionDate?: string;
}

const TemplateOne: React.FC<TemplateOneProps> = ({
  uploadedImage,
  firstName,
  lastName,
  state,
  completionDate,
}) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ aspectRatio: "4/6" }}
    >
      {/* Background Flyer Image - Full size */}
      <img
        src={result1}
        alt="NYSC Certificate Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Fixed Image Container - positioned in the placeholder area */}
      <div className="absolute right-[5%] top-[9%] w-[45%] h-[50%] overflow-hidden border-2 border-transparent">
        {/* Uploaded Image - forced to fit container */}
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="User uploaded"
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>

      {/* Name and State Text Overlay - Bottom left */}
      <div className="absolute bottom-[15%] left-[6%] text-white">
        <div className="text-stroke leading-none">
          <div
            className="font-black uppercase mb-1"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            {firstName}
          </div>
          <div
            className="font-black uppercase mb-3"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {lastName}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div
            className="font-bold uppercase text-stroke flex flex-row items-center gap-2"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            &#128205; {state} STATE
          </div>
          <div
            className="font-bold uppercase text-stroke flex flex-row items-center gap-2"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          >
            &#128198; {formatDate(completionDate || "")}
          </div>
        </div>
      </div>
    </div>
  );
};

function Flyer() {
  // Flyer form states
  const [uploadedImage, setUploadedImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [completionDate, setcompletionDate] = useState("");
  const [showFlyer, setShowFlyer] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Ref for flyer container (for downloading)
  const flyerRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateFlyer = async () => {
    if (!uploadedImage || !firstName || !lastName || !state) {
      alert("Please fill in all fields and upload an image");
      return;
    }

    setIsGenerating(true);
    // Simulate generation delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowFlyer(true);
    setIsGenerating(false);
  };

  const handleDownloadFlyer = async () => {
    if (!flyerRef.current) return;

    try {
      const canvas = await html2canvas(flyerRef.current, {
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: "white",
        width: flyerRef.current.offsetWidth,
        height: flyerRef.current.offsetHeight,
      });

      // Download
      const link = document.createElement("a");
      link.download = `${firstName}_${lastName}_NYSC_Certificate.png`;
      link.href = canvas.toDataURL("image/png", 0.95);
      link.click();
    } catch (error) {
      console.error("Error downloading flyer:", error);
      alert("Error downloading flyer. Please try again.");
    }
  };

  const handleShareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `🎉 Congratulations to ${firstName} ${lastName} on completing NYSC in ${state}! 🇳🇬 #NYSC #ProudMoment`
    );
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
      "_blank"
    );
  };

  const handleShareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `🎉 Congratulations to ${firstName} ${lastName} on completing NYSC in ${state}! 🇳🇬 #NYSC #ProudMoment #NigerianYouth`
    );
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const handleShareToWhatsApp = () => {
    const text = encodeURIComponent(
      `🎉 Congratulations to ${firstName} ${lastName} on completing NYSC in ${state}! 🇳🇬 Check out this amazing certificate!`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleShareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(
      `NYSC Completion - ${firstName} ${lastName}`
    );
    const summary = encodeURIComponent(
      `Congratulations to ${firstName} ${lastName} on successfully completing the National Youth Service Corps in ${state}!`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`,
      "_blank"
    );
  };

  const handleBackToForm = () => {
    setShowFlyer(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:py-8 sm:px-4">
      <div className="w-full max-w-6xl mx-auto">
        {!showFlyer ? (
          // Form Section
          <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 ">
                Flyer Generator
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Create your NYSC POP Flyer
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-2 sm:space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Upload Your Photo *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <div className="space-y-3">
                        <img
                          src={uploadedImage}
                          alt="Preview"
                          className="w-24 h-32 sm:w-32 sm:h-40 object-cover rounded-lg mx-auto border-2 border-gray-200"
                        />
                        <p className="text-green-600 font-medium text-sm sm:text-base">
                          Photo uploaded! Click to change
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                          <svg
                            className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-sm sm:text-base">
                          Click to upload your photo
                        </p>
                        <p className="text-xs text-gray-400">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Name Inputs - First and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value.toUpperCase())}
                    placeholder="Enter your first name"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base sm:text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value.toUpperCase())}
                    placeholder="Enter your last name"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base sm:text-lg"
                  />
                </div>
              </div>

              {/* State Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State of Service *
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value.toUpperCase())}
                  placeholder="Enter your state of service"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base sm:text-lg"
                />
              </div>
              {/* Completion date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Completion *
                </label>
                <input
                  type="date"
                  value={completionDate}
                  onChange={(e) => setcompletionDate(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base sm:text-lg"
                />
              </div>

              {/* Generate Button */}
              <div className="pt-4">
                <button
                  onClick={handleGenerateFlyer}
                  disabled={
                    isGenerating ||
                    !uploadedImage ||
                    !firstName ||
                    !lastName ||
                    !completionDate ||
                    !state
                  }
                  className="w-full bg-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Generating Certificate...</span>
                    </>
                  ) : (
                    <span>Generate My Flyer </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Generated Flyer Section
          <div className="space-y-4 sm:space-y-6">
            {/* Back Button */}
            <button
              onClick={handleBackToForm}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to Form</span>
            </button>

            {/* Flyer Display */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
                🎉 Your NYSC Certificate is Ready!
              </h2>

              {/* Certificate Container - Fixed aspect ratio */}
              <div className="w-full max-w-4xl mx-auto mb-4 sm:mb-6">
                <div
                  ref={flyerRef}
                  className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <TemplateOne
                    uploadedImage={uploadedImage}
                    firstName={firstName}
                    lastName={lastName}
                    state={state}
                    completionDate={completionDate}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                {/* Download Button */}
                <button
                  onClick={handleDownloadFlyer}
                  className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download PNG</span>
                </button>

                {/* Share Buttons */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={handleShareToFacebook}
                    className="bg-blue-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={handleShareToTwitter}
                    className="bg-sky-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors text-sm sm:text-base"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={handleShareToWhatsApp}
                    className="bg-green-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm sm:text-base"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={handleShareToLinkedIn}
                    className="bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors text-sm sm:text-base"
                  >
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flyer;
