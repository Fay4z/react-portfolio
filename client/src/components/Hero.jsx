/**
 * v0 by Vercel.
 * @see https://v0.dev/t/01vLn25ZaZQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import IMAGES from "@/images/Images";
import { Link } from "react-router-dom";
import { Linkedin, Github, NotepadText } from "lucide-react";
import DownloadButton from "./DownloadCV";

export default function Hero() {
  return (
    <div
      name="home"
      className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 md:items-center md:justify-between lg:px-40 lg:my-5"
    >
      <div className="col-span-2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight ">
          I'm Fayaz Ahmad
        </h1>
        <p className="text-gray-600 md:text-2xl md:leading-normal">
          A <span className=" text-orange-500">Full Stack Developer</span> who
          is passionate about learnig new things and making the web more
          accessible and user-friendly.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-3">
            <Github />
            <Link to="https://github.com/Fay4z" target="_blank">
              Github
            </Link>
          </Button>
          <Button className="bg-[#29ABE0] hover:bg-[#219CC0] flex item-center gap-3">
            <Linkedin />
            <Link
              to="https://www.linkedin.com/in/fayaz-ahmad-685a5b241/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Button>
          <DownloadButton />
          <i className="devicon-react-original colored"></i>
        </div>
      </div>
      <div className="mt-8 flex justify-center md:mt-0 md:flex-none">
        <div className="inline-flex items-center justify-center rounded-full border-8 border-orange-500 p-2">
          <Avatar className="h-40 w-40">
            <AvatarImage alt="Fayaz Ahmad" src={IMAGES.Profile} />
            <AvatarFallback>Fayaz Ahmad Profile</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
