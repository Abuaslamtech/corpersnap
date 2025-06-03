import { type JSX } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AlertCircle, ArrowLeft } from "lucide-react";
import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";
import TemplateThree from "../components/TemplateThree";
import TemplateFour from "../components/TemplateFour";
import TemplateFive from "../components/TemplateFive";
import Header from "../components/Header";

function Flyer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  interface Template {
    id: number;
    name: string;
    category: string;
    preview: string;
    description: string;
    isPopular?: boolean;
    isNew?: boolean;
  }

  type TemplateComponentType  = 
    (props: { templateData: Template }) => JSX.Element;
  

  // Template component mapping
  const templateComponents: Record<number, TemplateComponentType> = {
    1: TemplateOne,
    2: TemplateTwo,
    3: TemplateThree,
    4: TemplateFour,
    5: TemplateFive,
    6: TemplateFive, // Using TemplateFive for template 6 as mentioned in your original code
  };

  useEffect(() => {
    // Get template data from navigation state
    const templateData = location.state?.templateData;
    const templateId = location.state?.templateId;

    if (templateData && templateId) {
      setSelectedTemplate({
        id: templateId,
        ...templateData,
      });
    } else {
      // If no template data, try to get from URL params or set default
      console.warn("No template data found in navigation state");
      // You could also redirect back to template selection or show default template
    }

    setIsLoading(false);
  }, [location.state]);

  // Render the selected template component
  const renderTemplate = () => {
    if (!selectedTemplate) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-xl font-poppins font-bold text-gray-800 mb-2">
              No Template Selected
            </h2>
            <p className="text-gray-600 font-inter mb-6">
              Please select a template to start creating your POP flyer.
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-inter font-medium transition-colors mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Choose Template
            </button>
          </div>
        </div>
      );
    }

    const TemplateComponent = templateComponents[selectedTemplate.id];

    if (!TemplateComponent) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-poppins font-bold text-gray-800 mb-2">
              Template Not Found
            </h2>
            <p className="text-gray-600 font-inter mb-6">
              The selected template (ID: {selectedTemplate.id}) is not
              available.
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-inter font-medium transition-colors mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Choose Different Template
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="template-container">
        {/* Template Info Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/auth")}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-inter font-medium">
                  Back to Templates
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Render the actual template component */}
        <div className="template-editor">
          <TemplateComponent templateData={selectedTemplate} />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-inter">Loading template...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1">{renderTemplate()}</div>
    </div>
  );
}

export default Flyer;
