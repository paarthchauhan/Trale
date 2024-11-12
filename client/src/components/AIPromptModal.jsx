import React, { useState } from "react";

const AIPromptModal = ({ onClose, onGenerate, setDescription }) => {
  const [prompt, setPrompt] = useState("");

  const handleGenerateClick = () => {
    if (prompt.trim()) {
        onGenerate(prompt);
        setDescription(prompt); // Update the description field
        onClose();  // Trigger AI post generation
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h3 className="text-xl font-semibold mb-4">Generate Caption with AI</h3>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter a prompt for AI..."
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 rounded-lg text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleGenerateClick}
            className="py-2 px-4 bg-blue-500 rounded-lg text-black text-sm"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPromptModal;
