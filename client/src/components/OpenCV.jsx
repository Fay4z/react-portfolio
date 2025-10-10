// src/DownloadButton.js
import React from "react";
import { Button } from "./ui/button";
import { NotepadText } from "lucide-react";

const OpencvButton = () => {
  // console.log(import.meta.env.VITE_URL);

  const openCV = (url) => {
    //download the cv
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "Fayaz_CV.pdf";
    // link.click();
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
