/**
 * v0 by Vercel.
 * @see https://v0.dev/t/01vLn25ZaZQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import IMAGES from "@/images/Images";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white px-8 py-12 md:items-center md:justify-between lg:px-40">
      <div className="col-span-2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Melvin Jones Gallano Repol
        </h1>
        <p className="text-gray-600 md:text-2xl md:leading-normal">
          I am a Freelance Software Engineer with expertise in full-stack web
          development, search engine optimization, data analytics, embedded
          system design with arduino programming, hardware & software
          troubleshooting, and progressive web applications. Committed to make
          the world a better place to live.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-[#FFDD00] text-black hover:bg-[#FCCB00]">
            Buy me a coffee
          </Button>
          <Button className="bg-[#FF424D] hover:bg-[#E63E44]">Patreon</Button>
          <Button className="bg-[#0070BA] hover:bg-[#0061A8]">PayPal</Button>
          <Button className="bg-[#29ABE0] hover:bg-[#219CC0]">Ko-fi</Button>
          <Button className="bg-[#FF0844] hover:bg-[#E0073E]">Sponsor</Button>
          <Button
            className="border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700"
            variant="outline"
          >
            View CV
          </Button>
        </div>
      </div>
      <div className="mt-8 flex justify-center md:mt-0 md:flex-none">
        <div className="inline-flex items-center justify-center rounded-full border-8 border-[#FFA500] p-2">
          <Avatar className="h-40 w-40">
            <AvatarImage
              alt="Melvin Jones Gallano Repol"
              src={IMAGES.Placeholder}
            />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
