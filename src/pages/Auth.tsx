import { useState } from "react";
import template1 from "../assets/templates/template1.png";
import template2 from "../assets/templates/template2.png";
import template3 from "../assets/templates/template3.png";
import template4 from "../assets/templates/template4.png";
import template5 from "../assets/templates/template5.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import Header from "../components/Header";

function Auth() {
  const [previewModal, setPreviewModal] = useState<Template | null >(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  // Sample template data - replace with your actual data
  const templates = [
    {
      id: 1,
      name: "Classic Green",
      category: "Professional",
      preview: template1,
      isPopular: true,
      description: "Clean and professional design with NYSC green theme",
    },
    {
      id: 2,
      name: "Golden Celebration",
      category: "Festive",
      preview: template2,
      isNew: true,
      description: "Vibrant golden design perfect for celebration",
    },
    {
      id: 3,
      name: "Minimalist White",
      category: "Modern",
      preview: template3,
      description: "Simple and elegant white background design",
    },
    {
      id: 4,
      name: "Corps Pride",
      category: "Traditional",
      preview: template4,
      isPopular: true,
      description: "Traditional NYSC colors with patriotic elements",
    },
    {
      id: 5,
      name: "Modern Gradient",
      category: "Contemporary",
      preview: template5,
      isNew: true,
      description: "Contemporary gradient design with modern typography",
    },
    {
      id: 6,
      name: "Elegant Portrait",
      category: "Professional",
      preview: template5,
      description: "Portrait-focused layout with elegant borders",
    },
  ];

  interface Template {
    id: number;
    name: string;
    category: string;
    preview: string; // This is an imported image path/URL
    description: string;
    isPopular?: boolean; // Optional property
    isNew?: boolean; // Optional property
  }

  const handlePreview = (template:Template) => {
    setPreviewModal(template);
  };

  const handleUseTemplate = (template:Template) => {
    setIsNavigating(true);
    console.log("Navigating to editor with template:", template.name);

    setTimeout(() => {
      // Navigate to editor page with template data
      navigate("/flyer", {
        state: {
          templateId: template.id,
          templateData: template,
        },
      });
      setIsNavigating(false);
    }, 500);
  };

  const closePreview = () => {
    setPreviewModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <Header />
      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        {/* Page Title Section */}
        <div className="pb-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-gray-800 mb-2">
              Choose Your Perfect Template
            </h2>
            <p className="text-gray-600 font-inter text-sm sm:text-base max-w-2xl mx-auto">
              Select from our collection of professionally designed POP flyer
              templates. Click on any template to start customizing immediately.
            </p>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              {/* Template Preview */}
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src={template.preview}
                  alt={`${template.name} template preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB4PSIxMjUiIHk9IjE3NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjOUI5QjlCIj4KICA8cGF0aCBkPSJNMjUgMTBMMzcuNSAzMEgxMi41TDI1IDEwWiIvPgo8L3N2Zz4KPC9zdmc+";
                  }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {template.isPopular && (
                    <span className="bg-red-500 text-white text-xs font-inter font-medium px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  {template.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-inter font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePreview(template)}
                      className="bg-white text-gray-800 px-4 py-2 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleUseTemplate(template)}
                      disabled={isNavigating}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg font-inter font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isNavigating ? "Loading..." : "Use This"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-poppins font-bold text-gray-800 text-lg leading-tight">
                    {template.name}
                  </h3>
                  <span className="text-xs font-inter text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {template.category}
                  </span>
                </div>

                <p className="font-inter text-gray-600 text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePreview(template)}
                    className="flex-1 border-2 border-gray-200 text-gray-700 py-2 px-3 rounded-lg font-inter font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleUseTemplate(template)}
                    disabled={isNavigating}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg font-inter font-medium transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
                  >
                    {isNavigating ? "Loading..." : "Use Template"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-poppins font-bold text-lg text-gray-800">
                {previewModal.name}
              </h3>
              <button
                onClick={closePreview}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <img
                src={previewModal.preview}
                alt={`${previewModal.name} preview`}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="font-inter text-gray-600 text-sm mb-4">
                {previewModal.description}
              </p>
              <button
                onClick={() => {
                  handleUseTemplate(previewModal);
                  closePreview();
                }}
                disabled={isNavigating}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-inter font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isNavigating ? "Loading..." : "Use This Template"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-inter">
              Loading template editor...
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Auth;
