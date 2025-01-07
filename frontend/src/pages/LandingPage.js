import React, { useState } from "react";
import NotesPage from "./NotesPage";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("notes"); // Default to Notes tab

  const renderTabContent = () => {
    switch (activeTab) {
      case "notes":
        return <NotesPage />; // Render the NotesPage component
      case "memos":
        return <p className="text-center mt-4">Welcome to Memos! You can manage your memos here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to DataExpertsIQ</h1>
      <p className="text-center text-lg mb-8">This platform provides various functionalities:</p>
      <div className="tabs flex justify-center border-b-2 mb-4">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "notes" ? "border-b-4 border-blue-600 text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("notes")}
        >
          Notes
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "memos" ? "border-b-4 border-blue-600 text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("memos")}
        >
          Memos
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default LandingPage;
