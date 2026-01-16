// src/DownloadButton.js
import React from "react";
import { Button } from "./ui/button";
import { NotepadText } from "lucide-react";

const OpencvButton = () => {
  const openCV = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <Button
        className="border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 flex items-center gap-3"
        variant="outline"
        onClick={() => {
          openCV("https://fayaz-portfolio.vercel.app//Fayaz-Resume.pdf");
        }}
      >
        <NotepadText />
        View CV
      </Button>
    </div>
  );
};

export default OpencvButton;
